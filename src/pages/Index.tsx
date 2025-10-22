import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Prize {
  id: number;
  name: string;
  icon: string;
  color: string;
}

const Index = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [timer, setTimer] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [wonPrize, setWonPrize] = useState<Prize | null>(null);

  const prizes: Prize[] = [
    { id: 1, name: 'iPhone 15 Pro', icon: 'Smartphone', color: '#9b87f5' },
    { id: 2, name: 'AirPods Pro', icon: 'Headphones', color: '#FFD700' },
    { id: 3, name: 'MacBook Air', icon: 'Laptop', color: '#FF6B6B' },
    { id: 4, name: '500₽', icon: 'Coins', color: '#4ECDC4' },
    { id: 5, name: 'Apple Watch', icon: 'Watch', color: '#95E1D3' },
    { id: 6, name: '1000₽', icon: 'Wallet', color: '#F38181' },
    { id: 7, name: 'iPad Pro', icon: 'Tablet', color: '#AA96DA' },
    { id: 8, name: 'Бесплатная попытка', icon: 'Gift', color: '#FCBAD3' },
    { id: 9, name: '2000₽', icon: 'CreditCard', color: '#FFFFD2' },
    { id: 10, name: 'AirTag', icon: 'Radio', color: '#A8D8EA' },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && startTime) {
      interval = setInterval(() => {
        setTimer(Date.now() - startTime);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isPlaying, startTime]);

  const handleStart = () => {
    setIsPlaying(true);
    setStartTime(Date.now());
    setTimer(0);
    setWonPrize(null);
  };

  const handleStop = () => {
    if (!startTime) return;
    
    setIsPlaying(false);
    const elapsed = Date.now() - startTime;
    const targetTime = 3000;
    const tolerance = 50;
    
    if (Math.abs(elapsed - targetTime) <= tolerance) {
      setAttempts(attempts - 1);
      spinWheel();
    } else {
      setAttempts(attempts - 1);
      setWonPrize(null);
    }
  };

  const spinWheel = () => {
    setIsSpinning(true);
    const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];
    const prizeIndex = prizes.indexOf(randomPrize);
    const degreesPerPrize = 360 / prizes.length;
    const targetRotation = 360 * 5 + (prizeIndex * degreesPerPrize);
    
    setRotation(targetRotation);
    
    setTimeout(() => {
      setIsSpinning(false);
      setWonPrize(randomPrize);
    }, 4000);
  };

  const handleBuySubscription = () => {
    setAttempts(1);
    setIsAuth(true);
  };

  const handleBuyAttempts = () => {
    setAttempts(attempts + 1);
  };

  if (!isAuth) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Gift" size={40} className="text-white" />
              </div>
              <h1 className="text-3xl font-heading font-bold mb-2">Колесо Подарков</h1>
              <p className="text-muted-foreground">Испытай удачу и выиграй крутые призы!</p>
            </div>

            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full h-14 text-lg font-semibold"
                onClick={handleBuySubscription}
              >
                <Icon name="Sparkles" size={20} className="mr-2" />
                Купить подписку за 250₽
              </Button>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">или войти</span>
                </div>
              </div>

              <Button variant="outline" size="lg" className="w-full h-12">
                <Icon name="Mail" size={18} className="mr-2" />
                Войти через Email
              </Button>
            </div>

            <div className="mt-8 p-4 bg-muted rounded-xl">
              <div className="flex items-start gap-3">
                <Icon name="Info" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground mb-1">Как играть?</p>
                  <p>1. Купи подписку и получи первую попытку</p>
                  <p>2. Останови таймер на отметке 3.00 секунды</p>
                  <p>3. Крути колесо и выигрывай призы!</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <Icon name="Gift" className="text-white" size={20} />
              </div>
              <span className="text-xl font-heading font-bold">Колесо Подарков</span>
            </div>
            
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="h-10 px-4 text-base font-semibold gap-2">
                <Icon name="Ticket" size={18} />
                {attempts} попыток
              </Badge>
              <Button size="sm" variant="outline">
                <Icon name="User" size={16} className="mr-2" />
                Профиль
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <Card className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-heading font-bold mb-2">Игровая зона</h2>
                    <p className="text-muted-foreground">Останови таймер ровно на 3.00 секунды</p>
                  </div>

                  <div className="relative w-64 h-64 mx-auto mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full animate-pulse"></div>
                    <div className="absolute inset-4 bg-card rounded-full flex items-center justify-center border-4 border-primary">
                      <div className="text-center">
                        <div className="text-6xl font-heading font-bold mb-2">
                          {(timer / 1000).toFixed(2)}
                        </div>
                        <div className="text-sm text-muted-foreground">секунды</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {!isPlaying ? (
                      <Button 
                        size="lg" 
                        className="w-full h-16 text-xl font-bold"
                        onClick={handleStart}
                        disabled={attempts === 0 || isSpinning}
                      >
                        <Icon name="Play" size={24} className="mr-2" />
                        Старт
                      </Button>
                    ) : (
                      <Button 
                        size="lg" 
                        variant="destructive"
                        className="w-full h-16 text-xl font-bold"
                        onClick={handleStop}
                      >
                        <Icon name="Square" size={24} className="mr-2" />
                        Стоп
                      </Button>
                    )}

                    <Button 
                      size="lg" 
                      variant="outline"
                      className="w-full h-12"
                      onClick={handleBuyAttempts}
                    >
                      <Icon name="Plus" size={20} className="mr-2" />
                      Купить попытку за 150₽
                    </Button>
                  </div>

                  {attempts === 0 && (
                    <div className="mt-4 p-4 bg-destructive/10 rounded-lg text-center">
                      <p className="text-sm text-destructive font-semibold">
                        У вас закончились попытки! Купите ещё, чтобы продолжить игру.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {wonPrize && (
                <Card className="border-2 border-secondary animate-scale-in">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="Trophy" size={32} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-heading font-bold mb-2">Поздравляем!</h3>
                      <p className="text-lg mb-4">Вы выиграли:</p>
                      <div className="inline-block px-6 py-3 bg-secondary/20 rounded-xl">
                        <p className="text-2xl font-bold text-secondary">{wonPrize.name}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            <div>
              <Card className="overflow-hidden">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-heading font-bold mb-6 text-center">Колесо призов</h2>
                  
                  <div className="relative w-full aspect-square max-w-md mx-auto">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[30px] border-t-secondary drop-shadow-lg"></div>
                    </div>

                    <div 
                      className="w-full h-full rounded-full relative transition-transform duration-[4000ms] ease-out"
                      style={{ 
                        transform: `rotate(${rotation}deg)`,
                        background: `conic-gradient(${prizes.map((p, i) => 
                          `${p.color} ${(i * 360) / prizes.length}deg ${((i + 1) * 360) / prizes.length}deg`
                        ).join(', ')})`
                      }}
                    >
                      <div className="absolute inset-0 rounded-full border-8 border-card shadow-2xl"></div>
                      
                      {prizes.map((prize, index) => {
                        const angle = (index * 360) / prizes.length + 180 / prizes.length;
                        const radius = 40;
                        return (
                          <div
                            key={prize.id}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            style={{
                              transform: `rotate(${angle}deg) translateY(-${radius}%)`,
                            }}
                          >
                            <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                              <Icon name={prize.icon as any} size={24} className="text-gray-800" />
                            </div>
                          </div>
                        );
                      })}

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-card rounded-full border-4 border-secondary shadow-xl flex items-center justify-center">
                          <Icon name="Sparkles" size={28} className="text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {prizes.map((prize) => (
                      <div 
                        key={prize.id} 
                        className="flex items-center gap-2 p-2 rounded-lg bg-muted/50"
                      >
                        <div 
                          className="w-3 h-3 rounded-full flex-shrink-0"
                          style={{ backgroundColor: prize.color }}
                        ></div>
                        <span className="text-xs text-muted-foreground truncate">{prize.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
