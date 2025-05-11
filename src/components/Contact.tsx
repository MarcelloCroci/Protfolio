
import React, { useState, useRef } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  name: z.string().min(2, { message: "Il nome deve contenere almeno 2 caratteri" }),
  email: z.string().email({ message: "Per favore inserisci un'email valida" }),
  subject: z.string().min(3, { message: "L'oggetto deve contenere almeno 3 caratteri" }),
  message: z.string().min(10, { message: "Il messaggio deve contenere almeno 10 caratteri" }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Initialize EmailJS with your service ID (you'll get this from EmailJS)
      const serviceId = 'service_default'; // Replace with your service ID
      const templateId = 'template_default'; // Replace with your template ID
      const userId = 'YOUR_USER_ID'; // Replace with your user ID
      
      const templateParams = {
        to_email: 'marci.croci06@gmail.com',
        from_name: values.name,
        from_email: values.email,
        subject: values.subject,
        message: values.message,
        reply_to: values.email,
      };
      
      await emailjs.send(serviceId, templateId, templateParams, userId);
      
      toast.success('Messaggio inviato con successo!', {
        description: 'Ti risponderò il prima possibile.',
      });
      
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Errore nell\'invio del messaggio', {
        description: 'Si è verificato un problema. Riprova più tardi.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black grid-pattern">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white mb-16">CONTATTAMI</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left column - Contact Info */}
          <div className="space-y-8">
            <p className="text-lg text-white/70 max-w-md font-mono">
              Hai un progetto in mente o vuoi collaborare? Non esitare a contattarmi attraverso uno di questi canali.
            </p>
            
            <div className="space-y-6 mt-8">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 border border-white/20 flex items-center justify-center">
                  <Mail className="text-white/70" size={22} />
                </div>
                <div>
                  <h4 className="font-medium text-white font-mono">Email</h4>
                  <a href="mailto:marci.croci06@gmail.com" className="text-white/60 hover:text-white transition-colors">
                    marci.croci06@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 border border-white/20 flex items-center justify-center">
                  <MapPin className="text-white/70" size={22} />
                </div>
                <div>
                  <h4 className="font-medium text-white font-mono">Posizione</h4>
                  <p className="text-white/60">New York, USA</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 border border-white/20 flex items-center justify-center">
                  <Phone className="text-white/70" size={22} />
                </div>
                <div>
                  <h4 className="font-medium text-white font-mono">Telefono</h4>
                  <a href="tel:+12345678" className="text-white/60 hover:text-white transition-colors">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <h4 className="font-medium text-white mb-4 font-mono">Seguimi</h4>
              <div className="flex items-center gap-4">
                <a 
                  href="#" 
                  className="h-10 w-10 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <Github size={20} className="text-white/70" />
                </a>
                <a 
                  href="#" 
                  className="h-10 w-10 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <Linkedin size={20} className="text-white/70" />
                </a>
                <a 
                  href="#" 
                  className="h-10 w-10 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <Twitter size={20} className="text-white/70" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right column - Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm p-6 border border-white/10">
            <h3 className="text-xl font-mono mb-6 text-white">INVIA UN MESSAGGIO</h3>
            
            <Form {...form}>
              <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-sm text-white/80 font-mono">Il Tuo Nome</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-white/30"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400 text-xs" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-sm text-white/80 font-mono">La Tua Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-white/30"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400 text-xs" />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm text-white/80 font-mono">Oggetto</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Richiesta Progetto"
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-white/30"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm text-white/80 font-mono">Messaggio</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Parlami del tuo progetto..."
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-white/30 min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-white text-black hover:bg-white/90 font-mono"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Invio in corso...' : 'Invia Messaggio'}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
