import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

interface Master {
  id: number;
  name: string;
  profession: string;
  rating: number;
  reviews: number;
  price: string;
  distance: string;
  verified: boolean;
  avatar: string;
}

const mockMasters: Master[] = [
  {
    id: 1,
    name: 'Анна Петрова',
    profession: 'Мастер маникюра',
    rating: 4.9,
    reviews: 127,
    price: 'от 1500₽',
    distance: '1.2 км',
    verified: true,
    avatar: '👩‍🎨',
  },
  {
    id: 2,
    name: 'Дмитрий Иванов',
    profession: 'Клининг-специалист',
    rating: 5.0,
    reviews: 89,
    price: 'от 2000₽',
    distance: '0.8 км',
    verified: true,
    avatar: '🧹',
  },
  {
    id: 3,
    name: 'Елена Смирнова',
    profession: 'Специалист по клинингу',
    rating: 4.8,
    reviews: 156,
    price: 'от 1800₽',
    distance: '2.1 км',
    verified: true,
    avatar: '✨',
  },
  {
    id: 4,
    name: 'Сергей Волков',
    profession: 'Мастер по ремонту',
    rating: 4.7,
    reviews: 203,
    price: 'от 3000₽',
    distance: '1.5 км',
    verified: false,
    avatar: '🔧',
  },
  {
    id: 5,
    name: 'Мария Козлова',
    profession: 'Мастер маникюра',
    rating: 4.9,
    reviews: 94,
    price: 'от 1600₽',
    distance: '0.5 км',
    verified: true,
    avatar: '💅',
  },
  {
    id: 6,
    name: 'Алексей Новиков',
    profession: 'Электрик',
    rating: 4.6,
    reviews: 78,
    price: 'от 2500₽',
    distance: '3.2 км',
    verified: true,
    avatar: '⚡',
  },
];

const categories = ['Все', 'Клининг', 'Маникюр', 'Ремонт', 'Сантехника', 'Электрика'];

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <Icon name="Briefcase" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">Сервис Агрегатор</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-foreground hover:text-primary transition">Главная</a>
            <a href="/catalog" className="text-primary font-semibold">Каталог</a>
            <a href="#" className="text-foreground hover:text-primary transition">Стать мастером</a>
          </nav>
          <Button>Войти</Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-80 flex-shrink-0">
            <Card className="p-6 sticky top-24">
              <h3 className="font-bold text-lg mb-4">Фильтры</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-3 block">Поиск</label>
                  <div className="relative">
                    <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input
                      placeholder="Имя или услуга"
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-3 block">Категория</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <Badge
                        key={cat}
                        variant={selectedCategory === cat ? 'default' : 'outline'}
                        className="cursor-pointer"
                        onClick={() => setSelectedCategory(cat)}
                      >
                        {cat}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-3 block">
                    Цена: {priceRange[0]}₽ - {priceRange[1]}₽
                  </label>
                  <Slider
                    min={0}
                    max={10000}
                    step={100}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mt-2"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-3 block">Рейтинг</label>
                  <div className="space-y-2">
                    {[5, 4, 3].map((rating) => (
                      <label key={rating} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <div className="flex items-center gap-1">
                          {Array.from({ length: rating }).map((_, i) => (
                            <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                          ))}
                          <span className="text-sm ml-1">и выше</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Только проверенные</span>
                  </label>
                </div>

                <Button className="w-full" variant="outline">
                  Сбросить фильтры
                </Button>
              </div>
            </Card>
          </aside>

          <main className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <h1 className="text-3xl font-bold">Мастера рядом с вами</h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Users" size={18} />
                <span>Найдено: {mockMasters.length} специалистов</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {mockMasters.map((master) => (
                <Card key={master.id} className="hover:shadow-lg transition cursor-pointer">
                  <div className="p-6">
                    <div className="flex gap-4">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-4xl flex-shrink-0">
                        {master.avatar}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div>
                            <h3 className="font-bold text-lg flex items-center gap-2">
                              {master.name}
                              {master.verified && (
                                <Icon name="BadgeCheck" className="text-primary" size={18} />
                              )}
                            </h3>
                            <p className="text-sm text-muted-foreground">{master.profession}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 mb-3">
                          <div className="flex items-center gap-1">
                            <Icon name="Star" className="fill-yellow-400 text-yellow-400" size={16} />
                            <span className="font-semibold">{master.rating}</span>
                            <span className="text-sm text-muted-foreground">({master.reviews})</span>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Icon name="MapPin" size={16} />
                            <span className="text-sm">{master.distance}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">Цена</p>
                            <p className="font-bold text-lg text-primary">{master.price}</p>
                          </div>
                          <Button>
                            Связаться
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Button variant="outline" size="lg">
                Показать еще
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
