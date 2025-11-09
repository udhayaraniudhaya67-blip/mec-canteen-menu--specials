export interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  category: string
  image: string
  isVeg: boolean
  isSpicy: boolean
  rating: number
}

export const menuItems: MenuItem[] = [
  // STARTERS (15 items)
  {
    id: 1,
    name: "Chicken 65",
    description: "Deep-fried chicken marinated with South Indian spices",
    price: "₹150",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=400&h=300&fit=crop",
    isVeg: false,
    isSpicy: true,
    rating: 4.7
  },
  {
    id: 2,
    name: "Paneer 65",
    description: "Crispy fried paneer cubes with tangy spices",
    price: "₹140",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: true,
    rating: 4.5
  },
  {
    id: 3,
    name: "Gobi 65",
    description: "Crispy cauliflower florets with spicy coating",
    price: "₹120",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: true,
    rating: 4.4
  },
  {
    id: 4,
    name: "Mutton 65",
    description: "Tender mutton pieces with aromatic spices",
    price: "₹200",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop",
    isVeg: false,
    isSpicy: true,
    rating: 4.8
  },
  {
    id: 5,
    name: "Fish 65",
    description: "Crispy fried fish with coastal spices",
    price: "₹180",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=400&h=300&fit=crop",
    isVeg: false,
    isSpicy: true,
    rating: 4.6
  },
  {
    id: 6,
    name: "Mushroom 65",
    description: "Spicy mushroom starter with herbs",
    price: "₹130",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1621510456681-2330135e5871?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: true,
    rating: 4.3
  },
  {
    id: 7,
    name: "Prawn 65",
    description: "Succulent prawns with spicy marinade",
    price: "₹220",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&h=300&fit=crop",
    isVeg: false,
    isSpicy: true,
    rating: 4.7
  },
  {
    id: 8,
    name: "Baby Corn 65",
    description: "Crispy baby corn with tangy masala",
    price: "₹110",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1612438231326-e4fe0fe3640c?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.2
  },
  {
    id: 9,
    name: "Chicken Lollipop",
    description: "Tender chicken drumettes with spicy glaze",
    price: "₹160",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop",
    isVeg: false,
    isSpicy: true,
    rating: 4.6
  },
  {
    id: 10,
    name: "Medu Vada",
    description: "Crispy lentil doughnuts served with chutney",
    price: "₹50",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1589301760014-def9ff0e6086?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.5
  },
  {
    id: 11,
    name: "Samosa",
    description: "Crispy pastry filled with spiced potatoes",
    price: "₹40",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.4
  },
  {
    id: 12,
    name: "Gobi Manchurian",
    description: "Indo-Chinese cauliflower in spicy sauce",
    price: "₹130",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: true,
    rating: 4.6
  },
  {
    id: 13,
    name: "Chilli Chicken",
    description: "Spicy chicken chunks in Indo-Chinese style",
    price: "₹160",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop",
    isVeg: false,
    isSpicy: true,
    rating: 4.7
  },
  {
    id: 14,
    name: "Onion Pakoda",
    description: "Crispy onion fritters with gram flour",
    price: "₹60",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1589301773859-7d677d52d9cf?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.3
  },
  {
    id: 15,
    name: "Apollo Fish",
    description: "Spicy fried fish Hyderabadi style",
    price: "₹190",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop",
    isVeg: false,
    isSpicy: true,
    rating: 4.8
  },

  // MAIN COURSE (20 items)
  {
    id: 16,
    name: "Masala Dosa",
    description: "Crispy rice crepe with spiced potato filling",
    price: "₹80",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.9
  },
  {
    id: 17,
    name: "Plain Dosa",
    description: "Thin crispy rice and lentil crepe",
    price: "₹60",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.7
  },
  {
    id: 18,
    name: "Rava Dosa",
    description: "Crispy semolina crepe with herbs",
    price: "₹90",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1589301760014-def9ff0e6086?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.6
  },
  {
    id: 19,
    name: "Onion Dosa",
    description: "Dosa topped with caramelized onions",
    price: "₹70",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.5
  },
  {
    id: 20,
    name: "Mysore Masala Dosa",
    description: "Spicy red chutney dosa with potato masala",
    price: "₹95",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: true,
    rating: 4.8
  },
  {
    id: 21,
    name: "Idli Sambar",
    description: "Steamed rice cakes with lentil soup",
    price: "₹60",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1589301760014-def9ff0e6086?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.8
  },
  {
    id: 22,
    name: "Ghee Podi Idli",
    description: "Idli tossed with ghee and spice powder",
    price: "₹80",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: true,
    rating: 4.7
  },
  {
    id: 23,
    name: "Poori Bhaji",
    description: "Puffed bread with potato curry",
    price: "₹70",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.6
  },
  {
    id: 24,
    name: "Upma",
    description: "Savory semolina porridge with vegetables",
    price: "₹50",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1589301760014-def9ff0e6086?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.4
  },
  {
    id: 25,
    name: "Pongal",
    description: "Savory rice and lentil dish with pepper",
    price: "₹65",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.5
  },
  {
    id: 26,
    name: "Uttapam",
    description: "Thick pancake with vegetable toppings",
    price: "₹85",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.6
  },
  {
    id: 27,
    name: "Paneer Butter Masala",
    description: "Cottage cheese in rich tomato gravy",
    price: "₹180",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.8
  },
  {
    id: 28,
    name: "Chicken Curry",
    description: "Traditional South Indian chicken curry",
    price: "₹190",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=400&h=300&fit=crop",
    isVeg: false,
    isSpicy: true,
    rating: 4.7
  },
  {
    id: 29,
    name: "Mutton Curry",
    description: "Slow-cooked mutton in aromatic spices",
    price: "₹250",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop",
    isVeg: false,
    isSpicy: true,
    rating: 4.9
  },
  {
    id: 30,
    name: "Fish Curry",
    description: "Kerala style fish curry with coconut",
    price: "₹200",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=400&h=300&fit=crop",
    isVeg: false,
    isSpicy: true,
    rating: 4.8
  },
  {
    id: 31,
    name: "Dal Tadka",
    description: "Yellow lentils tempered with spices",
    price: "₹120",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.5
  },
  {
    id: 32,
    name: "Curd Rice",
    description: "Cooling rice mixed with yogurt and tempering",
    price: "₹70",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.6
  },
  {
    id: 33,
    name: "Lemon Rice",
    description: "Tangy rice with lemon and peanuts",
    price: "₹80",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.5
  },
  {
    id: 34,
    name: "Tomato Rice",
    description: "Flavorful rice with tomatoes and spices",
    price: "₹85",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.4
  },
  {
    id: 35,
    name: "Sambar Rice",
    description: "Rice mixed with lentil and vegetable stew",
    price: "₹90",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.6
  },

  // BIRYANI (15 items)
  {
    id: 36,
    name: "Hyderabadi Chicken Biryani",
    description: "Fragrant basmati rice with tender chicken and aromatic spices",
    price: "₹180",
    category: "Biryani",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
    isVeg: false,
    isSpicy: true,
    rating: 4.9
  },
  {
    id: 37,
    name: "Mutton Biryani",
    description: "Slow-cooked mutton with fragrant basmati rice",
    price: "₹250",
    category: "Biryani",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
    isVeg: false,
    isSpicy: true,
    rating: 4.8
  },
  {
    id: 38,
    name: "Vegetable Biryani",
    description: "Mixed vegetables with aromatic basmati rice",
    price: "₹140",
    category: "Biryani",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.6
  },
  {
    id: 39,
    name: "Egg Biryani",
    description: "Boiled eggs layered with spiced rice",
    price: "₹130",
    category: "Biryani",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
    isVeg: false,
    isSpicy: false,
    rating: 4.5
  },
  {
    id: 40,
    name: "Prawn Biryani",
    description: "Succulent prawns with fragrant rice",
    price: "₹280",
    category: "Biryani",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
    isVeg: false,
    isSpicy: true,
    rating: 4.7
  },
  {
    id: 41,
    name: "Fish Biryani",
    description: "Coastal style biryani with fresh fish",
    price: "₹220",
    category: "Biryani",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
    isVeg: false,
    isSpicy: true,
    rating: 4.6
  },
  {
    id: 42,
    name: "Paneer Biryani",
    description: "Cottage cheese with spiced basmati rice",
    price: "₹160",
    category: "Biryani",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.5
  },
  {
    id: 43,
    name: "Chicken Dum Biryani",
    description: "Slow-cooked chicken biryani in sealed pot",
    price: "₹200",
    category: "Biryani",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
    isVeg: false,
    isSpicy: true,
    rating: 4.9
  },
  {
    id: 44,
    name: "Boneless Chicken Biryani",
    description: "Tender boneless chicken with aromatic rice",
    price: "₹210",
    category: "Biryani",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
    isVeg: false,
    isSpicy: true,
    rating: 4.8
  },
  {
    id: 45,
    name: "Chicken Fry Piece Biryani",
    description: "Biryani topped with crispy fried chicken",
    price: "₹220",
    category: "Biryani",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
    isVeg: false,
    isSpicy: true,
    rating: 4.7
  },
  {
    id: 46,
    name: "Gongura Chicken Biryani",
    description: "Tangy gongura leaves with chicken biryani",
    price: "₹210",
    category: "Biryani",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
    isVeg: false,
    isSpicy: true,
    rating: 4.6
  },
  {
    id: 47,
    name: "Gongura Mutton Biryani",
    description: "Mutton biryani with tangy gongura flavor",
    price: "₹270",
    category: "Biryani",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
    isVeg: false,
    isSpicy: true,
    rating: 4.8
  },
  {
    id: 48,
    name: "Ulavacharu Chicken Biryani",
    description: "Horse gram broth flavored chicken biryani",
    price: "₹200",
    category: "Biryani",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
    isVeg: false,
    isSpicy: true,
    rating: 4.7
  },
  {
    id: 49,
    name: "Kheema Biryani",
    description: "Minced meat with fragrant basmati rice",
    price: "₹190",
    category: "Biryani",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
    isVeg: false,
    isSpicy: true,
    rating: 4.6
  },
  {
    id: 50,
    name: "Ambur Biryani",
    description: "Tamil Nadu style biryani with unique spices",
    price: "₹195",
    category: "Biryani",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
    isVeg: false,
    isSpicy: true,
    rating: 4.7
  },

  // SNACKS (20 items)
  {
    id: 51,
    name: "Banana Bajji",
    description: "Batter-fried banana fritters",
    price: "₹40",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.4
  },
  {
    id: 52,
    name: "Bread Bajji",
    description: "Spiced bread slices dipped in gram flour batter",
    price: "₹50",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.3
  },
  {
    id: 53,
    name: "Mirchi Bajji",
    description: "Stuffed chili peppers in crispy batter",
    price: "₹45",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: true,
    rating: 4.5
  },
  {
    id: 54,
    name: "Bonda",
    description: "Deep-fried potato dumplings",
    price: "₹35",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.4
  },
  {
    id: 55,
    name: "Masala Vadai",
    description: "Spiced chana dal fritters",
    price: "₹40",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1589301760014-def9ff0e6086?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.5
  },
  {
    id: 56,
    name: "Cutlet",
    description: "Spiced potato patties with breadcrumb coating",
    price: "₹50",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.3
  },
  {
    id: 57,
    name: "Egg Puff",
    description: "Flaky pastry filled with spiced egg",
    price: "₹45",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
    isVeg: false,
    isSpicy: false,
    rating: 4.6
  },
  {
    id: 58,
    name: "Chicken Puff",
    description: "Puff pastry with spiced chicken filling",
    price: "₹55",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
    isVeg: false,
    isSpicy: false,
    rating: 4.7
  },
  {
    id: 59,
    name: "Veg Puff",
    description: "Flaky pastry with mixed vegetable filling",
    price: "₹40",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.5
  },
  {
    id: 60,
    name: "Paneer Roll",
    description: "Paratha wrap with spiced paneer",
    price: "₹80",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.6
  },
  {
    id: 61,
    name: "Chicken Roll",
    description: "Paratha wrap with spiced chicken",
    price: "₹100",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop",
    isVeg: false,
    isSpicy: false,
    rating: 4.7
  },
  {
    id: 62,
    name: "Cheese Corn Roll",
    description: "Wrap filled with cheese and sweet corn",
    price: "₹90",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.5
  },
  {
    id: 63,
    name: "Mysore Bonda",
    description: "Sweet and savory deep-fried dumplings",
    price: "₹35",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.4
  },
  {
    id: 64,
    name: "Corn Bhel",
    description: "Tangy corn snack with spices",
    price: "₹60",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.3
  },
  {
    id: 65,
    name: "Bhel Puri",
    description: "Puffed rice with tangy tamarind chutney",
    price: "₹50",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.5
  },
  {
    id: 66,
    name: "Pani Puri",
    description: "Crispy shells with spicy tangy water",
    price: "₹40",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: true,
    rating: 4.6
  },
  {
    id: 67,
    name: "Dahi Puri",
    description: "Puri filled with yogurt and chutneys",
    price: "₹55",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.5
  },
  {
    id: 68,
    name: "Sev Puri",
    description: "Crispy puris topped with sev and chutney",
    price: "₹50",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.4
  },
  {
    id: 69,
    name: "Masala Papad",
    description: "Crispy papad with onion tomato topping",
    price: "₹30",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.3
  },
  {
    id: 70,
    name: "French Fries",
    description: "Crispy golden potato fries",
    price: "₹70",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.5
  },

  // DRINKS (15 items)
  {
    id: 71,
    name: "Filter Coffee",
    description: "Traditional South Indian filter coffee",
    price: "₹30",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.9
  },
  {
    id: 72,
    name: "Masala Chai",
    description: "Spiced Indian tea with aromatic herbs",
    price: "₹25",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.7
  },
  {
    id: 73,
    name: "Buttermilk",
    description: "Refreshing spiced yogurt drink",
    price: "₹25",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1560027734-8c99e1a54d88?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.6
  },
  {
    id: 74,
    name: "Sweet Lassi",
    description: "Thick sweetened yogurt drink",
    price: "₹40",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1546548970-71785318a17b?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.7
  },
  {
    id: 75,
    name: "Mango Lassi",
    description: "Creamy mango-flavored yogurt drink",
    price: "₹60",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1546548970-71785318a17b?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.8
  },
  {
    id: 76,
    name: "Badam Milk",
    description: "Chilled almond-flavored milk",
    price: "₹50",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.6
  },
  {
    id: 77,
    name: "Rose Milk",
    description: "Chilled rose-flavored milk",
    price: "₹45",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.5
  },
  {
    id: 78,
    name: "Fresh Lime Soda",
    description: "Refreshing lime with soda water",
    price: "₹35",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f8c?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.6
  },
  {
    id: 79,
    name: "Fresh Lime Juice",
    description: "Freshly squeezed lime with water",
    price: "₹30",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f8c?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.5
  },
  {
    id: 80,
    name: "Watermelon Juice",
    description: "Fresh watermelon juice",
    price: "₹50",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1589319563024-c352d2f3f5d9?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.7
  },
  {
    id: 81,
    name: "Pineapple Juice",
    description: "Fresh pineapple juice",
    price: "₹55",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1589319563024-c352d2f3f5d9?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.6
  },
  {
    id: 82,
    name: "Orange Juice",
    description: "Freshly squeezed orange juice",
    price: "₹60",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.7
  },
  {
    id: 83,
    name: "Sugarcane Juice",
    description: "Fresh sugarcane extract",
    price: "₹40",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1597464191464-f50c1e173e0e?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.8
  },
  {
    id: 84,
    name: "Soft Drink",
    description: "Chilled carbonated beverages",
    price: "₹30",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1581098365948-6a5a912b3a4c?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.4
  },
  {
    id: 85,
    name: "Bottled Water",
    description: "Packaged drinking water",
    price: "₹20",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.5
  },

  // DESSERTS (10 items)
  {
    id: 86,
    name: "Gulab Jamun",
    description: "Soft milk solids in rose-flavored syrup",
    price: "₹50",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.8
  },
  {
    id: 87,
    name: "Rasmalai",
    description: "Soft paneer dumplings in sweetened milk",
    price: "₹60",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.7
  },
  {
    id: 88,
    name: "Payasam",
    description: "Traditional South Indian rice pudding",
    price: "₹45",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1588195538326-c5aeb7fc0fe8?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.9
  },
  {
    id: 89,
    name: "Kesari",
    description: "Semolina pudding with saffron",
    price: "₹40",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1601040947096-eea9243d4847?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.6
  },
  {
    id: 90,
    name: "Mysore Pak",
    description: "Rich gram flour sweet with ghee",
    price: "₹55",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1596039082828-5e07d6ab30d4?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.7
  },
  {
    id: 91,
    name: "Jalebi",
    description: "Crispy spiral fritters soaked in syrup",
    price: "₹50",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.6
  },
  {
    id: 92,
    name: "Kulfi",
    description: "Traditional Indian ice cream",
    price: "₹60",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.8
  },
  {
    id: 93,
    name: "Double Ka Meetha",
    description: "Bread pudding with nuts and saffron",
    price: "₹55",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.5
  },
  {
    id: 94,
    name: "Ice Cream",
    description: "Assorted flavors of ice cream",
    price: "₹50",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.7
  },
  {
    id: 95,
    name: "Carrot Halwa",
    description: "Sweet carrot pudding with nuts",
    price: "₹60",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.6
  },

  // COMBO MEALS (5 items)
  {
    id: 96,
    name: "Classic Thali",
    description: "Rice, Sambar, Rasam, 2 Veg Curries, Curd, Papad, Sweet",
    price: "₹120",
    category: "Combos",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.8
  },
  {
    id: 97,
    name: "Mini Meals",
    description: "Rice, Sambar, 1 Veg Curry, Curd, Papad",
    price: "₹90",
    category: "Combos",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.6
  },
  {
    id: 98,
    name: "Biryani Combo",
    description: "Chicken Biryani + Raita + Gravy + Dessert",
    price: "₹220",
    category: "Combos",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
    isVeg: false,
    isSpicy: true,
    rating: 4.9
  },
  {
    id: 99,
    name: "Dosa Combo",
    description: "2 Dosas (Choice) + Sambar + 3 Chutneys + Coffee",
    price: "₹140",
    category: "Combos",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.7
  },
  {
    id: 100,
    name: "Snack Combo",
    description: "Vada + Samosa + Bajji + Coffee/Tea",
    price: "₹110",
    category: "Combos",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
    isVeg: true,
    isSpicy: false,
    rating: 4.5
  }
]

export const categories = [
  "All",
  "Starters",
  "Main Course",
  "Biryani",
  "Snacks",
  "Drinks",
  "Desserts",
  "Combos"
]
