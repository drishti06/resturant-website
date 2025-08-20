'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Star, MapPin, Phone, Mail, Clock, ChefHat, Award, Users } from 'lucide-react'
import Image from 'next/image'

const dishes = [
  {
    name: "Truffle Risotto",
    description: "Creamy Arborio rice with black truffle, parmesan, and wild mushrooms",
    price: "$42",
    image: "truffle risotto.png",
    ratings: 3
  },
  {
    name: "Wagyu Beef Tenderloin",
    description: "Premium A5 Wagyu with roasted vegetables and red wine reduction",
    price: "$85",
    image: "Wagyu Beef Tenderloin.png",
    ratings: 3
  },
  {
    name: "Pan-Seared Halibut",
    description: "Fresh Atlantic halibut with lemon butter sauce and seasonal vegetables",
    price: "$38",
    image: "Pan-Seared Halibut.png",
    ratings: 3
  },
  {
    name: "Duck Confit",
    description: "Slow-cooked duck leg with cherry gastrique and potato gratin",
    price: "$45",
    image: "Duck Confit.png",
    ratings: 3
  },
  {
    name: "Lobster Thermidor",
    description: "Fresh Maine lobster with cognac cream sauce and gruyere cheese",
    price: "$65",
    image: "Lobster Thermidor.png",
    ratings: 3
  },
  {
    name: "Chocolate Soufflé",
    description: "Warm dark chocolate soufflé with vanilla bean ice cream",
    price: "$18",
    image: "Chocolate Soufflé.png",
    ratings: 3
  },
];

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Signature Dishes", id: "dishes" },
  { name: "Menu", id: "menu" },
  { name: "About Us", id: "about" },
  { name: "Contact", id: "contact" },
];
// Duplicate dishes for infinite looping
const items = [...dishes, ...dishes];

