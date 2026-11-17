// Product catalogue dataset for the roofing e-commerce website.
// No pricing fields are included. Original PNG assets are bundled in ./assets.
// ESM module: import products, { assetInventory, catalogMetadata, toProductJsonLd } from './products.js';

export const catalogMetadata = {
  "catalogName": "Roofing & Building Materials E-commerce Product Dataset",
  "version": "1.0.0",
  "productCount": 25,
  "imageAssetCount": 26,
  "includesPricing": false,
  "moduleFormat": "ESM",
  "imagePathConvention": "Images are bundled in ./assets and resolved relative to products.js.",
  "sourceArchive": "new.zip",
  "importantNotes": [
    "The uploaded archive contains 26 PNG assets and 25 distinct product entries; one textured-polycarbonate image is an alternate version.",
    "Most supplied image assets are 1254x1254 px, not 2048x2048 px. Two are 2048x2048 px and one alternate is 1536x1024 px.",
    "Images are included unchanged. Some images contain embedded labels, feature icons or claims; inspect imageReview before publishing.",
    "AC product composition is not visually verifiable. If asbestos-containing, asbestos is carcinogenic; publication and sale require legal and safety review.",
    "Specifications that are not confirmed by the user's files are marked as requiring supplier confirmation."
  ]
};

export const assetInventory = [
  {
    "file": "Polycarbonate Sheets_ Textured Finish.png",
    "productId": "textured-polycarbonate-sheets",
    "role": "alternate",
    "width": 1536,
    "height": 1024,
    "format": "PNG",
    "bytes": 2755651,
    "sha256": "aebb21fedfc9e57b8eae1dcd725d1a37091fb2894577a55f187efcba7cccb871",
    "reviewNote": "Alternate textured-polycarbonate poster; has baked-in product title and performance icons; 1536×1024 landscape."
  },
  {
    "file": "ac_metacolor_sheets.png",
    "productId": "coloured-ac-sheets",
    "role": "primary",
    "width": 1254,
    "height": 1254,
    "format": "PNG",
    "bytes": 2675781,
    "sha256": "637153948edccf7764be1e9a24c74c886f25587b28a073628e5ce2725119386e",
    "reviewNote": ""
  },
  {
    "file": "ac_pipes.png",
    "productId": "ac-pipes",
    "role": "primary",
    "width": 1254,
    "height": 1254,
    "format": "PNG",
    "bytes": 2033130,
    "sha256": "5d1a0b8b9705b0f8e4f94fa76a5ba6bcda0da11685740731343ebd2c0522d6ed",
    "reviewNote": ""
  },
  {
    "file": "ac_sheets.png",
    "productId": "ac-sheets",
    "role": "primary",
    "width": 1254,
    "height": 1254,
    "format": "PNG",
    "bytes": 2323607,
    "sha256": "d5a924ef37bc54b854623d463ad7924e20844b8400d3b020b8a4ac2f893e39f1",
    "reviewNote": ""
  },
  {
    "file": "acrylic_sheets.png",
    "productId": "acrylic-sheets",
    "role": "primary",
    "width": 2048,
    "height": 2048,
    "format": "PNG",
    "bytes": 3168226,
    "sha256": "1ca77981bd30a387dba6f58f5fab0938afb48c78a44ead1f69ad2081c9ada48c",
    "reviewNote": ""
  },
  {
    "file": "aluminium_vents.png",
    "productId": "aluminium-turbine-vents",
    "role": "primary",
    "width": 1254,
    "height": 1254,
    "format": "PNG",
    "bytes": 1831396,
    "sha256": "218ea6cdbf22e36fc8b42607077caaebaa5f98ee17d5c015d677dc382ec960c9",
    "reviewNote": ""
  },
  {
    "file": "crimping_sheets.png",
    "productId": "crimping-sheets",
    "role": "primary",
    "width": 2048,
    "height": 2048,
    "format": "PNG",
    "bytes": 5626694,
    "sha256": "15679a29b21d6d6955010de118cf0760f34b8cb480a1731ca65c3fcc23d12fac",
    "reviewNote": ""
  },
  {
    "file": "frp_sheets.png",
    "productId": "frp-sheets",
    "role": "primary",
    "width": 1254,
    "height": 1254,
    "format": "PNG",
    "bytes": 2179646,
    "sha256": "72df0499a457808ae03b6eea06f396b871a21fae8736004b05a1f016a06bc121",
    "reviewNote": ""
  },
  {
    "file": "gc_sheets.png",
    "productId": "gc-sheets",
    "role": "primary",
    "width": 1254,
    "height": 1254,
    "format": "PNG",
    "bytes": 2820605,
    "sha256": "4f02d627feb72615a43c2471eec27c06ec14140fe2bc6367fba833edf8bb02b4",
    "reviewNote": ""
  },
  {
    "file": "gi_decking_sheets.png",
    "productId": "gi-decking-sheets",
    "role": "primary",
    "width": 1254,
    "height": 1254,
    "format": "PNG",
    "bytes": 2538133,
    "sha256": "07ac2a6a9a942452f8a3a1a821ecba1c31770de9df67930151bdde7b38800346",
    "reviewNote": ""
  },
  {
    "file": "gp_sheets.png",
    "productId": "gp-sheets",
    "role": "primary",
    "width": 1254,
    "height": 1254,
    "format": "PNG",
    "bytes": 2856400,
    "sha256": "2309b64ae8f4740686b4f2e7907fc41ae31d0f2a85732f85a01e693e04bb7346",
    "reviewNote": ""
  },
  {
    "file": "hilux_calcium_cilicate_board.png",
    "productId": "hilux-calcium-silicate-board",
    "role": "primary",
    "width": 1254,
    "height": 1254,
    "format": "PNG",
    "bytes": 2201660,
    "sha256": "2a2040495bebdcb02580b460b4c6fd18eb15d67604004372799aac2c5c3c7b79",
    "reviewNote": ""
  },
  {
    "file": "meta_color_sheets.png",
    "productId": "meta-color-sheets",
    "role": "primary",
    "width": 1254,
    "height": 1254,
    "format": "PNG",
    "bytes": 2055331,
    "sha256": "368d57b89eeddeb2fb7dde4f244bc92e20b18b928e9b4be95e8d9637100bfd6d",
    "reviewNote": ""
  },
  {
    "file": "metacolor_accessories.png",
    "productId": "metacolor-accessories",
    "role": "primary",
    "width": 2048,
    "height": 2048,
    "format": "PNG",
    "bytes": 3847174,
    "sha256": "1a393c021db5b54e606897fb9c1fd7b6633142bb7c4571ad268c16bd2150dac5",
    "reviewNote": ""
  },
  {
    "file": "ms_angle.png",
    "productId": "ms-angle",
    "role": "primary",
    "width": 1254,
    "height": 1254,
    "format": "PNG",
    "bytes": 2655850,
    "sha256": "20b393eb574fed1a4e6819471b3648204b2e9ebb1503f4d8230ab7de90824866",
    "reviewNote": "Contains baked-in product label and '5 mm' thickness callout; confirm the thickness before use."
  },
  {
    "file": "ms_round_pipes.png",
    "productId": "ms-round-pipes",
    "role": "primary",
    "width": 1254,
    "height": 1254,
    "format": "PNG",
    "bytes": 2182745,
    "sha256": "45b3c14efbea9af40758ae3c6779a7f07ad987d68bb6b376d0aa45141efe91e2",
    "reviewNote": "Contains baked-in product label text in a detail panel."
  },
  {
    "file": "polycarbonate_compact_sheets.png",
    "productId": "polycarbonate-compact-sheets",
    "role": "primary",
    "width": 1254,
    "height": 1254,
    "format": "PNG",
    "bytes": 1709339,
    "sha256": "c3ac79d00fef9048b8840720dc18882fb385717ee0a45b7e0feb4ae71fbd783f",
    "reviewNote": "Contains printed protective-film wording and illustrative feature icons/claims in the collage; review before publishing."
  },
  {
    "file": "polycarbonate_embossed_color_plain_sheet Collection.png",
    "productId": "polycarbonate-embossed-colour-sheets",
    "role": "primary",
    "width": 1254,
    "height": 1254,
    "format": "PNG",
    "bytes": 2721511,
    "sha256": "7e1a6e41b0b68fffc92f6b89d6e4ad903e638470b1db8b7feb912c79a25fd70c",
    "reviewNote": "Contains baked-in product title and performance icons/claims; review before publishing."
  },
  {
    "file": "polycarbonate_profile_sheet.png",
    "productId": "polycarbonate-profile-sheets",
    "role": "primary",
    "width": 1254,
    "height": 1254,
    "format": "PNG",
    "bytes": 2044390,
    "sha256": "2eee16226b2093329e9150feff76691ae8e86d541c586fe65209c276c5857f5b",
    "reviewNote": "Contains baked-in title, benefit icons and an installation inset; review before publishing."
  },
  {
    "file": "polycarbonate_sheets.png",
    "productId": "textured-polycarbonate-sheets",
    "role": "primary",
    "width": 1254,
    "height": 1254,
    "format": "PNG",
    "bytes": 3018351,
    "sha256": "e11a4de4bea98fe69dce55a8a9a6b6b5a7479f7f20c57aa4cbfe3e0667e5eac8",
    "reviewNote": ""
  },
  {
    "file": "puff_or_sandwhich_sheets.png",
    "productId": "puf-sandwich-sheets",
    "role": "primary",
    "width": 1254,
    "height": 1254,
    "format": "PNG",
    "bytes": 2154493,
    "sha256": "89195ba22cf3b74ec6e261d7572fec1331acd2b5c584d5a4296835e44ddb0236",
    "reviewNote": ""
  },
  {
    "file": "pvc_sheets.png",
    "productId": "pvc-printed-rolls",
    "role": "primary",
    "width": 1254,
    "height": 1254,
    "format": "PNG",
    "bytes": 2938112,
    "sha256": "b2ab2a01c78200966b516f0ff6fc666f6613695c2cd466f8e474f0cdf3d3df54",
    "reviewNote": ""
  },
  {
    "file": "sds_screws.png",
    "productId": "sds-screws",
    "role": "primary",
    "width": 1254,
    "height": 1254,
    "format": "PNG",
    "bytes": 1713646,
    "sha256": "a38d5b257227a1530fbeec42df538202c3887d74030d1b4fe2d138a9a66a0059",
    "reviewNote": ""
  },
  {
    "file": "upvc_gutter_and_accessories.png",
    "productId": "upvc-gutters-accessories",
    "role": "primary",
    "width": 1254,
    "height": 1254,
    "format": "PNG",
    "bytes": 1453603,
    "sha256": "e5a02760c0655bf6ec665e4feb6ce1ec8f36c2500c9723c11518269313d7c68c",
    "reviewNote": ""
  },
  {
    "file": "upvc_tiles_sheets.png",
    "productId": "upvc-tile-sheets",
    "role": "primary",
    "width": 1254,
    "height": 1254,
    "format": "PNG",
    "bytes": 2632890,
    "sha256": "50d0a65cf52a35efa0dcddaea04d4c24f57746e594749236f9de1e9e15b59ad4",
    "reviewNote": ""
  },
  {
    "file": "vent_base.png",
    "productId": "vent-base",
    "role": "primary",
    "width": 1254,
    "height": 1254,
    "format": "PNG",
    "bytes": 2442664,
    "sha256": "71c992c3cff398030b5c082488176f2030dea73cf4ffcb20578edc44c3737297",
    "reviewNote": ""
  }
];

