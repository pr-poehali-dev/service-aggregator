import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Master {
  id: number;
  name: string;
  service: string;
  rating: number;
  reviews: number;
  distance: string;
  price: string;
  image: string;
  badge?: string;
}

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Все услуги', icon: 'Grid3x3' },
    { id: 'cleaning', label: 'Клининг', icon: 'Sparkles' },
    { id: 'beauty', label: 'Маникюр', icon: 'Scissors' },
    { id: 'repair', label: 'Ремонт', icon: 'Wrench' },
    { id: 'plumbing', label: 'Сантехника', icon: 'Droplet' },
    { id: 'massage', label: 'Массаж', icon: 'Hand' },
  ];

  const masters: Master[] = [
    {
      id: 1,
      name: 'Алексей Смирнов',
      service: 'Сантехник',
      rating: 4.9,
      reviews: 127,
      distance: '0.8 км',
      price: 'от 2000 ₽',
      image: 'https://v3b.fal.media/files/b/penguin/xIs3vDEXQYHaxvvJ_f6P1_output.png',
      badge: 'ТОП'
    },
    {
      id: 2,
      name: 'Мария Иванова',
      service: 'Мастер маникюра',
      rating: 5.0,
      reviews: 203,
      distance: '1.2 км',
      price: 'от 1500 ₽',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
      badge: 'ПРОВЕРЕН'
    },
    {
      id: 3,
      name: 'Дмитрий Петров',
      service: 'Клининг квартир',
      rating: 4.8,
      reviews: 89,
      distance: '1.5 км',
      price: 'от 3000 ₽',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop'
    },
    {
      id: 4,
      name: 'Елена Соколова',
      service: 'Массажист',
      rating: 4.9,
      reviews: 156,
      distance: '2.1 км',
      price: 'от 2500 ₽',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      badge: 'ТОП'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-background">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={20} />
              </div>
              <span className="text-2xl font-heading font-bold text-foreground">МастерПоиск</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Как работает</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Для мастеров</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button size="sm" className="hidden md:flex">
              <Icon name="UserPlus" size={16} className="mr-2" />
              Войти
            </Button>
            <Button size="icon" variant="ghost" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Найди мастера рядом с тобой
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Клининг, маникюр, ремонт и сотни других услуг. Проверенные специалисты в твоём районе.
            </p>
            
            <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 animate-scale-in">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 relative">
                  <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <Input
                    placeholder="Какую услугу ищешь?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-14 text-lg border-2 focus:border-primary"
                  />
                </div>
                <div className="flex-1 relative">
                  <Icon name="MapPin" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <Input
                    placeholder="Твой район"
                    className="pl-12 h-14 text-lg border-2 focus:border-primary"
                  />
                </div>
                <Button size="lg" className="h-14 px-8 text-lg font-semibold">
                  Найти мастера
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-y">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? 'default' : 'outline'}
                className="flex-shrink-0 gap-2 h-12 px-6"
                onClick={() => setSelectedCategory(cat.id)}
              >
                <Icon name={cat.icon as any} size={18} />
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-2">
                Мастера рядом с тобой
              </h2>
              <p className="text-muted-foreground">Найдено {masters.length} специалистов в твоём районе</p>
            </div>
            <Button variant="outline" className="gap-2">
              <Icon name="SlidersHorizontal" size={18} />
              Фильтры
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {masters.map((master, index) => (
              <Card 
                key={master.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="flex gap-4 p-5">
                    <div className="relative flex-shrink-0">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden bg-muted">
                        <img 
                          src={master.image} 
                          alt={master.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {master.badge && (
                        <Badge className="absolute -top-2 -right-2 bg-secondary text-white font-semibold">
                          {master.badge}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-bold text-lg text-foreground mb-1 truncate">
                        {master.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">{master.service}</p>
                      
                      <div className="flex items-center gap-4 mb-3 text-sm">
                        <div className="flex items-center gap-1">
                          <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                          <span className="font-semibold">{master.rating}</span>
                          <span className="text-muted-foreground">({master.reviews})</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Icon name="MapPin" size={14} />
                          <span>{master.distance}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-heading font-bold text-lg text-primary">{master.price}</span>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="gap-1">
                            <Icon name="Phone" size={14} />
                          </Button>
                          <Button size="sm" className="gap-1">
                            <Icon name="Calendar" size={14} />
                            Записаться
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Как это работает?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { icon: 'Search', title: 'Найди мастера', desc: 'Выбери услугу и укажи свой район' },
                { icon: 'Users', title: 'Сравни предложения', desc: 'Посмотри рейтинги и цены' },
                { icon: 'Calendar', title: 'Запишись онлайн', desc: 'Выбери удобное время в пару кликов' }
              ].map((step, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={step.icon as any} size={28} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ты мастер? Присоединяйся к нам!
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Получай больше заказов через нашу платформу. Регистрация бесплатная.
            </p>
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-semibold">
              <Icon name="UserPlus" size={20} className="mr-2" />
              Зарегистрироваться как мастер
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-foreground text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Sparkles" className="text-white" size={20} />
                </div>
                <span className="text-xl font-heading font-bold">МастерПоиск</span>
              </div>
              <p className="text-white/70 text-sm">
                Находи лучших мастеров в своём районе
              </p>
            </div>
            
            {[
              { title: 'Компания', links: ['О нас', 'Вакансии', 'Блог', 'Пресса'] },
              { title: 'Помощь', links: ['FAQ', 'Поддержка', 'Политика', 'Условия'] },
              { title: 'Контакты', links: ['Email', 'Telegram', 'WhatsApp', 'Instagram'] }
            ].map((col, idx) => (
              <div key={idx}>
                <h3 className="font-heading font-bold mb-4">{col.title}</h3>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center text-white/70 text-sm">
            © 2024 МастерПоиск. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
