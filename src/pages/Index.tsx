import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

const categories = [
  { id: 'cleaning', name: 'Клининг', icon: 'Sparkles' },
  { id: 'beauty', name: 'Маникюр', icon: 'Scissors' },
  { id: 'repair', name: 'Ремонт', icon: 'Wrench' },
  { id: 'plumbing', name: 'Сантехника', icon: 'Droplet' },
  { id: 'electric', name: 'Электрика', icon: 'Zap' },
  { id: 'moving', name: 'Переезд', icon: 'Truck' },
];

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Briefcase" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">Сервис Агрегатор</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-foreground hover:text-primary transition">Услуги</a>
            <a href="#" className="text-foreground hover:text-primary transition">Стать мастером</a>
            <a href="#" className="text-foreground hover:text-primary transition">О нас</a>
          </nav>
          <Button>Войти</Button>
        </div>
      </header>

      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Найдите мастера рядом с вами
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Профессионалы для любой задачи: клининг, ремонт, красота и многое другое
            </p>
            
            <div className="flex flex-col md:flex-row gap-3 max-w-2xl mx-auto">
              <div className="flex-1 relative">
                <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Что вам нужно? (например, клининг)"
                  className="pl-10 h-12 text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex-1 relative">
                <Icon name="MapPin" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Ваш город или адрес"
                  className="pl-10 h-12 text-base"
                />
              </div>
              <Button className="h-12 px-8 text-base" onClick={() => navigate('/catalog')}>
                Найти
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Популярные категории</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Card 
                key={category.id}
                className="p-6 hover:shadow-lg transition cursor-pointer flex flex-col items-center gap-3 text-center"
              >
                <div className="bg-primary/10 p-4 rounded-full">
                  <Icon name={category.icon as any} className="text-primary" size={32} />
                </div>
                <span className="font-semibold">{category.name}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Как это работает</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Найти нужного специалиста стало проще, чем когда-либо
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-xl mb-2">Выберите услугу</h3>
              <p className="text-muted-foreground">
                Укажите что вам нужно и где вы находитесь
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-xl mb-2">Выберите мастера</h3>
              <p className="text-muted-foreground">
                Изучите профили, отзывы и рейтинги специалистов
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-xl mb-2">Свяжитесь и договоритесь</h3>
              <p className="text-muted-foreground">
                Обсудите детали и договоритесь о времени работы
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                  <Icon name="Shield" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Проверенные специалисты</h3>
                  <p className="text-muted-foreground">
                    Все мастера проходят верификацию и имеют подтвержденный опыт
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                  <Icon name="Star" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Честные отзывы</h3>
                  <p className="text-muted-foreground">
                    Реальные отзывы от клиентов помогут сделать правильный выбор
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Мастера рядом</h3>
                  <p className="text-muted-foreground">
                    Находите специалистов в вашем районе для быстрого выполнения заказа
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                  <Icon name="Clock" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Быстрый поиск</h3>
                  <p className="text-muted-foreground">
                    Найдите подходящего мастера за несколько минут
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Briefcase" className="text-primary" size={28} />
                <span className="text-xl font-bold">Сервис Агрегатор</span>
              </div>
              <p className="text-background/70">
                Профессиональные услуги рядом с вами
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Категории</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-primary transition">Клининг</a></li>
                <li><a href="#" className="hover:text-primary transition">Красота</a></li>
                <li><a href="#" className="hover:text-primary transition">Ремонт</a></li>
                <li><a href="#" className="hover:text-primary transition">Все услуги</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-primary transition">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition">Стать мастером</a></li>
                <li><a href="#" className="hover:text-primary transition">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition">Помощь</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-background/70">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@service.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  8 800 555-35-35
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
            <p>&copy; 2025 Сервис Агрегатор. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;