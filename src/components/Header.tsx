import { Brain, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <header className="w-full py-6 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center glow-shadow">
            <Brain className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold gradient-text">IEC AI Chat</h1>
            <p className="text-sm text-muted-foreground">Powered by Gemini AI</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground transition-colors"
            asChild
          >
            <a href="mailto:bedrajkhadka@example.com" aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground transition-colors"
            asChild
          >
            <a href="https://linkedin.com/in/bedrajkhadka" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground transition-colors"
            asChild
          >
            <a href="https://github.com/bedrajkhadka" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};