// candle data 
const candle = [
  
    {
        "id":0,
        "name":"BULGARIAN LAVENDER",
        "img":"//cdn.shopify.com/s/files/1/1795/6929/products/Candle_SoyBlend_Lavender_BoxCandle_1_d09735ce-ab2b-4279-980f-b480f03a94ad_1200x.jpg?v=1663924385",
        "price":"$ 28.99",
        "value":28.99,
        "status":"add to cart",
        "description":"With a soft, herbaceous, and floral aroma, lavender is best known for its ability to refresh and reduce stress. Inhale the pure scent of Bulgarian lavender and breathe out negative energy and stress.",
        "units":1
        // "extra":"-Frosted 7.5 oz tumbler with 35-hour burn time, -Cotton flat-wick for a clean burn"
    },
    {
        "id":1,
        "name":"EUCALYPTUS MINT",
        "img":"//cdn.shopify.com/s/files/1/1795/6929/products/Candle_SoyBlend_EucalyptusMint_BoxCandle_73f2274a-bac3-48e9-9a08-c8d0cd2e0077_1200x.jpg?v=1663923137",
        "price":"$ 28.99",
        "value":28.99,
        "status":"add to cart",
        "description":"Minty and uplifting, this scent refreshes, reinvigorates and re-energizes your spirit.",
        "units":1
    },
    {
        "id":2,
        "name":"GRAPEFRUIT JASMINE",
        "img":" //cdn.shopify.com/s/files/1/1795/6929/products/Candle_SoyBlend_EucalyptusMint_BoxCandle_73f2274a-bac3-48e9-9a08-c8d0cd2e0077_1200x.jpg?v=1663923137",
        "price":"$ 28.99",
        "value":28.99,
        "status":"add to bag",
        "description":"Zesty and refreshing, grapefruit, bergamot, and apple create a clean backdrop, finished with the exotic musk of jasmine.",
        "units":1
    },
    {
        "id":3,
        "name":"SAFRONE ROSE",
        "img":"//cdn.shopify.com/s/files/1/1795/6929/products/Candle_SoyBlend_SaffronRose_BoxCandle_2f239122-eaa3-4ee6-90f5-0c0ae7db0a0f_1200x.jpg?v=1663923144",
        "price":"$ 28.99",
        "value":28.99,
        "status":"add to cart",
        "description":"Soft rose petal, refreshing spring water from Lily of the Valley, and smooth white musk, for a calm and clean aroma.",
        "units":1
    },
    {
        "id":4,
        "name":"SEA SALT DRIFTWOOD",
        "img":"//cdn.shopify.com/s/files/1/1795/6929/products/Candle_SoyBlend_SeaSaltDriftwood_BoxCandle_d3e77593-7958-4417-9f23-a06d37ebf71c_1200x.jpg?v=1663923904",
        "price":"$ 28.99",
        "value":28.99,
        "status":"add to cart",
        "description":"A fresh, oceanic scent paired with fresh Ylang-Ylang, creates a bright, yet soothing aura.",
        "units":1
    },
    {
        "id":5,
        "name":"SANTAL AMBER",
        "img":"//cdn.shopify.com/s/files/1/1795/6929/products/Candle_SoyBlend_SantalAmber_BoxCandle_1_39d87046-0c6f-450d-93d4-b7481b05a48e_1200x.jpg?v=1663923168",
        "price":"$ 28.99",
        "value":28.99,
        "status":"add to cart",
        "description":"A woodsy aroma of cedarwood and cardamom, a dash of sweet rose, and an earthy scent of Patchouli.",
        "units":1
    },
    {
        "id":6,
        "name":"GUAVA HONEY",
        "img":"//cdn.shopify.com/s/files/1/1795/6929/products/Candle_SoyBlend_GuavaHoney_BoxCandle_1200x.jpg?v=1676910620",
        "price":"$ 28.99",
        "value":28.99,
        "status":"add to cart",
        "description":"Zesty guava and citrusy orange, balanced with warm vanilla, pink peppercorn, and soft sandalwood, create a tropical, exotic scent.",
        "units":1
    },
    {
        "id":7,
        "name":"HYACINTH WATERLILY",
        "img":"//cdn.shopify.com/s/files/1/1795/6929/files/TF_Candle_HyacinthWaterlily_CandleAndBox_1_1200x.jpg?v=1682900206",
        "price":"$ 28.99",
        "value":28.99,
        "status":"add to cart",
        "description":"A delicate blend of hyacinth, lemon, dewy grass, jasmine, waterlily, geranium, fern, and clover. Perfect for creating a calming and fresh ambiance in any room.",
        "units":1
    },
    {
        "id":8,
        "name":"SANTAL (SANDALWOOD)",
        "img":"https://www.diptyqueparis.com/media/catalog/product/s/a/santal_sandalwood_scented_candle_sa1_1439x1200.png?quality=100&bg-color=255,255,255&fit=bounds&height=367&width=440&canvas=440:367",
        "price":"$ 73.99",
        "value":73.99,
        "status":"add to cart",
        "description":"The herbarium of trees. Fresh-cut sandalwood. The ground is spread with a layer of shavings and fine sawdust - a woody, fragrant carpet in blond hues. In the sultry heat of Asia, the scent of the tree perfumes the air. The Santal (Sandalwood) scented candle conjures up that velvety, enveloping, slightly spicy fragrance.",
        "units":1
    },
    {
        "id":9,
        "name":"BAIES (BERRIES)",
        "img":"https://www.diptyqueparis.com/media/catalog/product/b/a/baies_berries_scented_candle_b1_1439x1200_2_.png?quality=100&bg-color=255,255,255&fit=bounds&height=367&width=440&canvas=440:367",
        "price":"$ 73.99",
        "value":73.99,
        "status":"add to cart",
        "description":"The tangy coolness of a few fresh-picked blackcurrant berries. Lively, flowery rose accents. The Baies (Berries) scented candle speaks of harmony - a coming together of flower and fruit.",
        "units":1
    },
    {
        "id":10,
        "name":"MIMOSA - CLASSIC",
        "img":"https://www.diptyqueparis.com/media/catalog/product/m/i/mimosa_scented_candle_mi1_1439x1200.png?quality=100&bg-color=255,255,255&fit=bounds&height=367&width=440&canvas=440:367",
        "price":"$ 73.99",
        "value":73.99,
        "status":"add to cart",
        "description":"Mimosa seen at its finest. Captured in the wax of this scented candle is a tribute to these flowers and their sunny, golden yellow hue. On the hills of Tanneron near Grasse, they perfume the winter air with their velvety, slightly honeyed scent. Silently, their charm unfolds.",
        "units":1
    },
    {
        "id":11,
        "name":"ROSES - CLASSIC",
        "img":"https://www.diptyqueparis.com/media/catalog/product/r/o/roses_scented_candle_ro1_1439x1200.png?quality=100&bg-color=255,255,255&fit=bounds&height=367&width=440&canvas=440:367",
        "price":"$ 73.99",
        "value":73.99,
        "status":"add to cart",
        "description":"The Rose scented candle evokes rose bushes in May. Some flowers are still opening, others in full bloom. Their petals are beaded with dew, and their fragrance fills the aire with fresh, flowery notes. A wonderful bouquet.",
        "units":1
    },
    {
        "id":12,
        "name":"FIGUIER (FIG TREE)",
        "img":"https://www.diptyqueparis.com/media/catalog/product/f/i/figuier_fig_tree_scented_candle_fi1_1439x1200_1_1.png?quality=100&bg-color=255,255,255&fit=bounds&height=367&width=440&canvas=440:367",
        "price":"$ 73.99",
        "value":73.99,
        "status":"add to cart",
        "description":"The Figuier (Fig Tree) scented candle portrays the entire tree. The intense fragrance of the wood blends with the green, slightly fruity accents of a handful of figs as they start to ripen. A foretaste of summer.",
        "units":1
    },
    {
        "id":13,
        "name":"CITRONNELLE (LEMONGRASS)",
        "img":"https://www.diptyqueparis.com/media/catalog/product/b/o/bougie-citronnelle-190g-2023.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=367&width=440&canvas=440:367",
        "price":"$ 73.99",
        "value":73.99,
        "status":"add to cart",
        "description":"Ideal for repelling mosquitoes. Here, lemongrass, luminous, reveals floral and citrusy facets where it meets verbena, neroli, and orange blossom.",
        "units":1
    },
    {
        "id":14,
        "name":"CYPRES (CYPRESS)",
        "img":"https://www.diptyqueparis.com/media/catalog/product/c/y/cypres_cypress_scented_candle_cp1_1439x1200_2.png?quality=100&bg-color=255,255,255&fit=bounds&height=367&width=440&canvas=440:367",
        "price":"$ 73.99",
        "value":73.99,
        "status":"add to cart",
        "description":"A grove of cypress trees on a late summer afternoon. In the air, the accents of their needles - soft, resinous, almost honeyed. Light this scented candle and savor the essence of southern climes.",
        "units":1
    },
    {
        "id":15,
        "name":"FEU DE BOIS (WOOD FIRE)",
        "img":"https://www.diptyqueparis.com/media/catalog/product/f/e/feu_de_bois_bd_1.png?quality=100&bg-color=255,255,255&fit=bounds&height=367&width=440&canvas=440:367",
        "price":"$ 73.99",
        "value":73.99,
        "status":"add to cart",
        "description":"It is winter. In the hearth, the fire roars. This scented candle portrays the dense, smoky notes of the logs as they are gradually consumed. Throwing out light and casting shadows, the flame dances as it lights up the room. From time to time, we seem to hear the wood crackling.",
        "units":1
    },
    {
        "item":16,
        "name":"VANILLE (VANILLA)",
        "img":"https://www.diptyqueparis.com/media/catalog/product/v/a/vanille_vanilla_scented_candle_va1_1439x1200.png?quality=100&bg-color=255,255,255&fit=bounds&height=367&width=440&canvas=440:367",
        "price":"$ 73.99",
        "value":73.99,
        "status":"add to cart",
        "description":"Leathery, almost smoky accents. Vanilla pods, dense and black, so fragrant that one alone is sufficient to perfume all you might require it to. It takes time and patience for the small pods to unveil their notes: a powerful, captivating fragrance, revealed in this scented candle",
        "units":1
    },
    {
        "id":17,
        "name":"JASMIN (JASMINE)",
        "img":"https://www.diptyqueparis.com/media/catalog/product/j/a/jasmin_scented_candle_ja1_1439x1200.png?quality=100&bg-color=255,255,255&fit=bounds&height=367&width=440&canvas=440:367",
        "price":"$ 73.99",
        "value":73.99,
        "status":"add to cart",
        "description":"Strolling down a path, our attention is instantly captured by a jasmine scent. The notes that emerge are subtle yet persistent, tender yet sensual. How can such small, delicate white flowers leave such a powerful impression? An olfactory signature in a scented candle, filling the room from the moment the wick is lit.",
        "units":1
    },
    {
        "id":18,
        "name":"MUGUET(LILY OF THE VALLEY)",
        "img":"https://www.diptyqueparis.com/media/catalog/product/m/u/muguet_lily_of_the_valley_scented_candle_mg1_1439x1200_2.png?quality=100&bg-color=255,255,255&fit=bounds&height=367&width=440&canvas=440:367",
        "price":"$ 73.99",
        "value":73.99,
        "status":"add to cart",
        "description":"Within the glass vessel of this scented candle is an ode to lily of the valley, a herald of springtime that proliferates in the undergrowth, glorying in its joyful, sprightly nature. A true lucky charm that invites happiness in. The moment the wick is lit, any room become brighter and more cheerful.",
        "units":1
    }


];


