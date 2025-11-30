const extraProducts = [
  {
    id: 101,
    name: 'Alfredo',
    type: 'Engineered Timber',
    specs: ['2200 x 220 x 15 mm', 'UV Lacquered', 'Oak Veneer'],
    image: "https://site-tredflooring-assets.s3.amazonaws.com/products/de-marque-oak-wide-plank/Alfredo.jpg"
  },
  {
    id: 102,
    name: 'Ash Grey',
    type: 'Engineered Timber',
    specs: ['2200 x 220 x 15 mm', 'UV Lacquered', 'Oak Veneer'],
    image: "https://site-tredflooring-assets.s3.amazonaws.com/products/de-marque-oak-wide-plank/AshGrey.jpg"
  },
  {
    id: 103,
    name: 'Glaucous',
    type: 'Engineered Timber',
    specs: ['2200 x 220 x 15 mm', 'UV Lacquered', 'Oak Veneer'],
    image: "https://site-tredflooring-assets.s3.amazonaws.com/products/de-marque-oak-wide-plank/Glaucous.jpg"
  },
  {
    id: 104,
    name: 'Latte',
    type: 'Engineered Timber',
    specs: ['2200 x 220 x 15 mm', 'UV Lacquered', 'Oak Veneer'],
    image: "https://site-tredflooring-assets.s3.amazonaws.com/products/de-marque-oak-wide-plank/Latte.jpg"
  },
  {
    id: 105,
    name: 'Muscat',
    type: 'Engineered Timber',
    specs: ['2200 x 220 x 15 mm', 'UV Lacquered', 'Oak Veneer'],
    image: "https://site-tredflooring-assets.s3.amazonaws.com/products/de-marque-oak-wide-plank/Muscat.jpg"
  },
  {
    id: 106,
    name: 'Parana',
    type: 'Engineered Timber',
    specs: ['2200 x 220 x 15 mm', 'UV Lacquered', 'Oak Veneer'],
    image: "https://site-tredflooring-assets.s3.amazonaws.com/products/de-marque-oak-wide-plank/Parana.jpg"
  },
  {
    id: 107,
    name: 'Copper Brown',
    type: 'Engineered Timber',
    specs: ['2400 x 240 x 15 mm', 'UV Lacquered', 'Oak Veneer'],
    image: "https://site-tredflooring-assets.s3.amazonaws.com/products/de-marque-oak-wide-plank/OD-CopperBrown.jpg"
  },
  {
    id: 108,
    name: 'Dusk Grey',
    type: 'Engineered Timber',
    specs: ['2400 x 240 x 15 mm', 'UV Lacquered', 'Oak Veneer'],
    image: "https://site-tredflooring-assets.s3.amazonaws.com/products/de-marque-oak-wide-plank/OD-DuskGrey.jpg"
  },
  {
    id: 109,
    name: 'French Lace',
    type: 'Engineered Timber',
    specs: ['2400 x 240 x 15 mm', 'UV Lacquered', 'Oak Veneer'],
    image: "https://site-tredflooring-assets.s3.amazonaws.com/products/de-marque-oak-wide-plank/OD-FrenchLace.jpg"
  },
  {
    id: 110,
    name: 'Matterhorn',
    type: 'Engineered Timber',
    specs: ['2400 x 240 x 15 mm', 'UV Lacquered', 'Oak Veneer'],
    image: "https://site-tredflooring-assets.s3.amazonaws.com/products/de-marque-oak-wide-plank/OD-Matterhorn.jpg"
  },
  {
    id: 111,
    name: 'Polar Ice',
    type: 'Engineered Timber',
    specs: ['2400 x 240 x 15 mm', 'UV Lacquered', 'Oak Veneer'],
    image: "https://site-tredflooring-assets.s3.amazonaws.com/products/de-marque-oak-wide-plank/OD-PolarIce.jpg"
  },
  {
    id: 112,
    name: 'Valley Oak',
    type: 'Engineered Timber',
    specs: ['2400 x 240 x 15 mm', 'UV Lacquered', 'Oak Veneer'],
    image: "https://site-tredflooring-assets.s3.amazonaws.com/products/de-marque-oak-wide-plank//OD-ValleyOak.jpg"
  },
  {
  id: 113,
  name: 'Black Magic',
  type: 'Engineered Timber',
  specs: ['1900 x 190 x 15 mm', 'Brushed Matt', 'Oak Veneer'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/village-oak/BlackMagic.jpg"
},
{
  id: 114,
  name: 'Bottlebrush',
  type: 'Engineered Timber',
  specs: ['1900 x 190 x 15 mm', 'Brushed Matt', 'Oak Veneer'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/village-oak/Bottlebrush.jpg"
},
{
  id: 115,
  name: 'Double Black',
  type: 'Engineered Timber',
  specs: ['1900 x 190 x 15 mm', 'Brushed Matt', 'Oak Veneer'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/village-oak/DoubleBlack.jpg"
},
{
  id: 116,
  name: 'Earl Grey',
  type: 'Engineered Timber',
  specs: ['1900 x 190 x 15 mm', 'Brushed Matt', 'Oak Veneer'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/village-oak/EarlGrey.jpg"
},
{
  id: 117,
  name: 'Forest',
  type: 'Engineered Timber',
  specs: ['1900 x 190 x 15 mm', 'Brushed Matt', 'Oak Veneer'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/village-oak/Forest.jpg"
},
{
  id: 118,
  name: 'Honey Myrtle',
  type: 'Engineered Timber',
  specs: ['1900 x 190 x 15 mm', 'Brushed Matt', 'Oak Veneer'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/village-oak/HoneyMyrtle.jpg"
},
{
  id: 119,
  name: 'Lily White',
  type: 'Engineered Timber',
  specs: ['1900 x 190 x 15 mm', 'Brushed Matt', 'Oak Veneer'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/village-oak/LilyWhite.jpg"
},
{
  id: 120,
  name: 'Loft',
  type: 'Engineered Timber',
  specs: ['1900 x 190 x 15 mm', 'Brushed Matt', 'Oak Veneer'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/village-oak/Loft.jpg"
},
{
  id: 121,
  name: 'Midlands',
  type: 'Engineered Timber',
  specs: ['1900 x 190 x 15 mm', 'Brushed Matt', 'Oak Veneer'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/village-oak/Midlands.jpg"
},
{
  id: 122,
  name: 'Moon Dust',
  type: 'Engineered Timber',
  specs: ['1900 x 190 x 15 mm', 'Brushed Matt', 'Oak Veneer'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/village-oak/MoonDust.jpg"
},
{
  id: 123,
  name: 'Saltbush',
  type: 'Engineered Timber',
  specs: ['1900 x 190 x 15 mm', 'Brushed Matt', 'Oak Veneer'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/village-oak/Saltbush.jpg"
},
{
  id: 124,
  name: 'Silver Holly',
  type: 'Engineered Timber',
  specs: ['1900 x 190 x 15 mm', 'Brushed Matt', 'Oak Veneer'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/village-oak/SilverHolly.jpg"
},
{
  id: 125,
  name: 'Swissbrown',
  type: 'Engineered Timber',
  specs: ['1900 x 190 x 15 mm', 'Brushed Matt', 'Oak Veneer'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/village-oak/Swissbrown.jpg"
},
{
  id: 126,
  name: 'Trinity',
  type: 'Engineered Timber',
  specs: ['1900 x 190 x 15 mm', 'Brushed Matt', 'Oak Veneer'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/village-oak/Trinity.jpg"
},
{
  id: 127,
  name: 'Antique',
  type: 'Hybrid',
  specs: ['1520 x 228 x 6.5 mm', '0.5 mm wear layer', 'AC4', 'IXPE backing'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/easi-plank/Antique.jpg"
},
{
  id: 128,
  name: 'Barnside',
  type: 'Hybrid',
  specs: ['1520 x 228 x 6.5 mm', '0.5 mm wear layer', 'AC4', 'IXPE backing'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/easi-plank/Barnside.jpg"
},
{
  id: 129,
  name: 'Deep Brown',
  type: 'Hybrid',
  specs: ['1520 x 228 x 6.5 mm', '0.5 mm wear layer', 'AC4', 'IXPE backing'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/easi-plank/DeepBrown.jpg"
},
{
  id: 130,
  name: 'Doeskin',
  type: 'Hybrid',
  specs: ['1520 x 228 x 6.5 mm', '0.5 mm wear layer', 'AC4', 'IXPE backing'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/easi-plank/Doeskin.jpg"
},
{
  id: 131,
  name: 'Flint Grey',
  type: 'Hybrid',
  specs: ['1520 x 228 x 6.5 mm', '0.5 mm wear layer', 'AC4', 'IXPE backing'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/easi-plank/FlintGrey.jpg"
},
{
  id: 132,
  name: 'Grey Stone',
  type: 'Hybrid',
  specs: ['1520 x 228 x 6.5 mm', '0.5 mm wear layer', 'AC4', 'IXPE backing'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/easi-plank/GreyStone.jpg"
},
{
  id: 133,
  name: 'Linen',
  type: 'Hybrid',
  specs: ['1520 x 228 x 6.5 mm', '0.5 mm wear layer', 'AC4', 'IXPE backing'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/easi-plank/Linen.jpg"
},
{
  id: 134,
  name: 'Magnolia',
  type: 'Hybrid',
  specs: ['1520 x 228 x 6.5 mm', '0.5 mm wear layer', 'AC4', 'IXPE backing'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/easi-plank/Magnolia.jpg"
},
{
  id: 135,
  name: 'Maize',
  type: 'Hybrid',
  specs: ['1520 x 228 x 6.5 mm', '0.5 mm wear layer', 'AC4', 'IXPE backing'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/easi-plank/Maize.jpg"
},
{
  id: 136,
  name: 'Oak Natural',
  type: 'Hybrid',
  specs: ['1520 x 228 x 6.5 mm', '0.5 mm wear layer', 'AC4', 'IXPE backing'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/easi-plank/OakNatural.jpg"
},
{
  id: 137,
  name: 'Pewter',
  type: 'Hybrid',
  specs: ['1520 x 228 x 6.5 mm', '0.5 mm wear layer', 'AC4', 'IXPE backing'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/easi-plank/Pewter.jpg"
},
{
  id: 138,
  name: 'Porcelain',
  type: 'Hybrid',
  specs: ['1520 x 228 x 6.5 mm', '0.5 mm wear layer', 'AC4', 'IXPE backing'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/easi-plank/Porcelain.jpg"
},
{
  id: 139,
  name: 'Red Stone',
  type: 'Hybrid',
  specs: ['1520 x 228 x 6.5 mm', '0.5 mm wear layer', 'AC4', 'IXPE backing'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/easi-plank/RedStone.jpg"
},
{
  id: 140,
  name: 'Silver Grey',
  type: 'Hybrid',
  specs: ['1520 x 228 x 6.5 mm', '0.5 mm wear layer', 'AC4', 'IXPE backing'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/easi-plank/SilverGrey.jpg"
},
{
  id: 141,
  name: 'Washed Coral',
  type: 'Hybrid',
  specs: ['1520 x 228 x 6.5 mm', '0.5 mm wear layer', 'AC4', 'IXPE backing'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/easi-plank/WashedCoral.jpg"
},
{
  id: 142,
  name: 'Wheat',
  type: 'Hybrid',
  specs: ['1520 x 228 x 6.5 mm', '0.5 mm wear layer', 'AC4', 'IXPE backing'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/easi-plank/Wheat.jpg"
},
{
  id: 143,
  name: 'Chicory',
  type: 'Hybrid',
  specs: ['1800 x 228 x 6.5 mm', '0.5 mm wear layer', 'AC4', 'IXPE backing'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/aspire/ChicoryAspire.jpeg"
},
{
  id: 144,
  name: 'Coastal Blackbutt',
  type: 'Hybrid',
  specs: ['1800 x 228 x 6.5 mm', '0.5 mm wear layer', 'AC4', 'IXPE backing'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/aspire/CoastalBlackbutt.jpg"
},
{
  id: 145,
  name: 'Crystal Lake',
  type: 'Hybrid',
  specs: ['1800 x 228 x 6.5 mm', '0.5 mm wear layer', 'AC4', 'IXPE backing'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/aspire/CrystalLake.jpg"
},
{
  id: 146,
  name: 'Dolomite',
  type: 'Hybrid',
  specs: ['1800 x 228 x 6.5 mm', '0.5 mm wear layer', 'AC4', 'IXPE backing'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/aspire/DolomiteAspire.jpg"
},
{
  id: 147,
  name: 'Homestead',
  type: 'Hybrid',
  specs: ['1800 x 228 x 6.5 mm', '0.5 mm wear layer', 'AC4', 'IXPE backing'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/aspire/Homestead.jpg"
},
{
  id: 148,
  name: 'Iron Ridge',
  type: 'Hybrid',
  specs: ['1800 x 228 x 6.5 mm', '0.5 mm wear layer', 'AC4', 'IXPE backing'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/aspire/IronRidge.jpg"
},
{
  id: 149,
  name: 'Mountain Oak',
  type: 'Hybrid',
  specs: ['1800 x 228 x 6.5 mm', '0.5 mm wear layer', 'AC4', 'IXPE backing'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/aspire/MountainOak.jpg"
},
{
  id: 150,
  name: 'New England Blackbutt',
  type: 'Hybrid',
  specs: ['1800 x 228 x 6.5 mm', '0.5 mm wear layer', 'AC4', 'IXPE backing'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/aspire/NewEnglandBlackbutt.jpg"
},
{
  id: 151,
  name: 'NSW Spotted Gum',
  type: 'Hybrid',
  specs: ['1800 x 228 x 6.5 mm', '0.5 mm wear layer', 'AC4', 'IXPE backing'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/aspire/NSWSpottedGum.jpg"
},
{
  id: 152,
  name: 'Pebble Beach',
  type: 'Hybrid',
  specs: ['1800 x 228 x 6.5 mm', '0.5 mm wear layer', 'AC4', 'IXPE backing'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/aspire/PebbleBeach.jpg"
},
{
  id: 153,
  name: 'QLD Spotted Gum',
  type: 'Hybrid',
  specs: ['1800 x 228 x 6.5 mm', '0.5 mm wear layer', 'AC4', 'IXPE backing'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/aspire/QLDSpottedGum.jpg"
},
{
  id: 154,
  name: 'Sandy Bluff',
  type: 'Hybrid',
  specs: ['1800 x 228 x 6.5 mm', '0.5 mm wear layer', 'AC4', 'IXPE backing'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/aspire/SandyBluff.jpg"
},
{
  id: 155,
  name: 'Silver Moon',
  type: 'Hybrid',
  specs: ['1800 x 228 x 6.5 mm', '0.5 mm wear layer', 'AC4', 'IXPE backing'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/aspire/SilverMoon.jpg"
},
{
  id: 156,
  name: 'Warm Springs',
  type: 'Hybrid',
  specs: ['1800 x 228 x 6.5 mm', '0.5 mm wear layer', 'AC4', 'IXPE backing'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/aspire/WarmSprings.jpg"
},
{
  id: 157,
  name: 'Aged Natural Oakleaf',
  type: 'Laminate',
  specs: ['2200 x 196 x 12 mm', 'AC4', 'Embossed matte finish'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/oakleaf/AgedNaturalOakleaf.jpg"
},
{
  id: 158,
  name: 'Alpine Mist',
  type: 'Laminate',
  specs: ['2200 x 196 x 12 mm', 'AC4', 'Embossed matte finish'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/oakleaf/AlpineMist.jpg"
},
{
  id: 159,
  name: 'Arctic Fox',
  type: 'Laminate',
  specs: ['2200 x 196 x 12 mm', 'AC4', 'Embossed matte finish'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/oakleaf/ArcticFox.jpg"
},
{
  id: 160,
  name: 'Bedrock',
  type: 'Laminate',
  specs: ['2200 x 196 x 12 mm', 'AC4', 'Embossed matte finish'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/oakleaf/Bedrock.jpg"
},
{
  id: 161,
  name: 'Blackbutt',
  type: 'Laminate',
  specs: ['2200 x 196 x 12 mm', 'AC4', 'Embossed matte finish'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/oakleaf/Blackbutt.jpg"
},
{
  id: 162,
  name: 'Clove',
  type: 'Laminate',
  specs: ['2200 x 196 x 12 mm', 'AC4', 'Embossed matte finish'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/oakleaf/Clove.jpg"
},
{
  id: 163,
  name: 'Delta Sand',
  type: 'Laminate',
  specs: ['2200 x 196 x 12 mm', 'AC4', 'Embossed matte finish'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/oakleaf/DeltaSand.jpg"
},
{
  id: 164,
  name: 'Hickory',
  type: 'Laminate',
  specs: ['2200 x 196 x 12 mm', 'AC4', 'Embossed matte finish'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/oakleaf/Hickory.jpg"
},
{
  id: 165,
  name: 'Natural',
  type: 'Laminate',
  specs: ['2200 x 196 x 12 mm', 'AC4', 'Embossed matte finish'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/oakleaf/Natural.jpg"
},
{
  id: 166,
  name: 'Sierra Oak',
  type: 'Laminate',
  specs: ['2200 x 196 x 12 mm', 'AC4', 'Embossed matte finish'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/oakleaf/SierraOak.jpg"
},
{
  id: 167,
  name: 'Silk Grey',
  type: 'Laminate',
  specs: ['2200 x 196 x 12 mm', 'AC4', 'Embossed matte finish'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/oakleaf/SilkGrey.jpg"
},
{
  id: 168,
  name: 'Spotted Gum',
  type: 'Laminate',
  specs: ['2200 x 196 x 12 mm', 'AC4', 'Embossed matte finish'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/oakleaf/SpottedGum.jpg"
},
{
  id: 169,
  name: 'Wolf Grey',
  type: 'Laminate',
  specs: ['2200 x 196 x 12 mm', 'AC4', 'Embossed matte finish'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/oakleaf/WolfGrey.jpg"
},
{
  id: 170,
  name: 'Kulak Clay 120',
  type: 'Vinyl',
  specs: ['305 x 610 mm', 'Textured stone finish', 'Indoor use'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/kulak/KulakClay120.jpg"
},
{
  id: 171,
  name: 'Kulak Pearl 120',
  type: 'Vinyl',
  specs: ['305 x 610 mm', 'Textured stone finish', 'Indoor use'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/kulak/KulakPearl120.jpg"
},
{
  id: 172,
  name: 'Kulak Smoke 120',
  type: 'Vinyl',
  specs: ['305 x 610 mm', 'Textured stone finish', 'Indoor use'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/kulak/KulakSmoke120.jpg"
},
{
  id: 173,
  name: 'Kulak Sand 120',
  type: 'Vinyl',
  specs: ['305 x 610 mm', 'Textured stone finish', 'Indoor use'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/kulak/KulakSand120.jpg"
},
{
  id: 174,
  name: 'Kulak Clay 60',
  type: 'Vinyl',
  specs: ['305 x 305 mm', 'Textured stone finish', 'Indoor use'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/kulak/KulakClay60.jpg"
},
{
  id: 175,
  name: 'Kulak Pearl 60',
  type: 'Vinyl',
  specs: ['305 x 305 mm', 'Textured stone finish', 'Indoor use'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/kulak/KulakPearl60.jpg"
},
{
  id: 176,
  name: 'Kulak Smoke 60',
  type: 'Vinyl',
  specs: ['305 x 305 mm', 'Textured stone finish', 'Indoor use'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/kulak/KulakSmoke60.jpg"
},
{
  id: 177,
  name: 'Kulak Sand 60',
  type: 'Vinyl',
  specs: ['305 x 305 mm', 'Textured stone finish', 'Indoor use'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/kulak/KulakSand60.jpg"
},
{
  id: 181,
  name: 'Mayastone Pearl',
  type: 'Vinyl',
  specs: ['Matte stone look', 'Indoor use'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/mayastone/MayaStonePearl.jpg"
},
{
  id: 182,
  name: 'Mayastone White',
  type: 'Vinyl',
  specs: ['Matte stone look', 'Indoor use'],
  image: "https://site-tredflooring-assets.s3.amazonaws.com/products/mayastone/MayaStoneSilk.jpg"
}
];

export default extraProducts;