export default function RestaurantLandingPage() {
  // const shootingStars = Array.from({ length: 12 }).map((_, i) => ({
  //   id: i,
  //   top: `${Math.random() * 80}%`,
  //   left: `${Math.random() * 100}%`,
  //   delay: Math.random() * 5,
  // }));

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 w-full h-[10vh] bg-[#0d0d0d]/90 backdrop-blur-md z-50 shadow-md">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">
          {/* Logo */}
          {/* <motion.h1
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-white cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Bella Vista
          </motion.h1> */}
          <Image src="/logo.png" alt='logo' width={80} height={80} />

          {/* Navigation */}
          <nav>
            <ul className="flex space-x-8 text-white font-medium">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  className="cursor-pointer relative"
                  onClick={() => handleScroll(link.id)}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {link.name}
                  {/* Underline effect */}
                  <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-yellow-400 transition-all duration-300 hover:w-full" />
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/hero image.png"
          alt="hero image"
          fill
          className="absolute inset-0 object-cover"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]"
          >
            Bella Vista
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl mb-8 font-medium drop-shadow-[0_0_8px_rgba(0,0,0,0.7)]"
          >
            An Exquisite Dining Experience Awaits
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              Reserve Your Table
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                For over two decades, Bella Vista has been crafting unforgettable dining experiences.
                Our passion for culinary excellence and commitment to using the finest ingredients
                has made us a cornerstone of fine dining in the city.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every dish tells a story, every meal creates a memory. Join us for an extraordinary
                journey through flavors that celebrate both tradition and innovation.
              </p>

              <div className="flex gap-8 mt-8">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground">Michelin Star</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2">
                    <ChefHat className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground">Master Chef</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground">20+ Years</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="/chef preparing gourmet dish.png"
                alt="Chef preparing gourmet dish"
                width={600}
                height={600}
                className="rounded-lg shadow-2xl w-full h-[600px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="bg-[#000000] py-20">
        <div className='max-w-7xl mx-auto mb-4'>
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-15 text-center">
            Signature Dishes
          </h2>
        </div>
        <div className="relative mx-auto overflow-hidden">
          <motion.div
            className="flex gap-6"
            initial={{ x: 0 }}
            animate={{ x: `-${100 * dishes.length / 3}%` }}
            transition={{
              duration: dishes.length * 4,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {items.map((dish, index) => (
              <motion.div
                key={`${dish.name}-${index}`}
                style={{
                  minWidth: "calc(100% / 3 - 16px)", // ✅ Show 3 cards properly
                  transformOrigin: "center",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden
                 shadow-md hover:shadow-lg 
                 transition-all duration-300 bg-white rounded-xl
                 flex flex-row h-48 p-0">
                  {/* Left: Image (Full Height) */}
                  <div className="relative w-1/2 h-full ">
                    <Image
                      src={`/${dish.image}`}
                      alt={dish.name}
                      // height={48}
                      // width={48}
                      fill
                      className="object-cover rounded-l-xl h-full"
                    />
                  </div>

                  {/* Right: Content */}
                  <CardContent className="p-4 w-2/3 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {dish.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-snug mb-2 line-clamp-3">
                        {dish.description}
                      </p>

                      {/* Ratings */}
                      <div className="flex items-center mb-2">
                        {Array.from({ length: 5 }, (_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            fill={i < dish.ratings ? "gold" : "lightgray"}
                            viewBox="0 0 24 24"
                            stroke="none"
                            className="w-5 h-5"
                          >
                            <path d="M12 .587l3.668 7.425L24 9.75l-6 5.85L19.336 24 12 19.8 4.664 24 6 15.6 0 9.75l8.332-1.738z" />
                          </svg>
                        ))}
                        <span className="ml-2 text-sm text-muted-foreground">
                          {dish.ratings}/5
                        </span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="w-fit bg-primary text-primary-foreground px-3 py-1 text-sm rounded-full font-semibold shadow-md">
                      {dish.price}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="">
        <div className="mx-auto bg-gray-100 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Special Offers
            </h2>
            <p className="text-xl text-muted-foreground">
              Exclusive experiences crafted just for you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg shadow-xl w-full h-80"
            >
              <Image
                fill
                src="/romantic dinner.png"
                alt="Romantic dinner"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Romantic Evening</h3>
                <p className="text-lg mb-4">5-course tasting menu with wine pairing for two</p>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Book Now - $150
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg shadow-xl"
            >
              <Image
                fill
                src="/chef table experience.png"
                alt="Chef's table experience"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Chef&apos;s Table</h3>
                <p className="text-lg mb-4">Interactive dining experience with our head chef</p>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Reserve - $200
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Our Guests Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Experiences that speak for themselves
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                rating: 5,
                review: "Absolutely phenomenal! Every dish was a work of art. The service was impeccable and the atmosphere was perfect for our anniversary.",
                image: "placeholder.jpg"
              },
              {
                name: "Michael Chen",
                rating: 5,
                review: "The best dining experience I've had in years. The chef's attention to detail and the quality of ingredients is unmatched.",
                image: "placeholder.jpg"
              },
              {
                name: "Emily Rodriguez",
                rating: 5,
                review: "Bella Vista exceeded all expectations. The wine pairing was exceptional and the ambiance was simply magical.",
                image: "placeholder.jpg"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full shadow-lg">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <img
                        src={`/${testimonial.image}`}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic leading-relaxed">
                      &quot;{testimonial.review}&quot;
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Make a Reservation
            </h2>
            <p className="text-xl text-muted-foreground">
              Secure your table for an unforgettable dining experience
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 shadow-xl">
              <CardContent className="p-0">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <Input placeholder="Enter your full name" className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input type="email" placeholder="Enter your email" className="h-12" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Date
                      </label>
                      <Input type="date" className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Time
                      </label>
                      <Input type="time" className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Party Size
                      </label>
                      <Input type="number" placeholder="2" min="1" max="12" className="h-12" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Special Requests
                    </label>
                    <Textarea
                      placeholder="Any dietary restrictions or special occasions?"
                      className="min-h-[100px]"
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg font-semibold"
                    >
                      Confirm Reservation
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Bella Vista</h3>
              <p className="text-background/80 leading-relaxed">
                Experience culinary excellence in the heart of the city.
                Where every meal is a celebration.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-accent" />
                  <span className="text-background/80">123 Gourmet Street, City Center</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-accent" />
                  <span className="text-background/80">(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-accent" />
                  <span className="text-background/80">info@bellavista.com</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Hours</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-accent" />
                  <div>
                    <p className="text-background/80">Mon - Thu: 5:00 PM - 10:00 PM</p>
                    <p className="text-background/80">Fri - Sat: 5:00 PM - 11:00 PM</p>
                    <p className="text-background/80">Sun: 4:00 PM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center cursor-pointer hover:bg-accent/80 transition-colors">
                  <span className="text-accent-foreground font-semibold">f</span>
                </div>
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center cursor-pointer hover:bg-accent/80 transition-colors">
                  <span className="text-accent-foreground font-semibold">@</span>
                </div>
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center cursor-pointer hover:bg-accent/80 transition-colors">
                  <span className="text-accent-foreground font-semibold">in</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-background/20 mt-12 pt-8 text-center"
          >
            <p className="text-background/60">
              © 2024 Bella Vista Restaurant. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}