// candle data end

const lotion = [
    {
        "id":19,
        "name":"Tone And Texture For Sensitive Skin",
        "img":"https://www.aveeno.com/sites/aveeno_us_2/files/styles/large/public/product-images/ave_381372021849_us_tone_texture_daily_lotion_18oz_00000-min.png",
        "price": "$ 13.99",
        "value":13.99,
        "status":"add to cart",
        "description":"Gently exfoliate, hydrate & smooth sensitive skin. This daily exfoliating body lotion contains 4% natural PHA,Pro-Vitamin B3 & prebiotic oat to moisturize dry skin all day long & smooth rough skin.",
        "units":1
    },
    {
        "id":20,
        "name":"Tone + Texture Night Cream",
        "img":"https://www.aveeno.com/sites/aveeno_us_2/files/styles/large/public/product-images/ave_381372021856_us_tone_texture_overnight_cream_8oz_00345-min.png",
        "price":"$ 10.99",
        "value":10.99,
        "status":"add to cart",
        "description":"Gently soften & smooth skin while nourishing all night long. This resurfacing body cream contains 6% natural PHA, Pro-Vitamin B3 & prebiotic oat to deeply nourish & visibly improve bumpy skin.",
        "units":1
        
    },
    {
        "id":21,
        "name":"Daily Moisturizing Body Lotion",
        "img":"https://www.aveeno.com/sites/aveeno_us_2/files/styles/large/public/product-images/ave_381371151035_us_daily_moisturizing_lotion_20oz_00015-min.png",
        "price": "$ 13.99",
        "value":13.99,
        "status":"add to cart",
        "description":"Intensely nourish dry skin with prebiotic oat formula. The gentle daily lotion nourishes & helps replenish skin's natural moisture barrier & has clinically proven moisturization that lasts 24 hours.",
        "units":1
    },
    {
        "id":22,
        "name":"Eczema Therapy Soothing Cream, Steroid Free",
        "img":"https://www.aveeno.com/sites/aveeno_us_2/files/styles/large/public/product-images/ave_381371156658_us_eczema_therapy_daily_moisturizing_cream_12oz_00015-min.png",
        "price": "$ 13.99",
        "value":13.99,
        "status":"add to cart",
        "description":"From the #1 dermatologist recommended eczema moisturizer brand, relieve & soothe symptoms of eczema such as dry, itchy skin with this daily moisturizing body cream with colloidal oatmeal and ceramide.",
        "units":1
    },
    
    {
        "id":23,
        "name":"Restorative Skin Therapy Oat Repairing Cream",
        "img":"https://www.aveeno.com/sites/aveeno_us_2/files/styles/large/public/product-images/ave_381371187898_us_restorative_skin_therapy_repairing_cream_12oz_00015_0.webp",
        "price": "$ 13.99",
        "value":13.99,
        "status":"add to cart",
        "description":"Help restore the moisture barrier to improve skin resilience with this body cream for sensitive, distressed, dry skin. This fragrance-free cream contains prebiotic oat, aloe and pro-vitamin B5.",
        "units":1
    },
    {
        "id":24,
        "name":"Skin relief Moisturizing Lotion For Very Dry Skin",
        "img":"https://www.aveeno.com/sites/aveeno_us_2/files/styles/large/public/product-images/ave_381371182176_us_skin_relief_moisturizing_lotion_fragrance_free_33oz_00015-min.png",
        "price": "$ 13.99",
        "value":13.99,
        "status":"add to cart",
        "description":"Moisturize very dry skin with this fragrance-free lotion with a triple oat & shea butter formula. The lotion provides clinically proven soothing relief for itchy, dry skin with 48-hour moisture.",
        "units":1
    },
    {
        "id":25,
        "name":"Stress Relief Body Lotion, Lavender Scent",
        "img":"https://www.aveeno.com/sites/aveeno_us_2/files/styles/large/public/product-images/ave_381371192915_us_stress_relief_moisturizing_lotion_2.5oz_00015-min.png",
        "price": "$ 13.99",
        "value":13.99,
        "status":"add to cart",
        "description":"Unwind as you moisturize your skin. This unique formula combines the calming scents of lavender to help calm and relax while providing long lasting moisture.",
        "units":1
    }
    ,
    {
        "id":26,
        "name":"Restorative Skin Therapy Itch Relief Balm",
        "img":"https://www.aveeno.com/sites/aveeno_us_2/files/styles/large/public/product-images/ave_381371187881_restor_skin_therapy_balm_113g_4oz_obwb.png",
        "price": "$ 15.99",
        "value":15.99,
        "status":"add to cart",
        "description":"Instantly soothe and relieve itchy, dry, sensitive skin with this nourishing itch relief balm. This balm is formulated with prebiotic oat, aloe, pro-vitamin B5 and pramoxine HCl. Non-greasy and fast-absorbing, this targeted treatment is formulated without parabens, fragrance, phthalates, and steroids.",
        "units":1
    },
    {
        "id":27,
        "name":"Skin relief Intense Moisture Hand Cream with Prebiotic Oat",
        "img":"https://www.aveeno.com/sites/aveeno_us_2/files/styles/large/public/product-images/ave_381370036579_us_skin_relief_intense_moisture_hand_cream_3.5oz_00015-min.png",
        "price": "$ 9.99",
        "value":9.99,
        "status":"add to cart",
        "description":"Helps soothe & moisturize dry hands. This fragrance-free moisturizing hand cream that lasts through hand washing & is clinically proven to soothe very dry skin with 24-hour moisture.",
        "units":1
    },
    {
        "id":28,
        "name":"Creamy Oil Body Moisterizer for Dry Skin",
        "img":"https://www.aveeno.com/sites/aveeno_us_2/files/styles/large/public/product-images/ave_381370039211_us_creamy_mstr_oil_scented_con_fragrancia_12oz_00015-min.png",
        "price": "$ 13.99",
        "value":13.99,
        "status":"add to cart",
        "description":"Nourish dry skin with 24 hours of moisture. This lightly scented, non-greasy creamy oil body moisturizer formulated with oat & almond oil nourishes dry skin & leaves it feeling silky smooth & soft.",
        "units":1
    },
    {
        "id":29,
        "name":"Skin Relief Overnight Cream",
        "img":"https://www.aveeno.com/sites/aveeno_us_2/files/styles/large/public/product-images/ave_381370011378_00000.png",
        "price": "$ 13.99",
        "value":13.99,
        "status":"add to cart",
        "description":"Treat your skin to a new nightly ritual. Made with Triple Oat Complex and Natural Shea butter, this overnight body cream alleviates itchy, extra-dry skin, while dimethicone skin protectant defends against the winter elements, restoring moisture to chafed, chapped or cracked skin. Simply go to sleep and wake up to soothing relief.",
        "units":1
    },
    {
        "id":30,
        "name":"Anti-Itch Consentrated Lotion",
        "img":"https://www.aveeno.com/sites/aveeno_us_2/files/styles/large/public/product-images/ave_381370036906_00000.png",
        "price": "$ 15.99",
        "value":15.99,
        "status":"add to cart",
        "description":"When the itch is intense, this soothing body lotion is your remedy. Formulated with proven anti-itch agents including calamine and triple oat complex, it provides fast-acting relief from poison ivy, oak, sumac, chicken pox, insect bites and more. Just apply the anti-itch lotion to irritated skin and rest assured knowing that relief is on the way.",
        "units":1
    },
    {
        "id":31,
        "name":"Facial Cleanser Refill",
        "img":"https://www.aveeno.com/sites/aveeno_us_2/files/styles/jjbos_adaptive_images_generic-tablet/public/product-images/ave_381372021160_us_dm_facial_cleanser_soothing_oat_refill_pouch_16oz_00015-min.png",
        "price": "$ 18.99",
        "value":18.99,
        "status":"add to cart",
        "description":"Cleanse away dirt, oil, & impurities with this daily facial cleanser. Formulated with soothing oat, the moisturizing face wash leaves skin feeling hydrated.",
        "units":1
    },
    {
        "id":32,
        "name":"Nourishing Oat Facial Cleanser Refill",
        "img":"https://www.aveeno.com/sites/aveeno_us_2/files/styles/jjbos_adaptive_images_generic-tablet/public/product-images/ave_381372021153_us_calm_restr_nrshg_cleanser_16oz_00345-min.png",
        "price": "$ 18.99",
        "value":18.99,
        "status":"add to ccart",
        "description":"Gently cleanse and hydrate skin with this gentle gel facial cleanser. The face wash for sensitive skin is hypoallergenic, non-comedogenic and contains nourishing oat and calming feverfew.",
        "units":1
    }
    
];

