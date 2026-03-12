// ═══════════════════════════════════════════
// data.js — All menu item data
// Edit prices, names, descriptions, and image
// paths here. This file loads FIRST (before app.js).
// ═══════════════════════════════════════════

const menuItems = {
  // ─── BUCKETS ───
  bucket10: {
    id: 'bucket10', cat: 'Jicken Bucket',
    name: '10 PCS Wings + 2 Sauces', price: 300,
    img: '/* put your 10 PCS Wings + 2 Sauces image here */',
    desc: 'Perfect for a small group or solo feasting. Choose 2 flavors from our 12 signature sauces.',
    includes: ['10 Pieces Chicken Wings', '2 Sauce of Choice', 'Best enjoyed fresh & hot']
  },
  bucket15: {
    id: 'bucket15', cat: 'Jicken Bucket',
    name: '15 PCS Wings + 3 Sauces', price: 425,
    img: '/* put your 15 PCS Wings + 3 Sauces image here */',
    desc: 'More wings, more choices. 3 flavors for variety seekers who want to try more.',
    includes: ['15 Pieces Chicken Wings', '3 Sauces of Choice', 'Great for groups of 2-3']
  },
  bucket20: {
    id: 'bucket20', cat: 'Jicken Bucket',
    name: '20 PCS Wings + 4 Sauces', price: 550,
    img: '/* put your 20 PCS Wings + 4 Sauces image here */',
    desc: 'The big bucket. 4 full flavors for the ultimate wing night.',
    includes: ['20 Pieces Chicken Wings', '4 Sauces of Choice', 'Perfect for 4+ people']
  },

  // ─── UNLIMITED ───
  unli1: {
    id: 'unli1', cat: 'Unlimited 1 Hour',
    name: 'Unli Rice & Chicken', price: 389,
    img: '/* put your Unli Rice & Chicken image here */',
    desc: 'All-you-can-eat rice & chicken wings for a full hour. Same promo per table — no mixing.',
    includes: ['Unlimited Chicken Wings & Drumettes', 'Unlimited Rice', '1 Hour Duration', 'Per person']
  },
  unli2: {
    id: 'unli2', cat: 'Unlimited 1 Hour',
    name: 'Unli Rice, Chicken & Lemonade', price: 399,
    img: '/* put your Unli Rice, Chicken & Lemonade image here */',
    desc: 'Level up with unlimited lemonade to wash down those wings.',
    includes: ['Unlimited Chicken Wings & Drumettes', 'Unlimited Rice', 'Unlimited Iced Lemonade', '1 Hour Duration', 'Per person']
  },
  unli3: {
    id: 'unli3', cat: 'Unlimited 1 Hour',
    name: 'Full Unli Combo', price: 499,
    img: '/* put your Full Unli Combo image here */',
    desc: 'Unli Rice, Chicken, Lemonade, Fries & Nachos. The complete spread.',
    includes: ['Unlimited Chicken Wings & Drumettes', 'Unlimited Rice', 'Unlimited Iced Lemonade', 'Unlimited Fries', 'Unlimited Nachos', '1 Hour Duration', 'Per person']
  },

  // ─── ALA CARTE ───
  ac1: {
    id: 'ac1', cat: 'Ala Carte',
    name: '3 PCS Wings + Rice', price: 99,
    img: '/* put your 3 PCS Wings + Rice image here */',
    desc: 'Simple, satisfying, delicious. The perfect solo meal.',
    includes: ['3 Pieces Chicken Wings', '1 Cup Rice', '1 Sauce of Choice']
  },
  ac2: {
    id: 'ac2', cat: 'Ala Carte',
    name: '6 PCS Wings + Rice', price: 189,
    img: '/* put your 6 PCS Wings + Rice image here */',
    desc: 'Double the flavor, double the fun. 2 sauces to explore.',
    includes: ['6 Pieces Chicken Wings', '1 Cup Rice', '2 Sauces of Choice']
  },
  ac3: {
    id: 'ac3', cat: 'Ala Carte',
    name: '3 PCS + Rice + Fries', price: 169,
    img: '/* put your 3 PCS + Rice + Fries image here */',
    desc: 'Includes crispy fries for that extra crunch.',
    includes: ['3 Pieces Chicken Wings', '1 Cup Rice', 'Regular Fries', '1 Sauce of Choice']
  },
  ac4: {
    id: 'ac4', cat: 'Ala Carte',
    name: '3 PCS + Large Fries', price: 189,
    img: '/* put your 3 PCS + Large Fries image here */',
    desc: 'Wings plus a heaping portion of large fries.',
    includes: ['3 Pieces Chicken Wings', 'Large Fries', '1 Sauce of Choice']
  },

  // ─── TIPID SETS ───
  duo: {
    id: 'duo', cat: 'Tipid Set',
    name: 'Duo Tipid Set', price: 469,
    img: '/* put your Duo Tipid Set image here */',
    desc: 'Good for 2. The perfect date or bestie meal deal.',
    includes: ['6 PCS Chicken (1 Flavor)', 'Fries', 'Loaded Nachos', '2 Rice', '1 Pitcher Lemonade']
  },
  familia: {
    id: 'familia', cat: 'Tipid Set',
    name: 'Familia Tipid Set', price: 659,
    img: '/* put your Familia Tipid Set image here */',
    desc: 'Good for 4. Feed the whole family with this value-packed set.',
    includes: ['12 PCS Chicken (2 Flavors)', 'Fries', 'Loaded Nachos', '4 Rice', '1 Pitcher Lemonade']
  },
  tropa: {
    id: 'tropa', cat: 'Tipid Set',
    name: 'Tropa Tipid Set', price: 1199,
    img: '/* put your Tropa Tipid Set image here */',
    desc: 'Good for 6. Perfect for group hangouts and barkada bonding sessions.',
    includes: ['18 PCS Chicken (3 Flavors)', '2 Fries', '2 Loaded Nachos', '6 Rice', '2 Pitchers Lemonade']
  },
  barkada: {
    id: 'barkada', cat: 'Tipid Set',
    name: 'Barkada Tipid Set', price: 1699,
    img: '/* put your Barkada Tipid Set image here */',
    desc: 'Good for 8. The ultimate group feast for big barkadas.',
    includes: ['24 PCS Chicken (4 Flavors)', '3 Fries', '3 Loaded Nachos', '8 Rice', '3 Pitchers Lemonade']
  },

  // ─── BILAO WINGS ───
  bilao1: {
    id: 'bilao1', cat: 'Bilao Wings',
    name: 'Bilao 1', price: 1499,
    img: '/* put your Bilao 1 image here */',
    desc: 'Ultimate party platter. 50 PCS of crispy wings in 10 sauces of your choice.',
    includes: ['50 Pieces Chicken Wings', '10 Sauces of Choice', 'Served in a traditional bilao']
  },
  bilao2: {
    id: 'bilao2', cat: 'Bilao Wings',
    name: 'Bilao 2', price: 2249,
    img: '/* put your Bilao 2 image here */',
    desc: 'The mega platter. 75 PCS of crispy wings in 15 sauces of your choice.',
    includes: ['75 Pieces Chicken Wings', '15 Sauces of Choice', 'Served in a traditional bilao']
  },
  bilao3: {
    id: 'bilao3', cat: 'Bilao Wings',
    name: 'Bilao 3', price: 2999,
    img: '/* put your Bilao 3 image here */',
    desc: 'The ultimate feast. 100 PCS of crispy wings in 20 sauces of your choice.',
    includes: ['100 Pieces Chicken Wings', '20 Sauces of Choice', 'Served in a traditional bilao']
  },

  // ─── APPETIZERS & DRINKS ───
  nachos: {
    id: 'nachos', cat: 'Appetizer',
    name: 'Loaded Nachos', price: 99,
    img: '/* put your Loaded Nachos image here */',
    desc: 'Piled high with toppings. The perfect starter before the wings arrive.',
    includes: ['Loaded toppings', 'Generous portion']
  },
  hashbrown: {
    id: 'hashbrown', cat: 'Appetizer',
    name: 'Hashbrown', price: 39,
    img: '/* put your Hashbrown image here */',
    desc: 'Golden & crispy. Simple and addictive. A perfect snack any time.',
    includes: ['Golden fried hashbrown', 'Crispy exterior', 'Soft inside']
  },
  fries: {
    id: 'fries', cat: 'Appetizer',
    name: 'Jiji Fries', price: 99,
    img: '/* put your Jiji Fries image here */',
    desc: 'Salt, Cheese, BBQ or Sour Cream — pick your favorite flavor.',
    includes: ['Crispy Fries', 'Choice of Flavor: Salt / Cheese / BBQ / Sour Cream']
  },
  lemonade: {
    id: 'lemonade', cat: 'Drink',
    name: 'Glass of Lemonade', price: 38,
    img: '/* put your Glass of Lemonade image here */',
    desc: 'Refreshing & ice-cold. The perfect companion for your wings.',
    includes: ['Fresh lemonade', 'Served over ice']
  },
  pitcher: {
    id: 'pitcher', cat: 'Drink',
    name: '1L Pitcher Lemonade', price: 89,
    img: '/* put your 1L Pitcher Lemonade image here */',
    desc: 'Share with the crew. A full liter of refreshing lemonade.',
    includes: ['1 Liter Lemonade', 'Ice-cold', 'Best shared with 3-4 people']
  },
  soda: {
    id: 'soda', cat: 'Drink',
    name: '1.5L Soda w/ Ice', price: 99,
    img: '/* put your 1.5L Soda w/ Ice image here */',
    desc: 'Coke, Sprite, or Royal. Your favorite carbonated fizz.',
    includes: ['1.5L Soda in can', 'Choice of: Coke / Sprite / Royal', 'Served with Ice']
  },

  // ─── ADD-ONS ───
  extraRice: {
    id: 'extraRice', cat: 'Add-On',
    name: 'Extra Rice', price: 25,
    img: '/* put your Extra Rice image here */',
    desc: 'Need more rice? Add an extra serving.',
    includes: ['1 Cup Steamed Rice']
  },
  extraSauce: {
    id: 'extraSauce', cat: 'Add-On',
    name: 'Extra Sauce', price: 35,
    img: '/* put your Extra Sauce image here */',
    desc: 'Love a sauce so much you want more? Add an extra!',
    includes: ['1 Extra Sauce of Choice']
  },
};
