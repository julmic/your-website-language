import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Leaf } from "lucide-react";
import { toast } from "sonner";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Merci pour votre inscription !");
      setEmail("");
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Leaf className="h-8 w-8 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Restez informé
          </h2>
          <p className="text-muted-foreground mb-8">
            Inscrivez-vous à notre newsletter pour recevoir nos conseils bien-être, actualités et offres exclusives.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Votre adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                required
              />
            </div>
            <Button type="submit">
              S'inscrire
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            En vous inscrivant, vous acceptez de recevoir nos communications. Désabonnement possible à tout moment.
          </p>
        </div>
      </div>
    </section>
  );
};
