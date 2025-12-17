import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simula envio (em produção, conectar a um serviço como Formspree, EmailJS, etc.)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-gray-300">
            Nome Completo *
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-background border-white/10 text-white"
            data-testid="input-name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-300">
            E-mail Corporativo *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-background border-white/10 text-white"
            data-testid="input-email"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-gray-300">
            Telefone
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="bg-background border-white/10 text-white"
            data-testid="input-phone"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company" className="text-gray-300">
            Empresa
          </Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="bg-background border-white/10 text-white"
            data-testid="input-company"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="service" className="text-gray-300">
          Serviço de Interesse
        </Label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-background border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
          data-testid="select-service"
        >
          <option value="">Selecione um serviço</option>
          <option value="desenvolvimento">Desenvolvimento de Sistemas</option>
          <option value="marketing">Marketing Digital</option>
          <option value="infraestrutura">Infraestrutura Cloud</option>
          <option value="bi">Business Intelligence</option>
          <option value="processos">Gestão de Processos</option>
          <option value="redes">Redes e Telecom</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-gray-300">
          Mensagem *
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="bg-background border-white/10 text-white resize-none"
          placeholder="Conte-nos sobre seu projeto ou necessidade..."
          data-testid="textarea-message"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-white rounded-full h-12 text-lg font-bold"
        data-testid="button-submit"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Enviar Mensagem
          </>
        )}
      </Button>
    </form>
  );
}
