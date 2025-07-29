import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState(0);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [bonusPoints, setBonusPoints] = useState(1250);

  const categories = [
    { id: 'all', name: 'Все товары', icon: 'Package' },
    { id: 'tools', name: 'Инструменты', icon: 'Hammer' },
    { id: 'materials', name: 'Материалы', icon: 'Brick' },
    { id: 'fasteners', name: 'Крепеж', icon: 'Wrench' },
    { id: 'paint', name: 'Краски', icon: 'Paintbrush' },
    { id: 'electrical', name: 'Электрика', icon: 'Zap' },
    { id: 'plumbing', name: 'Сантехника', icon: 'Droplets' }
  ];

  const products = [
    {
      id: 1,
      name: 'Дрель аккумуляторная Bosch GSR 18V',
      price: 8990,
      oldPrice: 10990,
      category: 'tools',
      rating: 4.8,
      reviews: 124,
      inStock: true,
      isHit: true,
      isNew: false,
      discount: 18,
      image: '/img/22009529-4552-45a7-b0d5-f678f37fa123.jpg'
    },
    {
      id: 2,
      name: 'Цемент Portland M400 50кг',
      price: 350,
      oldPrice: null,
      category: 'materials',
      rating: 4.5,
      reviews: 89,
      inStock: true,
      isHit: false,
      isNew: true,
      discount: 0,
      image: '/img/7c5e1b54-a940-4701-8abd-b7c39e3ea303.jpg'
    },
    {
      id: 3,
      name: 'Гвозди строительные 120мм (5кг)',
      price: 280,
      oldPrice: 320,
      category: 'fasteners',
      rating: 4.3,
      reviews: 56,
      inStock: true,
      isHit: true,
      isNew: false,
      discount: 12,
      image: '/img/22009529-4552-45a7-b0d5-f678f37fa123.jpg'
    },
    {
      id: 4,
      name: 'Краска водоэмульсионная белая 10л',
      price: 1250,
      oldPrice: 1490,
      category: 'paint',
      rating: 4.6,
      reviews: 78,
      inStock: false,
      isHit: false,
      isNew: true,
      discount: 16,
      image: '/img/7c5e1b54-a940-4701-8abd-b7c39e3ea303.jpg'
    }
  ];

  const addToCart = (productId: number) => {
    setCartItems(prev => prev + 1);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon name="Building2" className="h-8 w-8 text-primary" />
                <h1 className="text-2xl font-bold text-secondary">ГоризонтСтрой</h1>
              </div>
            </div>
            
            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Поиск товаров..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <Icon name="Star" className="h-4 w-4 text-yellow-500" />
                <span className="text-gray-600">Бонусы: {bonusPoints}</span>
              </div>
              
              <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Icon name="User" className="h-4 w-4 mr-2" />
                    Войти
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Вход в личный кабинет</DialogTitle>
                  </DialogHeader>
                  <Tabs defaultValue="individual" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="individual">Физ. лицо</TabsTrigger>
                      <TabsTrigger value="legal">Юр. лицо</TabsTrigger>
                    </TabsList>
                    <TabsContent value="individual" className="space-y-4">
                      <Input placeholder="Email или телефон" />
                      <Input type="password" placeholder="Пароль" />
                      <Button className="w-full">Войти</Button>
                    </TabsContent>
                    <TabsContent value="legal" className="space-y-4">
                      <Input placeholder="ИНН организации" />
                      <Input placeholder="Email" />
                      <Input type="password" placeholder="Пароль" />
                      <Button className="w-full">Войти как юр. лицо</Button>
                    </TabsContent>
                  </Tabs>
                </DialogContent>
              </Dialog>

              <Button className="relative">
                <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
                Корзина
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-primary text-white">
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-brand-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-4">
                Всё для строительства и ремонта
              </h2>
              <p className="text-xl mb-6 text-blue-100">
                Широкий ассортимент качественных материалов и инструментов по лучшим ценам
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Package" className="h-5 w-5 mr-2" />
                  Каталог товаров
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
                  <Icon name="Truck" className="h-5 w-5 mr-2" />
                  Доставка и оплата
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/7c5e1b54-a940-4701-8abd-b7c39e3ea303.jpg" 
                alt="Строительные материалы" 
                className="rounded-lg shadow-2xl animate-scale-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Promotions Banner */}
      <section className="bg-accent py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Icon name="Percent" className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Скидки до 30%</h3>
                <p className="text-gray-600">На инструменты и материалы</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Icon name="Gift" className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Программа лояльности</h3>
                <p className="text-gray-600">Копите бонусы за покупки</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Icon name="Truck" className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Быстрая доставка</h3>
                <p className="text-gray-600">По Москве и области</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Каталог товаров</h2>
            <div className="flex items-center space-x-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Выберите категорию" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      <div className="flex items-center space-x-2">
                        <Icon name={category.icon as any} className="h-4 w-4" />
                        <span>{category.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex flex-col items-center p-4 h-auto"
              >
                <Icon name={category.icon as any} className="h-6 w-6 mb-2" />
                <span className="text-xs">{category.name}</span>
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow animate-fade-in">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-2 left-2 flex flex-col space-y-1">
                      {product.isHit && (
                        <Badge className="bg-red-500 text-white">ХИТ</Badge>
                      )}
                      {product.isNew && (
                        <Badge className="bg-green-500 text-white">НОВИНКА</Badge>
                      )}
                      {product.discount > 0 && (
                        <Badge className="bg-primary text-white">-{product.discount}%</Badge>
                      )}
                    </div>
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-t-lg">
                        <span className="text-white font-semibold">Нет в наличии</span>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </CardTitle>
                  
                  <div className="flex items-center space-x-1 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Icon 
                          key={i}
                          name="Star" 
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-primary">
                        {product.price.toLocaleString()} ₽
                      </span>
                      {product.oldPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {product.oldPrice.toLocaleString()} ₽
                        </span>
                      )}
                    </div>
                  </div>

                  <Button 
                    className="w-full" 
                    onClick={() => addToCart(product.id)}
                    disabled={!product.inStock}
                  >
                    <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
                    {product.inStock ? 'В корзину' : 'Нет в наличии'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Building2" className="h-6 w-6" />
                <h3 className="text-xl font-bold">ГоризонтСтрой</h3>
              </div>
              <p className="text-blue-200 mb-4">
                Ваш надежный партнер в строительстве и ремонте
              </p>
              <div className="flex space-x-4">
                <Icon name="Phone" className="h-5 w-5" />
                <span>+7 (495) 123-45-67</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-blue-200">
                <li>Инструменты</li>
                <li>Строительные материалы</li>
                <li>Крепеж</li>
                <li>Краски и лаки</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-blue-200">
                <li>О компании</li>
                <li>Доставка и оплата</li>
                <li>Гарантия и возврат</li>
                <li>Контакты</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-blue-200">
                <li>Резка материалов</li>
                <li>Подбор товаров</li>
                <li>Консультации</li>
                <li>Оптовые продажи</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-blue-800" />
          
          <div className="flex justify-between items-center">
            <p className="text-blue-200">
              © 2024 ГоризонтСтрой. Все права защищены.
            </p>
            <div className="flex space-x-4">
              <Icon name="CreditCard" className="h-5 w-5" />
              <Icon name="Smartphone" className="h-5 w-5" />
              <Icon name="ShieldCheck" className="h-5 w-5" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;