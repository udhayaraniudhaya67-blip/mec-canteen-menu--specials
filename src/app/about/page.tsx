import Image from "next/image"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Clock, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=1920&h=800&fit=crop"
            alt="About Us"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About MEC Canteen</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Serving authentic South Indian cuisine with passion since 1985
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                MEC Canteen has been the heart and soul of Model Engineering College for over three decades. 
                What started as a small food service in 1985 has grown into a beloved institution, serving 
                thousands of students, faculty, and visitors every day.
              </p>
              <p>
                Our journey began with a simple mission: to provide delicious, affordable, and authentic 
                South Indian food to the college community. Over the years, we've stayed true to our roots 
                while expanding our menu to include a diverse range of dishes that cater to every taste.
              </p>
              <p>
                Today, MEC Canteen is more than just a place to eat – it's where friendships are formed, 
                ideas are shared, and memories are made. We take pride in being an integral part of the 
                MEC experience.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=600&fit=crop"
              alt="Restaurant Interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">What makes us special</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-muted-foreground">
                  We never compromise on the quality of ingredients and preparation
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-muted-foreground">
                  We're proud to serve and be part of the MEC family
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Service</h3>
                <p className="text-muted-foreground">
                  Quick and efficient service without compromising quality
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Passion</h3>
                <p className="text-muted-foreground">
                  Every dish is prepared with love and dedication
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Specialties</h2>
          <p className="text-xl text-muted-foreground">What we're famous for</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="relative h-64 rounded-lg overflow-hidden mb-4 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&h=400&fit=crop"
                alt="Biryani"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Authentic Biryani</h3>
            <p className="text-muted-foreground">
              Our signature Hyderabadi biryani is prepared using traditional recipes 
              and the finest ingredients, making it a student favorite.
            </p>
          </div>
          <div className="text-center">
            <div className="relative h-64 rounded-lg overflow-hidden mb-4 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&h=400&fit=crop"
                alt="Dosa"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Crispy Dosas</h3>
            <p className="text-muted-foreground">
              From classic masala to innovative varieties, our dosas are known for 
              their perfect crisp texture and delicious fillings.
            </p>
          </div>
          <div className="text-center">
            <div className="relative h-64 rounded-lg overflow-hidden mb-4 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=500&h=400&fit=crop"
                alt="65 Items"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Spicy 65 Items</h3>
            <p className="text-muted-foreground">
              Our range of 65 items - from chicken to paneer - are perfectly spiced 
              and loved by everyone who craves bold flavors.
            </p>
          </div>
        </div>
      </section>

      {/* Facility Photos */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Facility</h2>
            <p className="text-xl text-muted-foreground">A glimpse of our canteen</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop"
                alt="Dining Area"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold text-lg">Spacious Dining Area</p>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=400&fit=crop"
                alt="Kitchen"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold text-lg">Modern Kitchen</p>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop"
                alt="Service Counter"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold text-lg">Quick Service Counter</p>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop"
                alt="Seating"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold text-lg">Comfortable Seating</p>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop"
                alt="Food Preparation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold text-lg">Hygienic Food Prep</p>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop"
                alt="Ambiance"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold text-lg">Welcoming Ambiance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