const rawProducts = [
  {
    "id": "ac-pipes",
    "name": "AC Pipes",
    "category": "Pipes & Drainage",
    "slug": "ac-pipes",
    "shortDescription": "Socket-ended AC pipe sections shown in multiple diameters. Confirm the exact composition before creating a public product listing.",
    "description": "AC is commonly used in construction materials to mean asbestos cement. The supplied image shows rigid cylindrical pipes with open bores and enlarged socket ends. The image cannot establish whether this stock contains asbestos or is an asbestos-free fibre-cement alternative; obtain a manufacturer declaration and applicable test documentation before publishing or supplying it.",
    "material": {
      "value": "Potential asbestos-cement or asbestos-free fibre-cement; not verified from image",
      "confidence": "unverified",
      "supplierConfirmationRequired": true
    },
    "formAndFinish": [
      "Rigid cylindrical pipe sections",
      "Open circular bore",
      "Socket / enlarged joint ends",
      "Light grey cementitious appearance"
    ],
    "typicalUses": [
      "Historically used for water, drainage and sewage pipe networks when the specific product was approved for that service"
    ],
    "bestApplications": [
      "Do not specify for a new project until composition, legal status, pressure class, joint system and intended service are confirmed."
    ],
    "selectionChecklist": [
      "Asbestos-containing or asbestos-free declaration",
      "Nominal bore / outside diameter",
      "Pressure or stiffness class",
      "Pipe length and socket dimensions",
      "Joint / gasket system",
      "Applicable standard and test certificate"
    ],
    "cautions": [
      "If asbestos-containing, do not market, cut, drill, abrade or handle as an ordinary commodity. Follow applicable law and competent occupational-safety guidance.",
      "Appearance alone cannot confirm asbestos content."
    ],
    "publicationStatus": "HOLD: supplier composition and legal/compliance review required before listing as a saleable product.",
    "seo": {
      "title": "AC Pipes | Cement Pipe Sections & Specifications",
      "metaDescription": "View AC pipe sections and socket-end profiles. Confirm asbestos-free composition, pipe class, dimensions and joint specifications before selection.",
      "keywords": [
        "AC pipes",
        "asbestos cement pipes",
        "cement pipe sections",
        "socket end pipe",
        "fibre cement pipe",
        "drainage pipe"
      ]
    },
    "imageAlt": "AC Pipes product collage on a clean white background",
    "imageDimensions": "1254x1254",
    "imageNotes": "Image is a generated collage; material content cannot be identified visually.",
    "sources": [
      {
        "title": "WHO — Asbestos",
        "url": "https://www.who.int/news-room/fact-sheets/detail/asbestos",
        "use": "Health hazard: WHO states all forms of asbestos are carcinogenic."
      },
      {
        "title": "UK HSE — Asbestos locations and materials",
        "url": "https://www.hse.gov.uk/asbestos/location-materials.htm",
        "use": "Identifies asbestos-cement roofing, cladding, pipes, gutters and other products."
      },
      {
        "title": "UK HSE — Asbestos survey guide",
        "url": "https://www.hse.gov.uk/pubns/priced/hsg264.pdf",
        "use": "Identifies asbestos cement pipes among moulded products."
      }
    ],
    "imageReview": "No obvious embedded copy detected in the contact-sheet review; still inspect at full size before publication.",
    "jsonLdType": "Product",
    "imagePath": "./assets/ac_pipes.png"
  },
  {
    "id": "ac-sheets",
    "name": "AC Sheets",
    "category": "Roofing Sheets & Panels",
    "slug": "ac-sheets",
    "shortDescription": "Corrugated cementitious roofing sheets with a repeating wave profile. Confirm asbestos-free status before listing.",
    "description": "The supplied image shows stacked grey corrugated sheets with a repeating sinusoidal roof profile. AC may refer to asbestos cement in this product category, but non-asbestos fibre-cement lookalikes also exist. The actual fibre composition must be confirmed from the manufacturer; do not infer it from colour or appearance.",
    "material": {
      "value": "Potential asbestos cement or asbestos-free fibre cement; not verified",
      "confidence": "unverified",
      "supplierConfirmationRequired": true
    },
    "formAndFinish": [
      "Corrugated / wave-profile panels",
      "Rigid cementitious sheet appearance",
      "Layered sheet edges"
    ],
    "typicalUses": [
      "Historically used for pitched-roof covering and external wall cladding when the specific product is verified and permitted"
    ],
    "bestApplications": [
      "No new-project recommendation until composition, applicable legal requirements, structural loading and fixing details are verified."
    ],
    "selectionChecklist": [
      "Asbestos-free declaration or accredited material test",
      "Profile dimensions and effective cover width",
      "Thickness and sheet length",
      "Sheet weight and support spacing",
      "Fixing and washer specification",
      "Applicable product standard"
    ],
    "cautions": [
      "If asbestos-containing, all forms of asbestos are carcinogenic according to WHO. Do not cut, drill, break or abrade.",
      "Identify and describe asbestos-free fibre-cement alternatives accurately; do not label them asbestos cement."
    ],
    "publicationStatus": "HOLD: confirm asbestos content and legal/compliance position before publication.",
    "seo": {
      "title": "AC Roofing Sheets | Corrugated Cement Sheets",
      "metaDescription": "Explore corrugated AC-style roofing sheets. Verify asbestos-free composition, profile, thickness, cover width and fixing requirements before purchase.",
      "keywords": [
        "AC roofing sheets",
        "corrugated cement sheets",
        "fibre cement roofing sheets",
        "roof cladding sheets",
        "corrugated roofing panels"
      ]
    },
    "imageAlt": "AC Sheets product collage on a clean white background",
    "imageDimensions": "1254x1254",
    "imageNotes": "Clean collage; image cannot establish sheet fibre composition.",
    "sources": [
      {
        "title": "WHO — Asbestos",
        "url": "https://www.who.int/news-room/fact-sheets/detail/asbestos",
        "use": "Health hazard: WHO states all forms of asbestos are carcinogenic."
      },
      {
        "title": "UK HSE — Asbestos locations and materials",
        "url": "https://www.hse.gov.uk/asbestos/location-materials.htm",
        "use": "Identifies asbestos-cement roofing, cladding, pipes, gutters and other products."
      },
      {
        "title": "BIS — IS 459 product manual",
        "url": "https://www.bis.gov.in/wp-content/uploads/2018/12/IS-459-Final-Product-Manual.pdf",
        "use": "Classifies asbestos-cement sheets by corrugation type; not an approval for this stock."
      }
    ],
    "imageReview": "No obvious embedded copy detected in the contact-sheet review; still inspect at full size before publication.",
    "jsonLdType": "Product",
    "imagePath": "./assets/ac_sheets.png"
  },
  {
    "id": "coloured-ac-sheets",
    "name": "Coloured AC Roofing Sheets",
    "category": "Roofing Sheets & Panels",
    "slug": "coloured-ac-roofing-sheets",
    "shortDescription": "Coloured corrugated roofing sheets shown in green and other finish variations. Confirm whether the substrate is asbestos-free fibre cement.",
    "description": "The supplied asset shows coloured corrugated cementitious-looking roof panels, with a green top sheet and additional colour layers. The original product label supplied in the conversation described these as colour asbestos sheets, while the archive filename uses AC MetaColor. These terms do not prove composition. Obtain a supplier declaration to distinguish asbestos cement from asbestos-free coloured fibre-cement roofing.",
    "material": {
      "value": "Coloured AC / fibre-cement type sheet; asbestos status unverified",
      "confidence": "unverified",
      "supplierConfirmationRequired": true
    },
    "formAndFinish": [
      "Corrugated wave-profile roofing panels",
      "Green and other coloured finishes shown",
      "Layered stack"
    ],
    "typicalUses": [
      "Roof covering and wall cladding are common applications for corrugated fibre-cement products, subject to confirmed composition and product approval"
    ],
    "bestApplications": [
      "Use only after confirming asbestos-free status, colour coating system, profile compatibility and structural design requirements."
    ],
    "selectionChecklist": [
      "Asbestos-free declaration / composition",
      "Available colours and colour-fastness data",
      "Sheet profile, cover width and thickness",
      "Sheet length and weight",
      "Fixings and support spacing",
      "Warranty and relevant product standard"
    ],
    "cautions": [
      "If asbestos-containing, do not publish as an ordinary new roofing product. WHO classifies every form of asbestos as carcinogenic.",
      "Do not list all image colours as available stock colours without confirmation."
    ],
    "publicationStatus": "HOLD: confirm material composition and permissible sale/use before listing.",
    "seo": {
      "title": "Coloured Corrugated Roofing Sheets | Fibre Cement",
      "metaDescription": "View coloured corrugated roofing sheet profiles and finishes. Confirm asbestos-free composition, colour range, dimensions and installation specifications.",
      "keywords": [
        "coloured roofing sheets",
        "green roofing sheets",
        "coloured fibre cement sheets",
        "corrugated roof sheets",
        "AC roofing sheets"
      ]
    },
    "imageAlt": "Coloured AC Roofing Sheets product collage on a clean white background",
    "imageDimensions": "1254x1254",
    "imageNotes": "Image shows multiple colours; treat colour options as illustrative until verified.",
    "sources": [
      {
        "title": "WHO — Asbestos",
        "url": "https://www.who.int/news-room/fact-sheets/detail/asbestos",
        "use": "Health hazard: WHO states all forms of asbestos are carcinogenic."
      },
      {
        "title": "UK HSE — Asbestos locations and materials",
        "url": "https://www.hse.gov.uk/asbestos/location-materials.htm",
        "use": "Identifies asbestos-cement roofing, cladding, pipes, gutters and other products."
      },
      {
        "title": "UK HSE — Work with asbestos cement",
        "url": "https://assets.publishing.service.gov.uk/media/6634986e4d8bb7378fb6c1ce/IQ8.10.H_Document_7_Health_and_Safety_Executive__Guidance_Note_EH_36_from_the_Health_and_Safety_Executive__Work_with_Asbestos_Cement__Environmental_Hygiene_36__October_1984_.pdf",
        "use": "Notes that coated/coloured AC products exist and appearance alone is not conclusive."
      }
    ],
    "imageReview": "No obvious embedded copy detected in the contact-sheet review; still inspect at full size before publication.",
    "jsonLdType": "Product",
    "imagePath": "./assets/ac_metacolor_sheets.png"
  },
  {
    "id": "acrylic-sheets",
    "name": "Acrylic Sheets",
    "category": "Plastic & Glazing Sheets",
    "slug": "acrylic-sheets",
    "shortDescription": "Flat, transparent acrylic panels with polished-looking edges and a clear, glass-like appearance.",
    "description": "Acrylic sheet is generally made from PMMA (polymethyl methacrylate). It offers high optical clarity and good outdoor weatherability and is commonly selected for displays, signage, protective covers and light-related applications. It is not the same material as polycarbonate: acrylic generally prioritises clarity and surface hardness, while polycarbonate is typically chosen where higher impact resistance is needed.",
    "material": {
      "value": "PMMA (polymethyl methacrylate / acrylic)",
      "confidence": "category-level verified; exact sheet grade unverified",
      "supplierConfirmationRequired": true
    },
    "formAndFinish": [
      "Flat solid transparent sheet",
      "Clear glass-like appearance",
      "Smooth surface and finished sheet edges"
    ],
    "typicalUses": [
      "Display panels and signage",
      "Protective covers and guards where suitable",
      "Light covers and diffusers",
      "Decorative glazing and fabricated panels"
    ],
    "bestApplications": [
      "Retail displays, signage, light covers and transparent panels where optical clarity is important and required impact rating suits the selected acrylic grade."
    ],
    "selectionChecklist": [
      "Cast or extruded grade",
      "Sheet thickness and dimensions",
      "Clear, opal or tinted colour",
      "Light transmission and haze",
      "UV/weathering grade",
      "Protective film and edge finish"
    ],
    "cautions": [
      "Do not substitute acrylic for polycarbonate where a design requires higher impact performance or certified safety glazing.",
      "Confirm UV, fire and impact ratings for the exact grade."
    ],
    "publicationStatus": "DRAFT: product category is clear; confirm grade, thickness and colours.",
    "seo": {
      "title": "Acrylic Sheets | Clear PMMA Plastic Sheets",
      "metaDescription": "Shop clear acrylic PMMA sheets for signage, displays, protective covers and light panels. Check sheet grade, thickness, colour and finish.",
      "keywords": [
        "acrylic sheets",
        "PMMA sheets",
        "clear acrylic sheet",
        "transparent plastic sheet",
        "acrylic display panels",
        "acrylic glazing"
      ]
    },
    "imageAlt": "Acrylic Sheets product collage on a clean white background",
    "imageDimensions": "2048x2048",
    "imageNotes": "Image shows clear solid sheets, not corrugated acrylic roofing.",
    "sources": [
      {
        "title": "Palram India — SUNGLAS Acrylic Corrugated Sheets",
        "url": "https://www.palram.com/in/product/sunglas-acrylic-corrugated-sheets/",
        "use": "Acrylic roofing sheet example and physical-property reference."
      },
      {
        "title": "Hitech Insulation India — Acrylic Sheet",
        "url": "https://www.hitechinsulation.in/products/acrylic-sheet",
        "use": "PMMA material identity and typical applications."
      },
      {
        "title": "Plastic Molded Concepts — Acrylic (PMMA)",
        "url": "https://pmcplastics.com/resources/engineered-resins/acrylic-pmma/",
        "use": "PMMA properties and applications."
      }
    ],
    "imageReview": "No obvious embedded copy detected in the contact-sheet review; still inspect at full size before publication.",
    "jsonLdType": "Product",
    "imagePath": "./assets/acrylic_sheets.png"
  },
  {
    "id": "aluminium-turbine-vents",
    "name": "Aluminium Turbine Vents",
    "category": "Ventilation & Roof Accessories",
    "slug": "aluminium-turbine-vents",
    "shortDescription": "Wind-driven turbine roof ventilators with a rotating aluminium vane assembly and cylindrical roof throat.",
    "description": "A turbine roof ventilator is a roof-mounted exhaust device. Wind acting on the curved vanes turns the rotor and helps draw warm, humid or stale air out of the building. Some designs also use buoyancy/thermal convection. The supplied image shows a polished metal turbine head and cylindrical base; the exact alloy, throat diameter, bearing design and airflow rating are not visible.",
    "material": {
      "value": "Aluminium turbine assembly as named; base and fasteners may use other metals",
      "confidence": "product label/category supplied; alloy unverified",
      "supplierConfirmationRequired": true
    },
    "formAndFinish": [
      "Rotating curved-vane turbine head",
      "Central hub / top cap",
      "Cylindrical roof throat and mounting base",
      "Reflective aluminium-like finish"
    ],
    "typicalUses": [
      "Passive roof exhaust ventilation",
      "Heat and humidity removal from suitable roof spaces"
    ],
    "bestApplications": [
      "Industrial sheds, workshops, warehouses and other spaces where a correctly sized passive roof exhaust system is appropriate."
    ],
    "selectionChecklist": [
      "Throat / neck diameter",
      "Rotor outside diameter and vane count",
      "Material grade and corrosion protection",
      "Bearing type and wind-load rating",
      "Airflow test data and design wind conditions",
      "Roof-base profile and flashing/sealing method"
    ],
    "cautions": [
      "Airflow depends on wind, temperature difference, installation height and building make-up air. Do not publish unverified CFM or zero-maintenance claims.",
      "Confirm that the turbine base matches roof profile and local wind conditions."
    ],
    "publicationStatus": "DRAFT: identify size, construction material and airflow data.",
    "seo": {
      "title": "Aluminium Turbine Roof Ventilators | Passive Roof Exhaust",
      "metaDescription": "Explore aluminium turbine roof ventilators for passive exhaust. Compare throat diameter, vane assembly, base fit and verified airflow ratings.",
      "keywords": [
        "aluminium turbine ventilator",
        "roof turbine ventilator",
        "wind driven roof ventilator",
        "industrial roof extractor",
        "passive roof ventilation"
      ]
    },
    "imageAlt": "Aluminium Turbine Vents product collage on a clean white background",
    "imageDimensions": "1254x1254",
    "imageNotes": "Generated collage is consistent with a turbine roof ventilator; verify actual vane count and dimensions.",
    "sources": [
      {
        "title": "Real Green Engineers — Wind-Driven Turbo Roof Ventilators",
        "url": "https://realgreen.in/",
        "use": "Wind-driven passive ventilation principle and industrial use cases."
      },
      {
        "title": "Shreeji Sales — Industrial Roof Extractor",
        "url": "https://shreejiwindventilator.com/roof-extractor",
        "use": "Example material and operating principle; specifications are not transferable to this product."
      }
    ],
    "imageReview": "No obvious embedded copy detected in the contact-sheet review; still inspect at full size before publication.",
    "jsonLdType": "Product",
    "imagePath": "./assets/aluminium_vents.png"
  },
  {
    "id": "crimping-sheets",
    "name": "Crimped Curved Roofing Sheets",
    "category": "Metal Roofing Sheets",
    "slug": "crimped-curved-roofing-sheets",
    "shortDescription": "Curved, crimp-formed roofing sheets for arched roof lines, canopies and curved cladding applications.",
    "description": "Crimped curved sheets are formed from profiled metal sheet by introducing controlled crimps so the panel can follow a curved roof radius. The supplied collage shows an arched red sheet with repeated transverse crimping and a metallic underside. Common substrates include pre-painted galvanized steel (PPGI), pre-painted galvalume (PPGL) or galvanized steel, but this specific stock's substrate and coating are unverified.",
    "material": {
      "value": "Commonly PPGI, PPGL or galvanized steel; exact substrate unverified",
      "confidence": "industry-category inference",
      "supplierConfirmationRequired": true
    },
    "formAndFinish": [
      "Curved / arched profile",
      "Repeated crimped ribs across sheet",
      "Red coated finish shown"
    ],
    "typicalUses": [
      "Curved roof sections",
      "Canopies and entrance covers",
      "Arched industrial sheds",
      "Curved architectural cladding"
    ],
    "bestApplications": [
      "Projects requiring a continuous curved sheet profile after required radius, sheet profile and support geometry are engineered."
    ],
    "selectionChecklist": [
      "Base metal: GI, GL, PPGI or PPGL",
      "Thickness / base-metal thickness",
      "Profile geometry and cover width",
      "Curve radius, roof span and rise",
      "Paint system and coating specification",
      "Maximum sheet length and fixing arrangement"
    ],
    "cautions": [
      "Do not assume all crimped sheets suit every radius or roof geometry; confirm radius with fabricator.",
      "Colour and gloss are illustrative, not verified stock finish."
    ],
    "publicationStatus": "DRAFT: confirm substrate, coating, thickness, radius and profile.",
    "seo": {
      "title": "Crimped Curved Roofing Sheets | Arched Metal Roof Panels",
      "metaDescription": "Crimped curved roofing sheets for arched roofs, canopies and curved cladding. Confirm metal substrate, coating, sheet profile and required radius.",
      "keywords": [
        "crimped curved sheets",
        "curved roofing sheets",
        "crimp curve roofing sheet",
        "arched metal roofing",
        "PPGI curved sheets",
        "PPGL curved sheets"
      ]
    },
    "imageAlt": "Crimped Curved Roofing Sheets product collage on a clean white background",
    "imageDimensions": "2048x2048",
    "imageNotes": "Generated image shows an arched red metal sheet; verify colour and actual crimp pattern.",
    "sources": [
      {
        "title": "Swami Swaroop Enterprises — PPGI & PPGL Crimped Curved Sheets",
        "url": "https://ssroofingsolutions.com/product/flashings/",
        "use": "Crimp-curved sheet material variants and applications."
      },
      {
        "title": "Gupta Iron & Steel — Crimp Curve Sheet",
        "url": "https://www.guptaironsteel.in/india/crimp-curve-sheet.htm",
        "use": "Curvature radius, profiles and typical roof applications."
      }
    ],
    "imageReview": "No obvious embedded copy detected in the contact-sheet review; still inspect at full size before publication.",
    "jsonLdType": "Product",
    "imagePath": "./assets/crimping_sheets.png"
  },
  {
    "id": "frp-sheets",
    "name": "FRP Roofing Sheets",
    "category": "Plastic & Composite Roofing",
    "slug": "frp-roofing-sheets",
    "shortDescription": "Corrugated translucent FRP panels for daylighting and roofing, with a visible glass-fibre composite texture.",
    "description": "FRP (fibre-reinforced plastic) roofing sheets are composite panels made from reinforcing glass fibres in a polymer resin matrix. They are commonly supplied in corrugated or trapezoidal profiles that can be matched to metal roof sheets. Translucent variants can be used as daylighting panels in industrial roofs, canopies and agricultural structures. Resin type, UV gel coat, fire rating and profile must be confirmed for the exact grade.",
    "material": {
      "value": "Glass-fibre reinforced polymer; resin system unverified (polyester is common)",
      "confidence": "category-level verified",
      "supplierConfirmationRequired": true
    },
    "formAndFinish": [
      "Corrugated / profiled sheet",
      "Translucent white, blue or green tints shown",
      "Visible fibre pattern / surface texture"
    ],
    "typicalUses": [
      "Industrial roofing daylight panels",
      "Roof skylight strips",
      "Canopies and shelters",
      "Greenhouse or agricultural daylight panels"
    ],
    "bestApplications": [
      "Daylighting strips within a compatible profiled roof where sheet profile, UV protection, fire classification and support spacing are verified."
    ],
    "selectionChecklist": [
      "Resin type and glass-fibre construction",
      "Profile dimensions and matching roof profile",
      "Thickness and sheet length",
      "Light transmission and haze",
      "UV gel coat / weathering grade",
      "Fire classification and test report"
    ],
    "cautions": [
      "Do not claim a fire rating, guaranteed service life or thermal performance without the product test certificate.",
      "Match FRP profile to adjoining metal roof to avoid leakage."
    ],
    "publicationStatus": "DRAFT: confirm resin, light transmission, UV and fire ratings.",
    "seo": {
      "title": "FRP Roofing Sheets | Translucent Fibreglass Roof Panels",
      "metaDescription": "Browse corrugated FRP roofing sheets for industrial daylighting, skylights and canopies. Check profile match, translucency, UV grade and fire rating.",
      "keywords": [
        "FRP roofing sheets",
        "fibreglass roofing sheets",
        "translucent FRP sheets",
        "FRP skylight sheets",
        "fibre reinforced plastic roofing",
        "industrial daylight panels"
      ]
    },
    "imageAlt": "FRP Roofing Sheets product collage on a clean white background",
    "imageDimensions": "1254x1254",
    "imageNotes": "Image shows translucent corrugated panels in several colours; verify resin type and actual stocked colours.",
    "sources": [
      {
        "title": "EPP Composites — Roofing Sheets",
        "url": "https://www.eppcomposites.com/building-and-construction-products-roofing-sheets.html",
        "use": "FRP roofing sheet construction, translucency and typical applications."
      },
      {
        "title": "Rawji Exports — FRP Roofing Sheets",
        "url": "https://rawji.com/frproofingsheets",
        "use": "Examples of FRP profile-matched roofing and skylight formats."
      }
    ],
    "imageReview": "No obvious embedded copy detected in the contact-sheet review; still inspect at full size before publication.",
    "jsonLdType": "Product",
    "imagePath": "./assets/frp_sheets.png"
  },
  {
    "id": "gc-sheets",
    "name": "GC Sheets (Galvanized Corrugated Sheets)",
    "category": "Metal Roofing Sheets",
    "slug": "gc-sheets-galvanized-corrugated-sheets",
    "shortDescription": "Silver galvanized steel sheets with a corrugated wave profile for roofing and cladding.",
    "description": "GC sheets are galvanized corrugated steel sheets. A zinc coating is applied to steel to help protect it from atmospheric corrosion; the corrugated profile provides rigidity for roofing and cladding. In India, IS 277 covers galvanized steel strips and sheets in plain and corrugated forms. The pictured spangle, profile and finish are representative only.",
    "material": {
      "value": "Zinc-coated galvanized steel",
      "confidence": "category-level verified",
      "supplierConfirmationRequired": true
    },
    "formAndFinish": [
      "Corrugated sinusoidal / wave profile",
      "Silver metallic finish",
      "Stacked sheet construction"
    ],
    "typicalUses": [
      "Roofing for industrial sheds and buildings",
      "External wall cladding",
      "Agricultural and utility sheds"
    ],
    "bestApplications": [
      "Roof and wall cladding where selected zinc coating, steel grade, thickness and corrugation meet the environment and structural design."
    ],
    "selectionChecklist": [
      "Base-metal thickness (BMT)",
      "Zinc coating mass / designation",
      "Steel grade and mechanical properties",
      "Effective cover width and corrugation profile",
      "Sheet length and finish",
      "Applicable IS 277 certificate"
    ],
    "cautions": [
      "Do not infer zinc coating mass, thickness or steel grade from surface pattern.",
      "Use compatible fasteners and washers; specify cut-edge and coastal exposure requirements."
    ],
    "publicationStatus": "DRAFT: obtain mill certificate and exact profile/coating details.",
    "seo": {
      "title": "GC Sheets | Galvanized Corrugated Roofing Sheets",
      "metaDescription": "Shop galvanized corrugated GC sheets for roofing and wall cladding. Confirm steel grade, base-metal thickness, zinc coating and effective cover width.",
      "keywords": [
        "GC sheets",
        "galvanized corrugated sheets",
        "GI corrugated roofing sheets",
        "corrugated steel roofing",
        "galvanized roof sheets",
        "industrial shed roofing"
      ]
    },
    "imageAlt": "GC Sheets (Galvanized Corrugated Sheets) product collage on a clean white background",
    "imageDimensions": "1254x1254",
    "imageNotes": "Generated image shows a generic silver galvanized corrugated profile; exact corrugation and spangle may differ.",
    "sources": [
      {
        "title": "BIS — IS 277:2018 summary",
        "url": "https://services.bis.gov.in/tmp/tbl5_2024-11-10_1147.pdf",
        "use": "Indian standard scope for galvanized steel sheets in plain and corrugated forms."
      },
      {
        "title": "JSW Steel — Galvanised Steel",
        "url": "https://www.jswsteel.in/product/galvanised-steel",
        "use": "GI sheet manufacture, zinc coating and applications."
      },
      {
        "title": "Steelmetal — GP/GC Sheets reference",
        "url": "https://www.steelmetal.co.in/pdf/GP%20-%20GC%20Sheets.pdf",
        "use": "Distinguishes GP plain sheet and GC corrugated sheet applications."
      }
    ],
    "imageReview": "No obvious embedded copy detected in the contact-sheet review; still inspect at full size before publication.",
    "jsonLdType": "Product",
    "imagePath": "./assets/gc_sheets.png"
  },
  {
    "id": "gi-decking-sheets",
    "name": "GI Decking Sheets",
    "category": "Structural Decking",
    "slug": "gi-decking-sheets",
    "shortDescription": "Deep-rib galvanized steel deck panels with a trapezoidal profile for composite floor and structural roof deck systems.",
    "description": "GI decking sheets are profiled galvanized steel deck panels with deep ribs. In composite floor construction, the profiled sheet acts as permanent formwork and may contribute to composite slab action when designed with the specified concrete, reinforcement and shear-bond details. Some profiles are also designed for roof-deck use. This product should not be described as ordinary corrugated roofing sheet.",
    "material": {
      "value": "Galvanized structural steel sheet",
      "confidence": "category-level verified",
      "supplierConfirmationRequired": true
    },
    "formAndFinish": [
      "Deep trapezoidal / ribbed profile",
      "Galvanized metallic finish",
      "Wide pans and raised structural ribs"
    ],
    "typicalUses": [
      "Composite floor slab decking",
      "Mezzanine floors",
      "Multi-storey steel-frame construction",
      "Structural roof decking where designed"
    ],
    "bestApplications": [
      "Composite floor or roof deck designs using a profile selected by span, loading, concrete thickness and manufacturer load tables."
    ],
    "selectionChecklist": [
      "Profile height, pitch and cover width",
      "Base-metal thickness",
      "Steel grade and yield strength",
      "Zinc coating mass",
      "Embossing / shear-bond design",
      "Span and load tables",
      "Decking design and installation manual"
    ],
    "cautions": [
      "Deck capacity is design-dependent. Do not claim a safe span or load capacity without load tables and project design.",
      "Confirm whether supplied profile is intended for composite flooring, roof decking or both."
    ],
    "publicationStatus": "DRAFT: require profile drawing, grade, BMT, coating and load tables.",
    "seo": {
      "title": "GI Decking Sheets | Galvanized Steel Floor Deck Panels",
      "metaDescription": "GI decking sheets with deep trapezoidal ribs for composite floors, mezzanines and structural roof decks. Review profile, steel grade and load tables.",
      "keywords": [
        "GI decking sheets",
        "galvanized decking sheets",
        "steel deck sheet",
        "composite floor decking",
        "floor deck panels",
        "trapezoidal decking sheet"
      ]
    },
    "imageAlt": "GI Decking Sheets product collage on a clean white background",
    "imageDimensions": "1254x1254",
    "imageNotes": "Generated image shows a deep trapezoidal profile; profile geometry and depth must be confirmed.",
    "sources": [
      {
        "title": "Decking Sheets — Metal Decking Sheets",
        "url": "https://www.deckingsheets.com/decking-sheets.html",
        "use": "Composite floor decking profile and application guidance."
      },
      {
        "title": "Alfa PEB — GI Decking Sheet",
        "url": "https://www.sandwichpanels.in/decking-sheet.html",
        "use": "Example profile heights, BMT and composite slab applications; values are not assumed for this product."
      }
    ],
    "imageReview": "No obvious embedded copy detected in the contact-sheet review; still inspect at full size before publication.",
    "jsonLdType": "Product",
    "imagePath": "./assets/gi_decking_sheets.png"
  },
  {
    "id": "gp-sheets",
    "name": "GP Sheets (Galvanized Plain Sheets)",
    "category": "Metal Sheets",
    "slug": "gp-sheets-galvanized-plain-sheets",
    "shortDescription": "Flat, plain galvanized steel sheets with a zinc-spangle surface and clean cut edges.",
    "description": "GP sheets are galvanized plain steel sheets: flat steel sheet with a zinc coating. Unlike GC sheets, the supplied product is flat rather than corrugated. Common uses include HVAC ducting, panels, door frames, shutters, enclosures and general fabrication. The exact formability, coating mass, thickness and grade depend on the mill specification.",
    "material": {
      "value": "Zinc-coated galvanized steel",
      "confidence": "category-level verified",
      "supplierConfirmationRequired": true
    },
    "formAndFinish": [
      "Flat plain sheet",
      "Silver zinc-spangle finish",
      "Stacked sheet pack with visible cut edges"
    ],
    "typicalUses": [
      "HVAC ducts and air-conditioning enclosures",
      "Panels, door frames and shutters",
      "Cooler bodies, bins and general fabrication",
      "Electrical enclosures and cable trays"
    ],
    "bestApplications": [
      "Flat-sheet fabrication and forming where the zinc coating, formability and grade are appropriate."
    ],
    "selectionChecklist": [
      "Base-metal thickness",
      "Zinc coating mass",
      "Steel grade / forming quality",
      "Sheet width and length",
      "Spangle type and surface treatment",
      "IS 277 or other applicable certificate"
    ],
    "cautions": [
      "Do not interchange GP and GC descriptions: GP is plain/flat; GC is corrugated.",
      "Confirm paint adhesion, welding restrictions and coating treatment for intended fabrication."
    ],
    "publicationStatus": "DRAFT: confirm BMT, coating mass, grade and sheet size.",
    "seo": {
      "title": "GP Sheets | Galvanized Plain Steel Sheets",
      "metaDescription": "Explore flat GP galvanized steel sheets for HVAC ducting, enclosures, panels and fabrication. Check zinc coating, thickness, grade and sheet size.",
      "keywords": [
        "GP sheets",
        "galvanized plain sheets",
        "GI plain sheets",
        "galvanized steel sheet",
        "HVAC duct sheet",
        "plain galvanized steel"
      ]
    },
    "imageAlt": "GP Sheets (Galvanized Plain Sheets) product collage on a clean white background",
    "imageDimensions": "1254x1254",
    "imageNotes": "Generated image is a plain galvanized sheet stack with no visible product marking.",
    "sources": [
      {
        "title": "BIS — IS 277:2018 summary",
        "url": "https://services.bis.gov.in/tmp/tbl5_2024-11-10_1147.pdf",
        "use": "Indian standard scope for galvanized steel sheets in plain and corrugated forms."
      },
      {
        "title": "JSW Steel — Galvanised Steel",
        "url": "https://www.jswsteel.in/product/galvanised-steel",
        "use": "GI sheet manufacture, zinc coating and applications."
      },
      {
        "title": "Steelmetal — GP/GC Sheets reference",
        "url": "https://www.steelmetal.co.in/pdf/GP%20-%20GC%20Sheets.pdf",
        "use": "GP application examples and distinction from GC."
      }
    ],
    "imageReview": "No obvious embedded copy detected in the contact-sheet review; still inspect at full size before publication.",
    "jsonLdType": "Product",
    "imagePath": "./assets/gp_sheets.png"
  },
  {
    "id": "hilux-calcium-silicate-board",
    "name": "Ramco Hilux Calcium Silicate Boards",
    "category": "Boards & Building Materials",
    "slug": "ramco-hilux-calcium-silicate-boards",
    "shortDescription": "Flat fibre-reinforced calcium silicate boards with a pale mineral surface and square-cut edges.",
    "description": "Ramco Hilux calcium silicate board is made from calcareous and siliceous materials reinforced with fibres, then cured under high-pressure steam and temperature. The manufacturer describes the board range for dry walls, ceilings and interior applications; its product range also covers furniture and partition uses. The supplied image shows plain, pale boards stacked with clean square edges.",
    "material": {
      "value": "Fibre-reinforced calcium silicate board",
      "confidence": "manufacturer-verified for Ramco Hilux product family",
      "supplierConfirmationRequired": true
    },
    "formAndFinish": [
      "Flat rigid board",
      "Pale grey/off-white matte mineral surface",
      "Square-cut board edges"
    ],
    "typicalUses": [
      "Drywall and partition systems",
      "Ceilings and bulkheads",
      "Furniture and storage units",
      "Interior wall and ceiling substrates"
    ],
    "bestApplications": [
      "Interior dry-wall and ceiling systems where specified thickness, framing, fasteners and finishing match manufacturer guidance."
    ],
    "selectionChecklist": [
      "Board thickness",
      "Sheet size and density",
      "Edge type",
      "Intended interior or exterior exposure",
      "Framing and fastener system",
      "Paint, laminate or tile compatibility",
      "Current technical datasheet and certificate"
    ],
    "cautions": [
      "Avoid implying load-bearing use unless the manufacturer and structural design approve it.",
      "Fire, moisture, termite and acoustic claims must be taken from the current datasheet for the exact board grade."
    ],
    "publicationStatus": "DRAFT: manufacturer identity is clear; confirm available size/thickness and application grade.",
    "seo": {
      "title": "Ramco Hilux Calcium Silicate Boards | Fibre-Reinforced Boards",
      "metaDescription": "Ramco Hilux calcium silicate boards for drywalls, ceilings, partitions and interior fit-outs. Compare board thickness, size and installation requirements.",
      "keywords": [
        "Ramco Hilux board",
        "calcium silicate board",
        "Hilux boards",
        "fibre reinforced calcium silicate board",
        "drywall board",
        "ceiling board"
      ]
    },
    "imageAlt": "Ramco Hilux Calcium Silicate Boards product collage on a clean white background",
    "imageDimensions": "1254x1254",
    "imageNotes": "Generic board-stack mockup; it does not establish Ramco branding or exact board size.",
    "sources": [
      {
        "title": "Ramco Hilux — Boards",
        "url": "https://ramcohilux.com/Boards.html",
        "use": "Official calcium-silicate board composition, curing process, dimensions and thickness."
      },
      {
        "title": "Ramco Hilux — Products",
        "url": "https://www.ramcohilux.com/Products.html",
        "use": "Official product-family overview."
      },
      {
        "title": "Ramco Hilux — Furniture",
        "url": "https://ramcohilux.com/Furniture.html",
        "use": "Manufacturer-described furniture applications."
      }
    ],
    "imageReview": "No obvious embedded copy detected in the contact-sheet review; still inspect at full size before publication.",
    "jsonLdType": "Product",
    "imagePath": "./assets/hilux_calcium_cilicate_board.png"
  },
  {
    "id": "metacolor-accessories",
    "name": "Metacolor Accessories",
    "category": "Roofing Accessories",
    "slug": "metacolor-accessories",
    "shortDescription": "Metallic cylindrical components with square flange plates, shown in several sizes; exact accessory function needs supplier identification.",
    "description": "The supplied image asset appears to show reflective cylindrical metal sleeves or tubular components with repeated square flange plates. The product label says “Metacolor Accessories”, but the component's exact name, purpose, material and installation orientation cannot be established reliably from the photograph. Keep this as a draft catalogue entry until the supplier identifies the part.",
    "material": {
      "value": "Metallic / galvanized-looking metal in image; exact metal and coating unknown",
      "confidence": "visual inference only",
      "supplierConfirmationRequired": true
    },
    "formAndFinish": [
      "Cylindrical tubular body",
      "Square plates or collars attached along body",
      "Reflective silver metallic finish",
      "Multiple apparent sizes"
    ],
    "typicalUses": [
      "Not assigned: exact use cannot be verified from image"
    ],
    "bestApplications": [
      "Add only after supplier confirms whether these are roof sleeves, flashing collars, supports, duct parts or another accessory."
    ],
    "selectionChecklist": [
      "Exact trade / component name",
      "System it belongs to and compatible roof profile",
      "Metal grade and coating",
      "Tube diameter and length",
      "Plate dimensions, spacing and thickness",
      "Joint, fixing and sealing method"
    ],
    "cautions": [
      "Do not use the generated image to infer a safety-critical installation function. Confirm exact assembly and fitment before writing application claims."
    ],
    "publicationStatus": "HOLD: supplier must identify the component and intended application.",
    "seo": {
      "title": "Metacolor Roofing Accessories | Metal Components",
      "metaDescription": "View Metacolor accessory components. Confirm the exact component type, metal grade, dimensions and compatible roofing system before specification.",
      "keywords": [
        "Metacolor accessories",
        "roofing accessories",
        "metal roofing components",
        "roof flashing accessories",
        "metal sleeves",
        "roof fittings"
      ]
    },
    "imageAlt": "Metacolor Accessories product collage on a clean white background",
    "imageDimensions": "2048x2048",
    "imageNotes": "Generated image shows flange-like plates on cylindrical bodies; trade identity and function remain unknown.",
    "sources": [],
    "imageReview": "No obvious embedded copy detected in the contact-sheet review; still inspect at full size before publication.",
    "jsonLdType": "Product",
    "imagePath": "./assets/metacolor_accessories.png"
  },
  {
    "id": "meta-color-sheets",
    "name": "Meta Color Sheets",
    "category": "Colour-Coated Metal Roofing",
    "slug": "meta-color-sheets",
    "shortDescription": "Pre-painted profiled steel roofing sheets shown in blue, green and terracotta finishes.",
    "description": "Meta Color is being treated as the user's product label for colour-coated profiled roofing sheets. In the wider market, colour-coated steel sheets commonly use a galvanized (PPGI) or galvalume (PPGL) steel substrate with a paint coating system. The supplied image shows trapezoidal profiled sheets in blue, green and red/terracotta; the actual substrate and coating chemistry must be confirmed for this stock.",
    "material": {
      "value": "Likely pre-painted galvanized steel (PPGI) or pre-painted galvalume steel (PPGL); unverified",
      "confidence": "category-level inference",
      "supplierConfirmationRequired": true
    },
    "formAndFinish": [
      "Profiled / trapezoidal metal roofing sheets",
      "Pre-painted colour finish",
      "Blue, green and terracotta shown"
    ],
    "typicalUses": [
      "Roofing and wall cladding",
      "Industrial and commercial sheds",
      "Building facades and partitions",
      "Sandwich-panel facings where designed"
    ],
    "bestApplications": [
      "Exterior roofing and cladding where substrate, coating system, colour durability and profile are specified for the environment."
    ],
    "selectionChecklist": [
      "PPGI or PPGL substrate",
      "Base-metal thickness",
      "Metallic coating mass (zinc or aluminium-zinc)",
      "Top/back paint system and coating thickness",
      "Profile geometry and effective cover width",
      "Colour code and gloss",
      "Warranty and test documents"
    ],
    "cautions": [
      "Do not assume displayed colours, paint system, coating mass or weathering warranty are supplied on every sheet.",
      "Coastal or industrial environments may require a particular substrate and coating specification."
    ],
    "publicationStatus": "DRAFT: confirm whether PPGI or PPGL and obtain coating details.",
    "seo": {
      "title": "Meta Color Roofing Sheets | Colour-Coated Steel Roof Panels",
      "metaDescription": "Explore Meta Color profiled roofing sheets in coloured finishes. Confirm PPGI or PPGL substrate, coating system, profile, thickness and colour options.",
      "keywords": [
        "Meta Color sheets",
        "colour coated roofing sheets",
        "pre painted steel sheets",
        "PPGI roofing sheets",
        "PPGL roofing sheets",
        "colour coated metal roofing"
      ]
    },
    "imageAlt": "Meta Color Sheets product collage on a clean white background",
    "imageDimensions": "1254x1254",
    "imageNotes": "Generated image includes multiple colour finishes; stock shades and profile must be confirmed.",
    "sources": [
      {
        "title": "JSW Steel — Colour-Coated Sheet",
        "url": "https://www.jswsteel.in/product/colour-coated-sheet",
        "use": "PPGI / PPGL substrates and roofing/cladding applications."
      },
      {
        "title": "JSW Steel — Colour-Coated Products",
        "url": "https://group.jsw.in/steel/colour-coated-products",
        "use": "Typical pre-painted galvanized and galvalume product finishes."
      },
      {
        "title": "Tata BlueScope — COLORBOND XRW Technical Data Sheet",
        "url": "https://tatasteelcolors.com/wp-content/uploads/2025/05/Colorbond-XRW_Datasheet_27052025.pdf",
        "use": "Example of pre-painted steel roofing/walling specification structure."
      }
    ],
    "imageReview": "No obvious embedded copy detected in the contact-sheet review; still inspect at full size before publication.",
    "jsonLdType": "Product",
    "imagePath": "./assets/meta_color_sheets.png"
  },
  {
    "id": "ms-angle",
    "name": "MS Angle (Mild Steel Angle)",
    "category": "Structural Steel",
    "slug": "ms-angle",
    "shortDescription": "L-shaped mild-steel angle sections with two perpendicular legs; the supplied reference shows a 5 mm thickness marking.",
    "description": "MS angle is a hot-rolled or formed L-shaped steel section available in equal-leg and unequal-leg configurations. It is used in structural framing, bracing, trusses, supports and general fabrication. The user-supplied reference visibly included a 5 mm marking; confirm whether this is the actual stock thickness and obtain leg dimensions and grade before listing.",
    "material": {
      "value": "Mild steel; exact grade and manufacturing route unknown",
      "confidence": "product label supplied",
      "supplierConfirmationRequired": true
    },
    "formAndFinish": [
      "L-shaped / 90-degree angle section",
      "Equal-leg or unequal-leg geometry to be confirmed",
      "Raw dark grey mill finish"
    ],
    "typicalUses": [
      "Bracing and support members",
      "Frames and trusses",
      "Fabricated brackets and racks",
      "General structural and industrial fabrication"
    ],
    "bestApplications": [
      "Fabrication and structural support where section size, grade and design loads have been checked by the project engineer."
    ],
    "selectionChecklist": [
      "Leg A × leg B dimensions",
      "Thickness (5 mm shown in reference; confirm)",
      "Steel grade / applicable standard",
      "Length and straightness",
      "Equal or unequal leg",
      "Mill test certificate and surface finish"
    ],
    "cautions": [
      "Do not infer load capacity from the 5 mm image marking alone. Capacity depends on leg dimensions, grade, restraint, length and connection design.",
      "Image contains baked-in 5 mm and product-label text; verify and remove if inaccurate."
    ],
    "publicationStatus": "DRAFT: confirm leg dimensions, grade, length and 5 mm marking.",
    "seo": {
      "title": "MS Angle | Mild Steel L-Angle Sections",
      "metaDescription": "Browse mild steel angle sections for frames, bracing, trusses and fabrication. Confirm equal or unequal legs, thickness, steel grade and length.",
      "keywords": [
        "MS angle",
        "mild steel angle",
        "L angle steel",
        "MS L section",
        "equal angle steel",
        "unequal angle steel",
        "steel angle section"
      ]
    },
    "imageAlt": "MS Angle (Mild Steel Angle) product collage on a clean white background",
    "imageDimensions": "1254x1254",
    "imageNotes": "Image includes baked-in “5 mm” and a product label; 5 mm is reference-derived and still needs confirmation.",
    "sources": [
      {
        "title": "Jindal Steel — Angles & Channels",
        "url": "https://www.jindalsteel.in/our-portfolio/angles-channels",
        "use": "Equal and unequal steel angle sections and IS 808 standard."
      },
      {
        "title": "Teshi Group — Steel Angles",
        "url": "https://teshigroup.com/products/structural-steel/steel-angles/",
        "use": "Angle designation, materials and bracing/truss applications."
      },
      {
        "title": "Bharat Skills — Specification of steel angles",
        "url": "https://bharatskills.gov.in/pdf/E_Books/CTS/61/English/TT/Painter%20%28General%29%20-%201st%20Year%20-%20TT%20%28NSQF%202022%29.pdf",
        "use": "Equal/unequal angle designation by leg dimensions and thickness."
      }
    ],
    "imageReview": "Contains baked-in product label and '5 mm' thickness callout; confirm the thickness before use.",
    "jsonLdType": "Product",
    "imagePath": "./assets/ms_angle.png"
  },
  {
    "id": "ms-round-pipes",
    "name": "MS Round Pipes",
    "category": "Steel Pipes & Tubes",
    "slug": "ms-round-pipes",
    "shortDescription": "Hollow circular mild-steel tubes with visible open ends and a dark raw-steel finish.",
    "description": "MS round pipes are hollow circular steel sections. They are commonly supplied as ERW/HFW welded tubes, although seamless variants may exist. Typical uses include structural frames, handrails, fencing, scaffolding and general fabrication. The actual manufacturing route, dimensions, wall thickness and grade must be confirmed; the image does not establish a pressure-pipe rating.",
    "material": {
      "value": "Mild steel; ERW/HFW is common but unverified for this stock",
      "confidence": "product label/category supplied",
      "supplierConfirmationRequired": true
    },
    "formAndFinish": [
      "Circular hollow section",
      "Open plain-cut ends",
      "Dark grey/raw steel appearance"
    ],
    "typicalUses": [
      "Fabricated frames and supports",
      "Handrails and fencing",
      "Scaffolding and general engineering",
      "Structural hollow-section assemblies where specified"
    ],
    "bestApplications": [
      "General fabrication or structural tube work after confirming size, grade, wall thickness and applicable standard."
    ],
    "selectionChecklist": [
      "Outside diameter / nominal bore",
      "Wall thickness and weight per metre",
      "ERW, HFW or seamless construction",
      "Grade and standard",
      "Length and end finish",
      "Mill test certificate"
    ],
    "cautions": [
      "Do not advertise as pressure, potable-water, gas or fire-fighting pipe unless certified for that service and standard.",
      "Structural capacity depends on section size, grade, wall thickness, length and connections."
    ],
    "publicationStatus": "DRAFT: confirm dimensions, wall thickness, grade and manufacturing standard.",
    "seo": {
      "title": "MS Round Pipes | Mild Steel Circular Hollow Sections",
      "metaDescription": "Explore MS round pipes for frames, handrails, fencing and fabrication. Confirm outside diameter, wall thickness, steel grade and applicable standard.",
      "keywords": [
        "MS round pipes",
        "mild steel round pipe",
        "MS circular pipe",
        "steel hollow section",
        "ERW round pipe",
        "mild steel tube"
      ]
    },
    "imageAlt": "MS Round Pipes product collage on a clean white background",
    "imageDimensions": "1254x1254",
    "imageNotes": "Generated collage has baked-in MS Round Pipe label text in one detail panel.",
    "sources": [
      {
        "title": "Jindal India — ERW Round Pipes",
        "url": "https://jindalindia.com/erw-round-pipes.php",
        "use": "ERW/HFW process, finishes and engineering applications."
      },
      {
        "title": "Vasu Steel — MS Round Pipe",
        "url": "https://vasusteel.com/products/ms-round-pipe",
        "use": "Example dimensions, grade and standard categories."
      }
    ],
    "imageReview": "Contains baked-in product label text in a detail panel.",
    "jsonLdType": "Product",
    "imagePath": "./assets/ms_round_pipes.png"
  },
  {
    "id": "polycarbonate-compact-sheets",
    "name": "Polycarbonate Compact Sheets",
    "category": "Polycarbonate Sheets",
    "slug": "polycarbonate-compact-sheets",
    "shortDescription": "Flat, transparent polycarbonate panels with smooth surfaces and visible sheet thickness.",
    "description": "Polycarbonate compact sheets are solid (non-hollow) panels made from polycarbonate resin. Clear grades combine light transmission with high impact resistance and are commonly used for skylights, canopies, glazing, partitions and protective screens. UV protection, colour, thickness and fire classification vary by grade and must be confirmed from the selected manufacturer's datasheet.",
    "material": {
      "value": "Solid polycarbonate (PC)",
      "confidence": "category-level verified",
      "supplierConfirmationRequired": true
    },
    "formAndFinish": [
      "Flat solid transparent sheets",
      "Smooth glossy surface",
      "Clear sheets with blue-grey edge reflections"
    ],
    "typicalUses": [
      "Skylights and roof lights",
      "Canopies and walkway covers",
      "Glazing and partitions",
      "Protective screens and safety glazing systems"
    ],
    "bestApplications": [
      "Transparent solid glazing where impact resistance and light transmission are required and the selected grade is correctly supported and fixed."
    ],
    "selectionChecklist": [
      "Solid compact or hollow multiwall construction",
      "Thickness and sheet size",
      "Clear, opal, bronze or tinted colour",
      "UV-protected side(s)",
      "Light transmission and haze",
      "Fire classification and thermal movement allowance"
    ],
    "cautions": [
      "Do not imply every grade is UV-protected or fire-retardant; verify exact datasheet.",
      "Acrylic and polycarbonate are different plastics; do not merge specifications."
    ],
    "publicationStatus": "DRAFT: confirm thickness, colour, UV layer and certifications.",
    "seo": {
      "title": "Polycarbonate Compact Sheets | Solid Clear PC Panels",
      "metaDescription": "Shop solid polycarbonate compact sheets for skylights, canopies, glazing and partitions. Check thickness, UV protection, light transmission and colour.",
      "keywords": [
        "polycarbonate compact sheets",
        "solid polycarbonate sheet",
        "clear polycarbonate sheet",
        "polycarbonate glazing",
        "polycarbonate skylight sheet",
        "PC solid sheet"
      ]
    },
    "imageAlt": "Polycarbonate Compact Sheets product collage on a clean white background",
    "imageDimensions": "1254x1254",
    "imageNotes": "Image includes protective-film wording and illustrative feature claims; remove embedded copy/icons and validate any claims.",
    "sources": [
      {
        "title": "V-LITE — Polycarbonate Solid Compact Sheet",
        "url": "https://vlite.co.in/product/polycarbonate-solid-compact-sheet/",
        "use": "Solid-sheet definition, example dimensions and applications."
      },
      {
        "title": "MG Polyplast — PC Lite Compact Sheet data sheet",
        "url": "https://www.mgpolyplast.com/certificate/technical%20datasheets/MG%20Polyplast%20Solid_3%20MM%20Data%20Sheet.pdf",
        "use": "Example compact-sheet physical data; values are not assigned to this product."
      },
      {
        "title": "Macrolux — Solid Polycarbonate",
        "url": "https://www.macroluxusa.com/macrolux-solid",
        "use": "Compact sheet applications such as glazing, canopies and skylights."
      }
    ],
    "imageReview": "Contains printed protective-film wording and illustrative feature icons/claims in the collage; review before publishing.",
    "jsonLdType": "Product",
    "imagePath": "./assets/polycarbonate_compact_sheets.png"
  },
  {
    "id": "polycarbonate-embossed-colour-sheets",
    "name": "Embossed Colour Polycarbonate Sheets",
    "category": "Polycarbonate Sheets",
    "slug": "embossed-colour-polycarbonate-sheets",
    "shortDescription": "Embossed coloured polycarbonate sheet material shown in roll form, with translucent coloured and textured surfaces.",
    "description": "Embossed polycarbonate sheet has a textured surface that can diffuse transmitted light and reduce direct see-through visibility. Manufacturer ranges include clear, opal and tinted finishes and different embossing patterns. The supplied reference shows material packaged as upright rolls with brown, cream, yellow, blue, red and dark-grey visible ends. Confirm whether the sale unit is a roll, sheet or cut-to-size panel and whether “plain” means an unprinted base colour.",
    "material": {
      "value": "Polycarbonate (PC); embossed surface",
      "confidence": "category-level references and user product label",
      "supplierConfirmationRequired": true
    },
    "formAndFinish": [
      "Textured / embossed surface",
      "Coloured translucent or opaque variants to verify",
      "Reference shows roll / coil-style packaging"
    ],
    "typicalUses": [
      "Light-diffusing glazing",
      "Roof lights and canopies",
      "Partitions and privacy panels",
      "Architectural or decorative glazing"
    ],
    "bestApplications": [
      "Applications where a textured PC surface diffuses daylight or softens visibility; roofing requires a compatible profile and suitable grade."
    ],
    "selectionChecklist": [
      "Embossing pattern and textured side",
      "Roll or sheet supply format",
      "Thickness, width and roll length",
      "Colour and light transmission",
      "UV protection",
      "Opaque or translucent grade",
      "Protective film and fire classification"
    ],
    "cautions": [
      "Do not list all colours shown as confirmed stock colours.",
      "Asset contains baked-in title text and performance icons; remove before e-commerce use and verify all claims."
    ],
    "publicationStatus": "DRAFT: confirm roll vs sheet format, colours, thickness and UV grade.",
    "seo": {
      "title": "Embossed Colour Polycarbonate Sheets | Textured PC Panels",
      "metaDescription": "Explore embossed coloured polycarbonate sheets for light-diffusing glazing, roof lights and partitions. Confirm roll format, thickness, texture and colour.",
      "keywords": [
        "embossed polycarbonate sheet",
        "coloured polycarbonate sheet",
        "textured PC sheet",
        "polycarbonate roll",
        "light diffusing sheet",
        "embossed roofing sheet"
      ]
    },
    "imageAlt": "Embossed Colour Polycarbonate Sheets product collage on a clean white background",
    "imageDimensions": "1254x1254",
    "imageNotes": "Asset includes baked-in product title and performance icons; colours are illustrative and must be confirmed.",
    "sources": [
      {
        "title": "Domer — Durapoll EM Embossed Polycarbonate Sheets",
        "url": "https://www.domer.co/durapoll-em/",
        "use": "Embossing, light diffusion, privacy, colours and applications."
      },
      {
        "title": "V-LITE — Polycarbonate Embossed Sheet",
        "url": "https://vlite.co.in/product/polycarbonate-embossed-sheet/",
        "use": "Embossed texture, colours and sheet applications."
      }
    ],
    "imageReview": "Contains baked-in product title and performance icons/claims; review before publishing.",
    "jsonLdType": "Product",
    "imagePath": "./assets/polycarbonate_embossed_color_plain_sheet Collection.png"
  },
  {
    "id": "polycarbonate-profile-sheets",
    "name": "Polycarbonate Profile Sheets",
    "category": "Polycarbonate Roofing Sheets",
    "slug": "polycarbonate-profile-sheets",
    "shortDescription": "Translucent profiled polycarbonate roofing panels with raised longitudinal ribs for roof daylighting.",
    "description": "Polycarbonate profile sheets are solid thermoplastic panels formed into corrugated, sinusoidal or trapezoidal profiles. They are used as daylighting strips or roof panels and can be matched to compatible metal roof profiles. The profile must match adjoining roof sheet geometry to support weather-tight laps and suitable fixing. Confirm profile drawing, UV layer, colour and thickness before specifying.",
    "material": {
      "value": "Polycarbonate (PC), profiled sheet",
      "confidence": "category-level verified",
      "supplierConfirmationRequired": true
    },
    "formAndFinish": [
      "Longitudinal raised ribs / trapezoidal profile",
      "Translucent clear to light-grey appearance",
      "Smooth reflective surface"
    ],
    "typicalUses": [
      "Industrial roof daylighting strips",
      "Skylights and roof lights",
      "Canopies and covered walkways",
      "Greenhouse or agricultural glazing where suitable"
    ],
    "bestApplications": [
      "Daylighting sections in metal roofing when the polycarbonate profile matches the adjoining roof profile and UV/structural ratings suit the project."
    ],
    "selectionChecklist": [
      "Sinusoidal, trapezoidal or deep-rib profile drawing",
      "Rib pitch, height and effective cover width",
      "Sheet thickness and length",
      "Colour and light transmission",
      "UV-protected side",
      "Fastener position, washers and thermal-expansion allowances"
    ],
    "cautions": [
      "Profile matching is critical for weather-tight installation; do not assume one profile fits all GC, GI or colour-coated roof sheets.",
      "Asset contains title text, feature icons and a roof-installation inset; review before use."
    ],
    "publicationStatus": "DRAFT: obtain profile drawing, dimensions, light-transmission and UV data.",
    "seo": {
      "title": "Polycarbonate Profile Sheets | Corrugated Roof Daylighting Panels",
      "metaDescription": "Translucent polycarbonate profile sheets for roof lights, skylights and canopies. Match the sheet profile to the roof and confirm UV grade and dimensions.",
      "keywords": [
        "polycarbonate profile sheets",
        "corrugated polycarbonate sheet",
        "trapezoidal polycarbonate roofing",
        "polycarbonate skylight sheet",
        "roof daylighting panel",
        "polycarbonate roof sheet"
      ]
    },
    "imageAlt": "Polycarbonate Profile Sheets product collage on a clean white background",
    "imageDimensions": "1254x1254",
    "imageNotes": "Asset contains text, benefit icons and an installation inset; profile itself still requires supplier verification.",
    "sources": [
      {
        "title": "V-LITE — Polycarbonate Sheets",
        "url": "https://vlite.co.in/",
        "use": "Corrugated roofing sheets and profile-matched daylighting."
      },
      {
        "title": "Palram — MetalMatch Technology",
        "url": "https://www.palram.com/in/metal-match-technology/",
        "use": "Importance and method of matching polycarbonate profiles to metal roofs."
      },
      {
        "title": "Plastura — Corrugated Polycarbonate Profiles",
        "url": "https://plastura.com/materials/polycarbonate/corrugated/",
        "use": "Examples of sinusoidal, trapezoidal and deep-trapezoidal profiles."
      }
    ],
    "imageReview": "Contains baked-in title, benefit icons and an installation inset; review before publishing.",
    "jsonLdType": "Product",
    "imagePath": "./assets/polycarbonate_profile_sheet.png"
  },
  {
    "id": "textured-polycarbonate-sheets",
    "name": "Textured Polycarbonate Sheets",
    "category": "Polycarbonate Sheets",
    "slug": "textured-polycarbonate-sheets",
    "shortDescription": "Flat translucent polycarbonate panels with a pronounced hammered or pebble-textured surface finish.",
    "description": "Textured or embossed polycarbonate sheets have a patterned surface that scatters transmitted light. Depending on the pattern and grade, the texture can reduce glare, soften direct visibility and provide a decorative finish. The user's supplied photograph shows a hammered / pebble-like texture on a flat translucent panel. Confirm whether the product is solid compact PC, a textured coating or another composite before publishing thickness or performance details.",
    "material": {
      "value": "Polycarbonate (PC) is the stated category; exact construction / grade unverified",
      "confidence": "category-level inference",
      "supplierConfirmationRequired": true
    },
    "formAndFinish": [
      "Flat panel",
      "Hammered / pebble-like embossed texture",
      "Translucent clear / silver-grey appearance"
    ],
    "typicalUses": [
      "Light-diffusing partitions",
      "Skylights and daylight panels",
      "Architectural glazing and shelters",
      "Decorative interior panels"
    ],
    "bestApplications": [
      "Areas where diffused light and softened visibility are wanted, subject to light-transmission, impact and UV ratings."
    ],
    "selectionChecklist": [
      "Solid or multiwall construction",
      "Embossing pattern and side",
      "Thickness and dimensions",
      "Clear, opal or tinted colour",
      "Light transmission / haze",
      "UV protection and fire classification"
    ],
    "cautions": [
      "Verify whether this is the same product as the embossed colour polycarbonate supplied in rolls or a separate SKU.",
      "The alternate landscape asset contains baked-in title and performance icons; prefer the cleaner square image."
    ],
    "publicationStatus": "DRAFT: confirm sheet construction and whether this is separate from embossed colour sheet.",
    "seo": {
      "title": "Textured Polycarbonate Sheets | Hammered Embossed PC Panels",
      "metaDescription": "Textured polycarbonate sheets with a hammered embossed finish for diffused-light panels, partitions and skylights. Confirm sheet construction and UV grade.",
      "keywords": [
        "textured polycarbonate sheets",
        "hammered polycarbonate sheet",
        "embossed PC panels",
        "polycarbonate textured sheet",
        "light diffusing polycarbonate",
        "translucent textured panel"
      ]
    },
    "imageAlt": "Textured Polycarbonate Sheets product collage on a clean white background",
    "imageDimensions": "1254x1254",
    "imageNotes": "Primary asset is a clean square textured-sheet collage. Alternate 'Polycarbonate Sheets_ Textured Finish.png' is a landscape poster with text/icons. The alternate landscape file is included in the assets folder but is not the default product image.",
    "sources": [
      {
        "title": "Domer — Durapoll EM Embossed Polycarbonate Sheets",
        "url": "https://www.domer.co/durapoll-em/",
        "use": "Textured surface, diffusion and application examples."
      },
      {
        "title": "V-LITE — Polycarbonate Embossed Sheet",
        "url": "https://vlite.co.in/product/polycarbonate-embossed-sheet/",
        "use": "Textured face, light diffusion, colours and available forms."
      }
    ],
    "alternateImages": [
      {
        "file": "Polycarbonate Sheets_ Textured Finish.png",
        "dimensions": "1536x1024",
        "role": "alternate poster / duplicate version",
        "reviewBeforeUse": "Contains baked-in title text and performance icons; landscape 3:2 format."
      }
    ],
    "imageReview": "No obvious embedded copy detected in the contact-sheet review; still inspect at full size before publication.",
    "jsonLdType": "Product",
    "imagePath": "./assets/polycarbonate_sheets.png"
  },
  {
    "id": "puf-sandwich-sheets",
    "name": "PUF Sandwich Roofing Panels",
    "category": "Insulated Roofing Panels",
    "slug": "puf-sandwich-roofing-panels",
    "shortDescription": "Insulated sandwich panels with profiled metal facings and a rigid foam core visible at the panel edge.",
    "description": "PUF sandwich panels typically consist of rigid polyurethane foam bonded between two metal facings, often pre-painted galvanized steel. The insulated core helps reduce heat transfer compared with a single-skin metal roof. These factory-made panels are used for industrial roofs, warehouses, cold rooms and temperature-controlled buildings. Confirm whether the core is PUR or PIR and verify density, thickness, facings, joint profile and fire performance.",
    "material": {
      "value": "Rigid polyurethane foam core with metal facings; exact foam type and facing coating unverified",
      "confidence": "category-level verified",
      "supplierConfirmationRequired": true
    },
    "formAndFinish": [
      "Insulated sandwich panel",
      "Profiled outer metal facing",
      "Flat or micro-rib inner facing may be available",
      "Foam core visible at cut edge"
    ],
    "typicalUses": [
      "Industrial and warehouse roofs",
      "Cold-storage and temperature-controlled buildings",
      "Pre-engineered buildings",
      "Clean-room and process-building envelopes"
    ],
    "bestApplications": [
      "Buildings needing an insulated roof envelope, with panel thickness and joints selected to meet thermal, structural, hygiene and fire requirements."
    ],
    "selectionChecklist": [
      "PUR or PIR core",
      "Core thickness and density",
      "Thermal conductivity / U-value",
      "Top and bottom steel-facing thickness and coating",
      "Profile height and cover width",
      "Joint detail",
      "Fire classification and test report",
      "Span and load tables"
    ],
    "cautions": [
      "Do not publish a fire-resistance period, thermal U-value, core density or service-life claim without a certificate for this exact panel.",
      "Load capacity depends on span, support layout, skin thickness and design loads."
    ],
    "publicationStatus": "DRAFT: confirm core chemistry, thickness, density, facing gauges, profile and fire test.",
    "seo": {
      "title": "PUF Sandwich Roofing Panels | Insulated Metal Roof Panels",
      "metaDescription": "PUF insulated sandwich roofing panels for warehouses, industrial sheds and temperature-controlled buildings. Check core type, thickness, facing and fire rating.",
      "keywords": [
        "PUF sandwich panels",
        "PUF roofing sheets",
        "insulated roofing panels",
        "polyurethane sandwich panel",
        "insulated metal roof panel",
        "cold storage roof panels"
      ]
    },
    "imageAlt": "PUF Sandwich Roofing Panels product collage on a clean white background",
    "imageDimensions": "1254x1254",
    "imageNotes": "Image shows a white/grey metal-skinned sandwich panel with a pale foam core; actual core type is unverified.",
    "sources": [
      {
        "title": "Government of India — Continuous Sandwich Panels with PUF",
        "url": "https://ghtc-india.gov.in/Content/pdf/lhp-knowledge-pack/2-ET_Pocket_Book_Sep2020_s.pdf",
        "use": "Describes PUF core between metal facings and roof/wall panel applications."
      },
      {
        "title": "Kerala PWD — Quality Control Manual",
        "url": "https://www.keralapwd.gov.in/keralapwd/eknowledge/Upload/manuals/3595.pdf",
        "use": "Example material description and test requirements for polyurethane foam sandwich panels."
      },
      {
        "title": "Astal Roofing — PUF Sandwich Panels",
        "url": "https://astalroofing.in/products/puf-sandwich-panels/",
        "use": "Typical product construction and use cases."
      }
    ],
    "imageReview": "No obvious embedded copy detected in the contact-sheet review; still inspect at full size before publication.",
    "jsonLdType": "Product",
    "imagePath": "./assets/puff_or_sandwhich_sheets.png"
  },
  {
    "id": "pvc-printed-rolls",
    "name": "Printed PVC Sheet Rolls",
    "category": "PVC Rolls & Flexible Sheets",
    "slug": "printed-pvc-sheet-rolls",
    "shortDescription": "Flexible printed PVC sheet rolls with floral and botanical patterns, supplied in protective wrapping.",
    "description": "The reference shows flexible PVC sheet material supplied in rolls, with printed floral patterns, glossy protective wrapping and cardboard cores. The product packaging appears to carry the RainShade name and wording referring to UV roofing, window and gate sheets. Treat those as package claims until the supplier confirms intended uses, PVC formulation, UV stabilisation and outdoor service suitability.",
    "material": {
      "value": "PVC (polyvinyl chloride) sheet; formulation and reinforcement unknown",
      "confidence": "user product label / category supplied",
      "supplierConfirmationRequired": true
    },
    "formAndFinish": [
      "Flexible sheet in roll form",
      "Printed floral / botanical patterns",
      "Glossy or protective outer film",
      "Multiple colour combinations"
    ],
    "typicalUses": [
      "Decorative sheet applications",
      "Roofing, window or gate covering only if confirmed by RainShade datasheet"
    ],
    "bestApplications": [
      "Use in the specific roofing, window or gate application stated by the manufacturer for the selected grade and thickness."
    ],
    "selectionChecklist": [
      "PVC grade and formulation",
      "Sheet thickness and width",
      "Roll length and weight",
      "Printed pattern / colour code",
      "UV stabilisation and outdoor rating",
      "Reinforcement, tear strength and temperature limits",
      "Fire classification where required"
    ],
    "cautions": [
      "Do not infer UV performance or roofing suitability from packaging wording alone; obtain current technical data.",
      "Pictured floral patterns are illustrative; confirm actual catalogue designs."
    ],
    "publicationStatus": "DRAFT: verify RainShade product identity, use claims and technical grade.",
    "seo": {
      "title": "Printed PVC Sheet Rolls | Decorative Floral PVC Sheets",
      "metaDescription": "Explore printed PVC sheet rolls with floral and botanical patterns. Confirm roll width, thickness, UV grade and approved roofing, window or gate uses.",
      "keywords": [
        "PVC sheet rolls",
        "printed PVC sheet",
        "floral PVC rolls",
        "decorative PVC sheet roll",
        "RainShade sheets",
        "PVC roofing window gate sheets"
      ]
    },
    "imageAlt": "Printed PVC Sheet Rolls product collage on a clean white background",
    "imageDimensions": "1254x1254",
    "imageNotes": "Image shows decorative floral rolls and visible cardboard cores; packaging claims are not independently validated.",
    "sources": [
      {
        "title": "User-supplied product packaging image",
        "url": "",
        "use": "Package visibly shows a RainShade brand mark and roofing/window/gate wording; not independently verified."
      }
    ],
    "imageReview": "No obvious embedded copy detected in the contact-sheet review; still inspect at full size before publication.",
    "jsonLdType": "Product",
    "imagePath": "./assets/pvc_sheets.png"
  },
  {
    "id": "sds-screws",
    "name": "SDS Roofing Screws",
    "category": "Roofing Fasteners",
    "slug": "sds-roofing-screws",
    "shortDescription": "Self-drilling roofing screws with a hex washer head, metal washer, elastomeric sealing washer and drill-point tip.",
    "description": "SDS (self-drilling screw) roofing fasteners are designed to drill and fasten in one operation when matched to the base material and drill-point capacity. The reference shows a hexagonal washer head, bonded sealing washer and pointed drill tip. Roofing variants commonly use a metal washer bonded to an EPDM-type gasket to help seal the fixing point. Confirm actual steel grade, finish, dimensions and drill capacity.",
    "material": {
      "value": "Typically hardened carbon steel with galvanized or other protective finish; exact specification unknown",
      "confidence": "category-level verified",
      "supplierConfirmationRequired": true
    },
    "formAndFinish": [
      "Hex washer head",
      "Metal washer with bonded black elastomer seal",
      "Coarse thread",
      "Self-drilling point"
    ],
    "typicalUses": [
      "Fastening metal roofing and cladding sheets to compatible steel supports",
      "Fixing profiled sheets where self-drilling fastener is specified"
    ],
    "bestApplications": [
      "Metal roof and wall sheet fixing where screw length, drill capacity, substrate thickness and washer type are matched to roof system."
    ],
    "selectionChecklist": [
      "Screw diameter and length",
      "Drill-point number / drilling capacity",
      "Steel substrate thickness",
      "Coating / corrosion category",
      "Washer diameter and EPDM compatibility",
      "Hex head size and drive",
      "Manufacturer pull-out / pull-over data"
    ],
    "cautions": [
      "Use the correct washer compression and fastener spacing to avoid leaks or sheet damage.",
      "Do not transfer drill-capacity or corrosion ratings from another screw brand or size."
    ],
    "publicationStatus": "DRAFT: confirm diameter, length, coating, washer and drill-point specification.",
    "seo": {
      "title": "SDS Roofing Screws | Self-Drilling Hex Head Roof Fasteners",
      "metaDescription": "Self-drilling SDS roofing screws with hex washer heads and sealing washers for metal roof fastening. Check screw length, drill capacity and coating.",
      "keywords": [
        "SDS screws",
        "self drilling roofing screws",
        "roofing fasteners",
        "hex head roofing screw",
        "EPDM washer screw",
        "metal roofing screw"
      ]
    },
    "imageAlt": "SDS Roofing Screws product collage on a clean white background",
    "imageDimensions": "1254x1254",
    "imageNotes": "Image shows drill point, hex head and bonded washer; rendered metallic finish may differ from actual stock.",
    "sources": [
      {
        "title": "BAKO Fasteners — Self-Drilling Screws",
        "url": "https://bakogroup.in/fasteners/self-drilling-screws",
        "use": "Example construction, EPDM washer type and technical dimensions for SDS screws."
      }
    ],
    "imageReview": "No obvious embedded copy detected in the contact-sheet review; still inspect at full size before publication.",
    "jsonLdType": "Product",
    "imagePath": "./assets/sds_screws.png"
  },
  {
    "id": "upvc-gutters-accessories",
    "name": "UPVC Gutters & Accessories",
    "category": "Rainwater Drainage",
    "slug": "upvc-gutters-accessories",
    "shortDescription": "UPVC rainwater gutter channels and matching fittings including corners, outlets, end caps, downpipes and brackets.",
    "description": "A uPVC rainwater gutter system collects roof runoff and channels it to downpipes and drainage. A complete system may include straight gutter lengths, unions, internal and external corners, outlets, end caps, downpipes, bends, clamps and support brackets. The supplied image shows charcoal, white and terracotta channel sections plus white accessories. Confirm the actual gutter profile and compatible fitting range.",
    "material": {
      "value": "Unplasticized polyvinyl chloride (uPVC)",
      "confidence": "category-level verified",
      "supplierConfirmationRequired": true
    },
    "formAndFinish": [
      "Open gutter channels with formed side lips",
      "Smooth rigid plastic finish",
      "Charcoal grey, white and terracotta shown",
      "Separate connectors and drainage fittings"
    ],
    "typicalUses": [
      "Roof rainwater collection",
      "Downpipe connections",
      "Building perimeter drainage"
    ],
    "bestApplications": [
      "Residential, commercial and light-industrial roof drainage where gutter width, outlet size, support spacing and rainfall intensity are correctly specified."
    ],
    "selectionChecklist": [
      "Gutter profile and width/depth",
      "Material and UV stabilisation",
      "Colour and finish",
      "Outlet/downpipe diameter",
      "Union, corner and end-cap compatibility",
      "Bracket type and spacing",
      "Expansion allowance and sealing method"
    ],
    "cautions": [
      "Keep fittings within one compatible system where possible. Confirm flow capacity and local rainfall design.",
      "Do not assume all pictured accessory shapes are included in a standard kit."
    ],
    "publicationStatus": "DRAFT: confirm brand, profile, dimensions, colour range and fittings list.",
    "seo": {
      "title": "UPVC Gutters & Accessories | Rainwater Gutter System",
      "metaDescription": "Explore UPVC rainwater gutters, downpipes, outlets, corners, end caps and brackets. Confirm gutter profile, dimensions and compatible fittings.",
      "keywords": [
        "UPVC gutters",
        "uPVC rainwater gutter",
        "rainwater gutter accessories",
        "gutter fittings",
        "downpipe fittings",
        "PVC gutter system"
      ]
    },
    "imageAlt": "UPVC Gutters & Accessories product collage on a clean white background",
    "imageDimensions": "1254x1254",
    "imageNotes": "Generated collage includes many fittings; confirm which accessory variants the company actually stocks.",
    "sources": [
      {
        "title": "Besguard — uPVC Centre Drop / Running Outlet",
        "url": "https://besguard.co.in/besguard-centre-drop",
        "use": "uPVC gutter outlet function, material and compatible accessory families."
      },
      {
        "title": "Besguard — uPVC End Drop",
        "url": "https://besguard.co.in/besguard-end-drop",
        "use": "End-drop function and system components."
      },
      {
        "title": "Atlanta Industries — DURACON uPVC Gutter & Downspout System",
        "url": "https://static1.squarespace.com/static/606e67351695e30021829217/t/66a21548db719074c12695ce/1721898335541/7242024%2BDuracon%2BBrochure.pdf",
        "use": "Example complete uPVC gutter, downspout and accessory system."
      }
    ],
    "imageReview": "No obvious embedded copy detected in the contact-sheet review; still inspect at full size before publication.",
    "jsonLdType": "Product",
    "imagePath": "./assets/upvc_gutter_and_accessories.png"
  },
  {
    "id": "upvc-tile-sheets",
    "name": "UPVC Tile Roofing Sheets",
    "category": "UPVC Roofing Sheets",
    "slug": "upvc-tile-roofing-sheets",
    "shortDescription": "Terracotta-look UPVC roof panels with a raised tile profile and repeated molded tile courses.",
    "description": "UPVC tile roofing sheets are moulded or co-extruded polymer roofing panels designed to create the appearance of traditional roof tiles. Depending on the manufacturer, these products may use uPVC/PVC with an ASA weatherable surface layer or a multi-layer construction. The supplied image shows terracotta-red sheets with a raised tile pattern. Confirm whether the product is single-layer uPVC, ASA-uPVC or a multi-layer composite.",
    "material": {
      "value": "uPVC/PVC-based roofing tile panel; ASA or multilayer construction possible but unverified",
      "confidence": "category-level inference",
      "supplierConfirmationRequired": true
    },
    "formAndFinish": [
      "Raised tile-profile surface",
      "Terracotta-red finish shown",
      "Layered sheet edges"
    ],
    "typicalUses": [
      "Residential pitched roofing",
      "Canopies and architectural roof features",
      "Small commercial and utility roofs where profile and structural design suit"
    ],
    "bestApplications": [
      "Projects seeking a lightweight tile-look roof panel, subject to wind-load, support-spacing, fire and weathering specifications."
    ],
    "selectionChecklist": [
      "Single-layer or multi-layer composition",
      "ASA top layer (if present)",
      "Sheet thickness and profile dimensions",
      "Cover width and length",
      "Colour range and UV/weathering test data",
      "Fixings, ridge and verge accessories",
      "Wind-load and support-spacing tables"
    ],
    "cautions": [
      "Do not transfer long-term colour, impact, fire or temperature claims from another manufacturer's ASA-uPVC sheet to this product.",
      "Actual stock colours and profile must be confirmed."
    ],
    "publicationStatus": "DRAFT: confirm layer structure, material formulation, thickness and fixing system.",
    "seo": {
      "title": "UPVC Tile Roofing Sheets | Terracotta Roof Tile Panels",
      "metaDescription": "UPVC tile roofing sheets with a raised terracotta-style profile for residential and commercial roofs. Confirm ASA layer, thickness and installation details.",
      "keywords": [
        "UPVC tile sheets",
        "UPVC roofing tiles",
        "ASA UPVC roof tiles",
        "synthetic resin roof tiles",
        "PVC tile roofing sheets",
        "terracotta roof sheet"
      ]
    },
    "imageAlt": "UPVC Tile Roofing Sheets product collage on a clean white background",
    "imageDimensions": "1254x1254",
    "imageNotes": "Generated collage shows a tile-profile panel in terracotta and dark finishes; confirm actual profile and colours.",
    "sources": [
      {
        "title": "DION — ASA UPVC Tile Sheet",
        "url": "https://www.dioninc.in/ASA-UPVC-tile-sheet.html",
        "use": "Example multilayer ASA/uPVC tile sheet construction."
      },
      {
        "title": "A-Roof — Tile UPVC Sheet",
        "url": "https://www.aroof.in/tile-upvc-sheet.html",
        "use": "Example ASA-coated PVC tile roofing construction and accessories."
      },
      {
        "title": "Roofkraft — ASA uPVC Roofing Sheets",
        "url": "https://www.roofkraft.in/",
        "use": "Example roofing profile and multilayer ASA/uPVC product range."
      }
    ],
    "imageReview": "No obvious embedded copy detected in the contact-sheet review; still inspect at full size before publication.",
    "jsonLdType": "Product",
    "imagePath": "./assets/upvc_tiles_sheets.png"
  },
  {
    "id": "vent-base",
    "name": "Roof Vent Base",
    "category": "Ventilation & Roof Accessories",
    "slug": "roof-vent-base",
    "shortDescription": "Moulded translucent roof vent base with a raised circular collar and a profiled mounting flange.",
    "description": "The supplied image shows a moulded translucent base with a raised circular collar and a wide profiled flange designed to sit over a ribbed roof sheet. It appears intended as a roof interface for a ventilator or vent penetration, but the exact component type, resin, throat dimensions and compatible roof profiles are not identified. Treat it as a vent-base component pending supplier confirmation.",
    "material": {
      "value": "Translucent moulded polymer appearance; exact resin (polycarbonate, FRP or other) unknown",
      "confidence": "visual inference only",
      "supplierConfirmationRequired": true
    },
    "formAndFinish": [
      "Wide profiled roof-mounting flange",
      "Raised circular collar / neck",
      "Frosted translucent white appearance",
      "Reinforcing ribs around collar"
    ],
    "typicalUses": [
      "Potential roof ventilator or pipe-penetration base interface; exact use must be confirmed"
    ],
    "bestApplications": [
      "Only for the matching vent or penetration assembly and roof profile specified by its manufacturer."
    ],
    "selectionChecklist": [
      "Exact component name and intended assembly",
      "Material and UV grade",
      "Collar inside/outside diameter",
      "Roof profile and effective flange width",
      "Fixing points and fasteners",
      "Sealing detail and compatible sealant",
      "Temperature and wind-load limits"
    ],
    "cautions": [
      "Do not assume collar is threaded or that the base fits all roof profiles. Confirm mating component and sealing method.",
      "Avoid unsupported claims about resin, UV life or impact strength."
    ],
    "publicationStatus": "HOLD: supplier must confirm component function, material and compatible roof profile.",
    "seo": {
      "title": "Roof Vent Base | Profiled Roof Vent Mounting Base",
      "metaDescription": "Moulded roof vent base with a raised collar and profiled mounting flange. Confirm material, collar diameter, roof-profile match and sealing details.",
      "keywords": [
        "roof vent base",
        "roof ventilator base",
        "ventilation roof flashing",
        "roof vent mounting base",
        "profiled roof vent base",
        "roof penetration base"
      ]
    },
    "imageAlt": "Roof Vent Base product collage on a clean white background",
    "imageDimensions": "1254x1254",
    "imageNotes": "Generated asset matches general shape in reference; material and fit are not confirmed.",
    "sources": [
      {
        "title": "Real Green Engineers — Roof Ventilation Products",
        "url": "https://realgreen.in/products/",
        "use": "Shows ventilator systems can use different base materials and need configuration matching; not a specification for this base."
      }
    ],
    "imageReview": "No obvious embedded copy detected in the contact-sheet review; still inspect at full size before publication.",
    "jsonLdType": "Product",
    "imagePath": "./assets/vent_base.png"
  }
];

function resolveAssetPath(relativePath) {
  return encodeURI(relativePath.replace(/^\.\//, "/"));
}

const products = rawProducts.map((product) => ({
  ...product,
  image: resolveAssetPath(product.imagePath),
  alternateImages: (product.alternateImages || []).map((asset) => ({
    ...asset,
    url: resolveAssetPath(`./assets/${asset.file}`),
  })),
}));

// Minimal Product JSON-LD helper. No offers or price fields are emitted.
export function toProductJsonLd(product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: product.category,
    image: product.image,
  };
}

export default products;