//tea
const tea = [
    {
        "id":32,
        "name":"Black Tea",
        "img":"https://ooty-theme.myshopify.com/cdn/shop/products/p1_380x446.jpg?v=1596795533",
        "price": "$ 12.99",
        "value":12.99,
        "status":"add to cart",
        "description":"Rhoncus dolor purus non enim praesent elementum facilisis. Libero enim sed faucibus turpis. At erat pellentesque adipiscing commodo. Cursus sit amet dictum sit. Quisque sagittis purus sit amet volutpat consequat.",
        "units":1
    },
    {
        "id":33,
        "name":"Chai Tea",
        "img":"https://ooty-theme.myshopify.com/cdn/shop/products/p7.jpg?v=1620805981",
        "price": "$ 12.99",
        "value":12.99,
        "status":"add to cart",
        "description":"Rhoncus dolor purus non enim praesent elementum facilisis. Libero enim sed faucibus turpis. At erat pellentesque adipiscing commodo. Cursus sit amet dictum sit. Quisque sagittis purus sit amet volutpat consequat.",
        "units":1
    },
    {
        "id":34,
        "name":"CLassic Black Tea",
        "img":"https://ooty-theme.myshopify.com/cdn/shop/products/p7.jpg?v=1620805981",
        "price": "$ 12.99",
        "value":12.99,
        "status":"add to cart",
        "description":"Rhoncus dolor purus non enim praesent elementum facilisis. Libero enim sed faucibus turpis. At erat pellentesque adipiscing commodo. Cursus sit amet dictum sit. Quisque sagittis purus sit amet volutpat consequat.",
        "units":1
    },
    {
        "id":35,
        "name":"Green Tea",
        "img":"https://ooty-theme.myshopify.com/cdn/shop/products/p2.jpg?v=1596795846",
        "price": "$ 12.99",
        "value":12.99,
        "status":"add to cart",
        "description":"Rhoncus dolor purus non enim praesent elementum facilisis. Libero enim sed faucibus turpis. At erat pellentesque adipiscing commodo. Cursus sit amet dictum sit. Quisque sagittis purus sit amet volutpat consequat.",
        "units":1
    },
    {
        "id":36,
        "name":"Oolong Tea",
        "img":"https://ooty-theme.myshopify.com/cdn/shop/products/p5.jpg?v=1596797058",
        "price": "$ 12.99",
        "value":12.99,
        "status":"add to cart",
        "description":"Rhoncus dolor purus non enim praesent elementum facilisis. Libero enim sed faucibus turpis. At erat pellentesque adipiscing commodo. Cursus sit amet dictum sit. Quisque sagittis purus sit amet volutpat consequat.",
        "units":1
    },
    {
        "id":37,
        "name":"Premium Tea",
        "img":"https://ooty-theme.myshopify.com/cdn/shop/products/p3.jpg?v=1596796082",
        "price": "$ 12.99",
        "value":12.99,
        "status":"add to cart",
        "description":"Rhoncus dolor purus non enim praesent elementum facilisis. Libero enim sed faucibus turpis. At erat pellentesque adipiscing commodo. Cursus sit amet dictum sit. Quisque sagittis purus sit amet volutpat consequat.",
        "units":1
    },
    {
        "id":38,
        "name":"Royal Green Tea",
        "img":"https://ooty-theme.myshopify.com/cdn/shop/products/p6.jpg?v=1596797282",
        "price": "$ 12.99",
        "value":12.99,
        "status":"add to cart",
        "description":"Rhoncus dolor purus non enim praesent elementum facilisis. Libero enim sed faucibus turpis. At erat pellentesque adipiscing commodo. Cursus sit amet dictum sit. Quisque sagittis purus sit amet volutpat consequat.",
        "units":1
    },
    {
        "id":39,
        "name":"White Tea",
        "img":"https://ooty-theme.myshopify.com/cdn/shop/products/p8.jpg?v=1596797500",
        "price": "$ 12.99",
        "value":12.99,
        "status":"add to cart",
        "description":"Rhoncus dolor purus non enim praesent elementum facilisis. Libero enim sed faucibus turpis. At erat pellentesque adipiscing commodo. Cursus sit amet dictum sit. Quisque sagittis purus sit amet volutpat consequat.",
        "units":1
    }

]