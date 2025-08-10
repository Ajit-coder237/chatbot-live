import { ChatInterface } from '@/components/ChatInterface';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-6 py-8">
        <div className="w-full max-w-5xl space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              Chat with Bed Raj Khadka's AI
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the power of Google Gemini AI in a beautiful, intuitive interface. 
              Ask questions, get help, or just have a conversation!
            </p>
          </div>

          {/* Chat Interface */}
          <ChatInterface />
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary mx-auto flex items-center justify-center glow-shadow">
                <span className="text-white font-bold text-xl">⚡</span>
              </div>
              <h3 className="font-semibold">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                Powered by Google Gemini for instant responses
              </p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary mx-auto flex items-center justify-center glow-shadow">
                <span className="text-white font-bold text-xl">🧠</span>
              </div>
              <h3 className="font-semibold">Intelligent</h3>
              <p className="text-sm text-muted-foreground">
                Advanced AI understanding for complex queries
              </p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary mx-auto flex items-center justify-center glow-shadow">
                <span className="text-white font-bold text-xl">🎨</span>
              </div>
              <h3 className="font-semibold">Beautiful</h3>
              <p className="text-sm text-muted-foreground">
                Stunning interface designed for the best experience
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
