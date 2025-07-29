import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState(0);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [bonusPoints, setBonusPoints] = useState(1250);
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [showOnlyInStock, setShowOnlyInStock] = useState(false);

  const mainCategories = [
    { id: 'tools', name: 'Инструменты', icon: 'Hammer', subcategories: ['Электроинструмент', 'Ручной инструмент', 'Измерительный инструмент', 'Пневмоинструмент'] },
    { id: 'materials', name: 'Строительные материалы', icon: 'Brick', subcategories: ['Цемент', 'Кирпич', 'Блоки', 'Утеплители'] },
    { id: 'fasteners', name: 'Крепеж', icon: 'Wrench', subcategories: ['Болты', 'Гайки', 'Шурупы', 'Дюбели'] },
    { id: 'paint', name: 'Краски и лаки', icon: 'Paintbrush', subcategories: ['Водоэмульсионные', 'Масляные', 'Эмали', 'Грунтовки'] },
    { id: 'electrical', name: 'Электрика', icon: 'Zap', subcategories: ['Кабели', 'Розетки', 'Выключатели', 'Светильники'] },
    { id: 'plumbing', name: 'Сантехника', icon: 'Droplets', subcategories: ['Трубы', 'Фитинги', 'Смесители', 'Унитазы'] },
    { id: 'garden', name: 'Садовая техника', icon: 'TreePine', subcategories: ['Газонокосилки', 'Триммеры', 'Культиваторы', 'Поливочное оборудование'] },
    { id: 'safety', name: 'Спецодежда', icon: 'ShieldCheck', subcategories: ['Каски', 'Перчатки', 'Очки', 'Респираторы'] }
  ];

  const brands = ['Bosch', 'Makita', 'DeWalt', 'Metabo', 'Hitachi', 'Black+Decker', 'Ryobi', 'Festool'];

  const products = [
    {
      id: 1,
      name: 'Дрель аккумуляторная Bosch GSR 18V-21',
      price: 8990,
      oldPrice: 10990,
      category: 'tools',
      brand: 'Bosch',
      rating: 4.8,
      reviews: 124,
      inStock: true,
      isHit: true,
      isNew: false,
      discount: 18,
      specs: ['18V', '2.0 Ah', '50 Nm', '1300 об/мин'],
      image: '/img/5d8735b0-ea14-43cc-adde-dc9af4ea64dd.jpg'
    },
    {
      id: 2,
      name: 'Цемент Portland CEM I 42.5 R 50кг',
      price: 350,
      oldPrice: null,
      category: 'materials',
      brand: 'Portland',
      rating: 4.5,
      reviews: 89,
      inStock: true,
      isHit: false,
      isNew: true,
      discount: 0,
      specs: ['M500', '50кг', 'Быстротвердеющий'],
      image: '/img/ecd62885-e550-4e09-84a3-df3845a0e359.jpg'
    },
    {
      id: 3,
      name: 'Перфоратор Makita HR2470',
      price: 12500,
      oldPrice: 14900,
      category: 'tools',
      brand: 'Makita',
      rating: 4.7,
      reviews: 256,
      inStock: true,
      isHit: true,
      isNew: false,
      discount: 16,
      specs: ['780W', 'SDS-Plus', '2.4 Дж', '1100 об/мин'],
      image: '/img/5d8735b0-ea14-43cc-adde-dc9af4ea64dd.jpg'
    },
    {
      id: 4,
      name: 'Краска водоэмульсионная "Супербелая" 10л',
      price: 1250,
      oldPrice: 1490,
      category: 'paint',
      brand: 'Tikkurila',
      rating: 4.6,
      reviews: 78,
      inStock: false,
      isHit: false,
      isNew: true,
      discount: 16,
      specs: ['10л', 'Матовая', 'Для внутренних работ'],
      image: '/img/ecd62885-e550-4e09-84a3-df3845a0e359.jpg'
    },
    {
      id: 5,
      name: 'Шуруповерт DeWalt DCD771C2',
      price: 6750,
      oldPrice: null,
      category: 'tools',
      brand: 'DeWalt',
      rating: 4.9,
      reviews: 189,
      inStock: true,
      isHit: false,
      isNew: false,
      discount: 0,
      specs: ['18V', '1.3 Ah', '42 Nm', '1450 об/мин'],
      image: '/img/5d8735b0-ea14-43cc-adde-dc9af4ea64dd.jpg'
    },
    {
      id: 6,
      name: 'Болгарка Bosch GWS 750-125',
      price: 3200,
      oldPrice: 3800,
      category: 'tools',
      brand: 'Bosch',
      rating: 4.4,
      reviews: 145,
      inStock: true,
      isHit: true,
      isNew: false,
      discount: 15,
      specs: ['750W', '125мм', '11000 об/мин'],
      image: '/img/5d8735b0-ea14-43cc-adde-dc9af4ea64dd.jpg'
    }
  ];

  const addToCart = (productId: number) => {
    setCartItems(prev => prev + 1);
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesStock = !showOnlyInStock || product.inStock;
    
    return matchesSearch && matchesCategory && matchesPrice && matchesBrand && matchesStock;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-secondary text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span>📍 Москва</span>
            <span>📞 +7 (495) 123-45-67</span>
            <span>🕒 Пн-Пт: 8:00-20:00, Сб-Вс: 9:00-18:00</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Доставка и самовывоз</span>
            <span>•</span>
            <span>О компании</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <Icon name="Building2" className="h-10 w-10 text-primary" />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">ГоризонтСтрой</h1>
                  <p className="text-xs text-gray-500">Строительный гипермаркет</p>
                </div>
              </div>
              
              <Dialog open={isCatalogOpen} onOpenChange={setIsCatalogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    <Icon name="Menu" className="h-5 w-5 mr-2" />
                    Каталог товаров
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>Каталог товаров</DialogTitle>
                  </DialogHeader>
                  <div className="grid md:grid-cols-2 gap-6 max-h-96 overflow-y-auto">
                    {mainCategories.map((category) => (
                      <div key={category.id} className="space-y-2">
                        <div className="flex items-center space-x-2 font-semibold text-primary">
                          <Icon name={category.icon as any} className="h-5 w-5" />
                          <span>{category.name}</span>
                        </div>
                        <ul className="ml-7 space-y-1">
                          {category.subcategories.map((sub, idx) => (
                            <li key={idx} className="text-sm text-gray-600 hover:text-primary cursor-pointer">
                              {sub}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Icon name="Search" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Поиск среди 50 000+ товаров..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 text-base"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8">
                  Найти
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm">
                <Icon name="Star" className="h-4 w-4 text-yellow-500" />
                <div>
                  <div className="font-semibold">{bonusPoints}</div>
                  <div className="text-xs text-gray-500">бонусов</div>
                </div>
              </div>
              
              <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="h-12">
                    <Icon name="User" className="h-5 w-5 mr-2" />
                    <div className="text-left">
                      <div className="text-sm font-semibold">Войти</div>
                      <div className="text-xs text-gray-500">в личный кабинет</div>
                    </div>
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
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
                      <Button variant="outline" className="w-full">Регистрация</Button>
                    </TabsContent>
                    <TabsContent value="legal" className="space-y-4">
                      <Input placeholder="ИНН организации" />
                      <Input placeholder="Email" />
                      <Input type="password" placeholder="Пароль" />
                      <Button className="w-full">Войти как юр. лицо</Button>
                      <p className="text-xs text-gray-500">Специальные цены и отсрочка платежа</p>
                    </TabsContent>
                  </Tabs>
                </DialogContent>
              </Dialog>

              <Button className="relative h-12 bg-primary hover:bg-primary/90">
                <Icon name="ShoppingCart" className="h-5 w-5 mr-2" />
                <div className="text-left">
                  <div className="text-sm font-semibold">Корзина</div>
                  <div className="text-xs">пуста</div>
                </div>
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white">
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Category Navigation */}
        <div className="border-t bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-8 py-3 overflow-x-auto">
              {mainCategories.slice(0, 6).map((category) => (
                <Button
                  key={category.id}
                  variant="ghost"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 whitespace-nowrap ${
                    selectedCategory === category.id ? 'text-primary bg-primary/10' : 'text-gray-600'
                  }`}
                >
                  <Icon name={category.icon as any} className="h-4 w-4" />
                  <span className="text-sm">{category.name}</span>
                </Button>
              ))}
              <Button variant="ghost" className="text-gray-600 text-sm whitespace-nowrap">
                Еще категории
                <Icon name="ChevronDown" className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary via-brand-orange-600 to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-5xl font-bold leading-tight">
                  Профессиональные<br />
                  инструменты и материалы
                </h2>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Более 50 000 товаров от ведущих производителей.<br />
                  Гарантия качества и лучшие цены в городе.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Icon name="Package" className="h-5 w-5 mr-2" />
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Icon name="Truck" className="h-5 w-5 mr-2" />
                  Доставка сегодня
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-sm text-blue-200">товаров</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm text-blue-200">лет на рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-blue-200">поддержка</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/img/7c5e1b54-a940-4701-8abd-b7c39e3ea303.jpg" 
                alt="Строительные материалы" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-xl">
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" className="h-6 w-6 text-green-500" />
                  <div>
                    <div className="font-semibold text-gray-900">Гарантия качества</div>
                    <div className="text-sm text-gray-500">На все товары</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow border-primary/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Percent" className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Скидки до 50%</h3>
                <p className="text-gray-600 text-sm">На инструменты и материалы каждую неделю</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow border-primary/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Gift" className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Бонусная программа</h3>
                <p className="text-gray-600 text-sm">До 10% кэшбэка с каждой покупки</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow border-primary/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Быстрая доставка</h3>
                <p className="text-gray-600 text-sm">В день заказа по Москве и области</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow border-primary/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Для юр. лиц</h3>
                <p className="text-gray-600 text-sm">Отсрочка платежа и спецпредложения</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Каталог товаров</h2>
            <div className="flex items-center space-x-4">
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Сортировать по" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">По популярности</SelectItem>
                  <SelectItem value="price-asc">По цене ↑</SelectItem>
                  <SelectItem value="price-desc">По цене ↓</SelectItem>
                  <SelectItem value="rating">По рейтингу</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Фильтры</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Price Range */}
                  <div>
                    <h4 className="font-semibold mb-3">Цена, ₽</h4>
                    <div className="space-y-3">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={50000}
                        step={100}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{priceRange[0].toLocaleString()} ₽</span>
                        <span>{priceRange[1].toLocaleString()} ₽</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Brands */}
                  <div>
                    <h4 className="font-semibold mb-3">Бренды</h4>
                    <div className="space-y-2 max-h-40 overflow-y-auto">
                      {brands.map((brand) => (
                        <div key={brand} className="flex items-center space-x-2">
                          <Checkbox
                            id={brand}
                            checked={selectedBrands.includes(brand)}
                            onCheckedChange={() => toggleBrand(brand)}
                          />
                          <label htmlFor={brand} className="text-sm cursor-pointer">
                            {brand}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* In Stock */}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="instock"
                      checked={showOnlyInStock}
                      onCheckedChange={setShowOnlyInStock}
                    />
                    <label htmlFor="instock" className="text-sm cursor-pointer">
                      Только в наличии
                    </label>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3 flex flex-col space-y-1">
                          {product.isHit && (
                            <Badge className="bg-red-500 text-white text-xs">ХИТ</Badge>
                          )}
                          {product.isNew && (
                            <Badge className="bg-green-500 text-white text-xs">НОВИНКА</Badge>
                          )}
                          {product.discount > 0 && (
                            <Badge className="bg-primary text-white text-xs">-{product.discount}%</Badge>
                          )}
                        </div>
                        {!product.inStock && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-t-lg">
                            <span className="text-white font-semibold">Нет в наличии</span>
                          </div>
                        )}
                        <Button 
                          size="sm" 
                          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                          variant="secondary"
                        >
                          <Icon name="Heart" className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 space-y-3">
                      <div className="text-xs text-gray-500 font-medium">{product.brand}</div>
                      
                      <CardTitle className="text-base leading-tight group-hover:text-primary transition-colors line-clamp-2">
                        {product.name}
                      </CardTitle>
                      
                      <div className="flex items-center space-x-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Icon 
                              key={i}
                              name="Star" 
                              className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">({product.reviews})</span>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {product.specs.slice(0, 2).map((spec, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-xl font-bold text-primary">
                            {product.price.toLocaleString()} ₽
                          </span>
                          {product.oldPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              {product.oldPrice.toLocaleString()} ₽
                            </span>
                          )}
                        </div>
                        
                        <div className="text-xs text-green-600 font-medium">
                          + {Math.floor(product.price * 0.05)} бонусов
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
              
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <Icon name="Package" className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">Товары не найдены</h3>
                  <p className="text-gray-500">Попробуйте изменить параметры поиска</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Icon name="Building2" className="h-8 w-8" />
                <div>
                  <h3 className="text-xl font-bold">ГоризонтСтрой</h3>
                  <p className="text-blue-200 text-sm">Строительный гипермаркет</p>
                </div>
              </div>
              <p className="text-blue-200 mb-6 leading-relaxed">
                Более 15 лет мы поставляем качественные строительные материалы и инструменты 
                для профессионалов и любителей. Надежность, качество, лучшие цены.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="h-4 w-4" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="h-4 w-4" />
                  <span>info@gorizontstroy.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="h-4 w-4" />
                  <span>г. Москва, ул. Строительная, 15</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-blue-200">
                <li className="hover:text-white cursor-pointer">Инструменты</li>
                <li className="hover:text-white cursor-pointer">Строительные материалы</li>
                <li className="hover:text-white cursor-pointer">Крепеж</li>
                <li className="hover:text-white cursor-pointer">Краски и лаки</li>
                <li className="hover:text-white cursor-pointer">Электрика</li>
                <li className="hover:text-white cursor-pointer">Сантехника</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Покупателям</h4>
              <ul className="space-y-2 text-blue-200">
                <li className="hover:text-white cursor-pointer">Доставка и оплата</li>
                <li className="hover:text-white cursor-pointer">Гарантия и возврат</li>
                <li className="hover:text-white cursor-pointer">Программа лояльности</li>
                <li className="hover:text-white cursor-pointer">Для юридических лиц</li>
                <li className="hover:text-white cursor-pointer">Отзывы</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-blue-200">
                <li className="hover:text-white cursor-pointer">О нас</li>
                <li className="hover:text-white cursor-pointer">Новости</li>
                <li className="hover:text-white cursor-pointer">Вакансии</li>
                <li className="hover:text-white cursor-pointer">Контакты</li>
                <li className="hover:text-white cursor-pointer">Партнерам</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-blue-800" />
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-200 text-sm">
              © 2024 ГоризонтСтрой. Все права защищены.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-sm text-blue-200">Принимаем к оплате:</span>
              <div className="flex space-x-2">
                <div className="w-8 h-5 bg-white rounded flex items-center justify-center">
                  <Icon name="CreditCard" className="h-3 w-3 text-gray-700" />
                </div>
                <div className="w-8 h-5 bg-white rounded flex items-center justify-center">
                  <Icon name="Smartphone" className="h-3 w-3 text-gray-700" />
                </div>
                <div className="w-8 h-5 bg-white rounded flex items-center justify-center">
                  <Icon name="Wallet" className="h-3 w-3 text-gray-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;