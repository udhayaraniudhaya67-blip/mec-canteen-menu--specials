"use client"

import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, MapPin, Phone, Flame } from "lucide-react"

export default function Home() {
  const featuredDishes = [
    {
      id: 1,
      name: "Hyderabadi Biryani",
      description: "Fragrant basmati rice with tender chicken, aromatic spices",
      price: "₹180",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&h=400&fit=crop",
      tag: "Popular",
      rating: 4.8
    },
    {
      id: 2,
      name: "Masala Dosa",
      description: "Crispy rice crepe filled with spiced potato masala",
      price: "₹80",
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&h=400&fit=crop",
      tag: "Best Seller",
      rating: 4.9
    },
    {
      id: 3,
      name: "Chicken 65",
      description: "Deep-fried chicken with South Indian spices",
      price: "₹150",
      image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=500&h=400&fit=crop",
      tag: "Spicy",
      rating: 4.7
    },
    {
      id: 4,
      name: "Idli Sambar",
      description: "Steamed rice cakes with flavorful lentil soup",
      price: "₹60",
      image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=500&h=400&fit=crop",
      tag: "Healthy",
      rating: 4.6
    },
    {
      id: 5,
      name: "Paneer 65",
      description: "Crispy fried paneer with tangy spices",
      price: "₹140",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&h=400&fit=crop",
      tag: "Vegetarian",
      rating: 4.5
    },
    {
      id: 6,
      name: "Filter Coffee",
      description: "Traditional South Indian filter coffee",
      price: "₹30",
      image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=500&h=400&fit=crop",
      tag: "Classic",
      rating: 4.9
    }
  ]

  const offers = [
    {
      title: "Lunch Combo Special",
      description: "Get any main course + drink + dessert at just ₹199",
      discount: "20% OFF",
      color: "bg-orange-500"
    },
    {
      title: "Weekend Biryani Fest",
      description: "All varieties of Biryani at special prices this weekend",
      discount: "15% OFF",
      color: "bg-green-500"
    },
    {
      title: "Student Discount",
      description: "Show your student ID and get flat 10% off on all orders",
      discount: "10% OFF",
      color: "bg-blue-500"
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=1920&h=1080&fit=crop"
            alt="South Indian Food"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <Badge className="mb-4 bg-accent text-accent-foreground text-lg px-4 py-2">
            <Flame className="w-4 h-4 mr-2 inline" />
            Authentic South Indian Cuisine
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Welcome to MEC Canteen
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Experience the rich flavors of South India - From traditional Dosas to aromatic Biryanis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
              <Link href="/menu">View Full Menu</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20 text-lg px-8">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="bg-primary text-primary-foreground py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Clock className="w-6 h-6" />
              <div className="text-left">
                <p className="font-semibold">Open Daily</p>
                <p className="text-sm opacity-90">7:00 AM - 8:00 PM</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-6 h-6" />
              <div className="text-left">
                <p className="font-semibold">MEC Campus</p>
                <p className="text-sm opacity-90">Kochi, Kerala</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-6 h-6" />
              <div className="text-left">
                <p className="font-semibold">Call Us</p>
                <p className="text-sm opacity-90">+91 9876543210</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Dishes</h2>
            <p className="text-muted-foreground text-lg">
              Discover our most loved South Indian delicacies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish) => (
              <Card key={dish.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    {dish.tag}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{dish.name}</span>
                    <span className="text-accent">{dish.price}</span>
                  </CardTitle>
                  <CardDescription>{dish.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{dish.rating}</span>
                  </div>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Order Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="text-lg">
              <Link href="/menu">Explore Complete Menu →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Special Offers</h2>
            <p className="text-muted-foreground text-lg">
              Don't miss out on our amazing deals!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map((offer, index) => (
              <Card key={index} className="relative overflow-hidden">
                <div className={`absolute top-0 right-0 ${offer.color} text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-8 -translate-y-2`}>
                  {offer.discount}
                </div>
                <CardHeader>
                  <CardTitle>{offer.title}</CardTitle>
                  <CardDescription className="text-base">
                    {offer.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full">Claim Offer</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose MEC Canteen?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🍽️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Authentic Recipes</h3>
              <p className="text-muted-foreground">Traditional South Indian recipes passed through generations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fresh Ingredients</h3>
              <p className="text-muted-foreground">We use only the freshest, locally-sourced ingredients</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Service</h3>
              <p className="text-muted-foreground">Quick preparation without compromising on quality</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Affordable Prices</h3>
              <p className="text-muted-foreground">Delicious food that won't break your budget</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}