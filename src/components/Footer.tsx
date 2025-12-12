import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-hosvi-bg text-hosvi-text py-16 border-t border-hosvi-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-2xl font-bold mb-4">
              Hosvi<span className="text-hosvi-accent">.</span>
            </div>
            <p className="text-hosvi-muted mb-4">
              Growth systems for chiropractors in Florida.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-hosvi-muted hover:text-hosvi-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-hosvi-muted hover:text-hosvi-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-hosvi-muted hover:text-hosvi-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-hosvi-muted">
              <li><a href="#" className="hover:text-hosvi-primary transition-colors">Patient Acquisition</a></li>
              <li><a href="#" className="hover:text-hosvi-primary transition-colors">CRM Setup</a></li>
              <li><a href="#" className="hover:text-hosvi-primary transition-colors">Lead Generation</a></li>
              <li><a href="#" className="hover:text-hosvi-primary transition-colors">Analytics Dashboard</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-hosvi-muted">
              <li><a href="#" className="hover:text-hosvi-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-hosvi-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-hosvi-primary transition-colors">Free Trial</a></li>
              <li><a href="#" className="hover:text-hosvi-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-hosvi-muted">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:hello@hosvi.com" className="hover:text-hosvi-primary transition-colors">
                  hello@hosvi.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <a href="tel:7542070982" className="hover:text-hosvi-primary transition-colors">
                  (754) 207-0982
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-0.5" />
                <div className="text-sm">
                  6421 N. Florida Ave<br />
                  Suite D-1130<br />
                  Tampa, FL 33604
                </div>
              </div>
              <p className="text-sm">
                Serving Miami, Orlando, and Fort Lauderdale
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-hosvi-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-hosvi-muted text-sm">
            <p>© 2024 Hosvi. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-hosvi-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-hosvi-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
