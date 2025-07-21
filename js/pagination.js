document.addEventListener("DOMContentLoaded", function () {
  const agents = [
    {
      id: 1,
      nameTH: "บริษัท แกรนด์เวิลด์ จำกัด",
      nameEN: "GRAND WORLD CO.,LTD.",
      contact:
        "บริษัท แกรนด์เวิลด์ จำกัด<br>342/5 ซ.พัฒนาการ30 ถ.พัฒนาการ แขวงสวนหลวง เขตสวนหลวง กรุงเทพฯ 10250<br>โทร : (662) 013-5640-41<br>โทรสาร : (662) 013-5643<br>มือถือ : 081-358-8556<br>อีเมล์ : grandworld33@hotmail.com",
      website: "https://www.grandworld.net/",
    },
    {
      id: 2,
      nameTH: "บริษัท โกลบอล ชิปปิ้ง จำกัด",
      nameEN: "GLOBALSHIPPING CO.,LTD.",
      contact: "",
      website: "",
    },
    {
      id: 3,
      nameTH: "บริษัท โกลบอล ดิสทริบิวชั่น อลิอันซ์ (ประเทศไทย) จำกัด",
      nameEN: "GLOBAL DISTRIBUTION ALLIANCE (THAILAND) CO., LTD.",
      contact:
        "Main Office<br>47 Soi Sukchai (Yak Ban Kluay Tai), Sukhumvit 42 Rd., Prakanong, Klongtoey, Bangkok 10110<br>Tel: +66 (0) 2712-4300-19, 2392-0708-9,2392-5194, 2392-1383 (Ext. 730) Fax: +66 (0) 2381-1513, 2381-2878",
      website: "http://www.gda.co.th/",
    },
    {
      id: 4,
      nameTH: "บริษัท คอมพรีเฮนสีฟ คาร์โก แมนเนจเม้นท์ จำกัด",
      nameEN: "COMPREHENSIVE CARGO MANAGEMENT LTD.",
      contact:
        "Comprehensive Cargo Management Ltd.<br>Address : 617/1-2 Soi Sawasdee 4 (Sukhumvit 50) Sukhumvit Rd., Prakhanong, Klongtoey, Bangkok 10260 Thailand.<br>Tel : (662)333 0362-78, (662)332 9360-69<br>Fax : (662)333 0380<br>E-mail Address : ccm@ccmgroups.com<br>Facebook : Comprehensive-Cargo-Management",
      website: "https://www.ccmgroups.com/",
    },
    {
      id: 5,
      nameTH: "บริษัท คัสต้อมส์ เคลียแร้นซ์ เซอร์วิสเซส จำกัด",
      nameEN: "CUSTOMS CLEARANCE SERVICES LTD.",
      contact:
        "Address : 2533 Sukhumvit Rd, Bang Chak, Phra Khanong, Bangkok 10260, Thailand<br>Email: info@ccscustoms.com<br>Phone: 02 742 6999",
      website: "https://www.ccscustoms.com/",
    },
    {
      id: 6,
      nameTH: "บริษัท เค ไลน์ (ประเทศไทย) จำกัด",
      nameEN: "K LINE (THAILAND) LTD.",
      contact:
        "สำนักงานใหญ่<br>33/29-31 ชั้น 8 และ 33/32-33 ชั้น M อาคารวอลล์สตรีททาวเวอร์<br>ถนนสุรวงศ์ แขวงสุริยวงศ์ เขตบางรัก<br>กรุงเทพมหานคร 10500<br>+66 2-625-0000<br>ktllgdmktssls@th.kline.com",
      website: "https://www.kline.co.th/th/",
    },
    {
      id: 7,
      nameTH: "บริษัท เค ไลน์ โลจิสติคส์ (ประเทศไทย) จำกัด",
      nameEN: "K LINE LOGISTICS (THAILAND) LTD.",
      contact:
        "THAILAND HEAD OFFICE<br>33/117, 33/120 WALL STREET TOWER BUILDING, 23rd FLOOR, ROOM No. 2301, 2304,<br>SURAWONGSE RD., SURIYAWONGSE, BANGRAK, BANGKOK 10500 THAILAND<br>TEL: +66-2238-0685-93<br>FAX: +66-2238-0693-95",
      website: "https://www.th.klinelogistics.com/",
    },
    {
      id: 8,
      nameTH: "บริษัท เคดับบลิวอี-คินเทซึ เวิลด์ เอ็กซเปรส (ประเทศไทย) จำกัด",
      nameEN: "KWE-KINTETSU WORLD EXPRESS (THAILAND) CO.,LTD.",
      contact:
        "KWE-Kintetsu World Express (Thailand) Co., Ltd.<br>99 Soi Ladprao 28, Ratchadapisek Road, Kwaeng Chankasem, Khet Chatuchak,<br>Bangkok 10900 Thailand<br>Phone : 66-2792-5999, 66-2515-3888<br>Fax : 66-25115720-8",
      website: "https://www.kwe.com/",
    },
    {
      id: 9,
      nameTH: "บริษัท เคบี ชิปปิ้ง เซอร์วิส จำกัด",
      nameEN: "KB SHIPPING SERVICE CO.,LTD.",
      contact:
        "9 ซอยเฉลิมพระเกียรติ ร.9 ซอย 48 แยก 12 แขวงดอกไม้ เขตประเวศ กรุงเทพฯ 10250<br>Tel : 02-0627188-9, 02-0263046<br>Fax : 02-0627188-9<br>Email : thanate@kbss.co.th",
      website: "https://www.kbss.co.th/",
    },
    {
      id: 10,
      nameTH: "บริษัท โคไชน่า เฟรท (ไทยแลนด์) จำกัด",
      nameEN: "KORCHINA FREIGHT (THAILAND) CO.,LTD.",
      contact: "",
      website: "https://smartcargo.kc-intl.com/Freight/SmartCargo",
    },
    {
      id: 11,
      nameTH: "บริษัท จีดีเอ (ประเทศไทย) จำกัด",
      nameEN: "GDA (THAILAND) CO., LTD.",
      contact:
        "47 Soi Sukchai (Yak Ban Kluay Tai), Sukhumvit 42 Rd., Prakanong, Klongtoey, Bangkok 10110<br>Tel: +66 (0) 2712-4300-19, 2392-0708-9,2392-5194, 2392-1383 (Ext. 730) Fax: +66 (0) 2381-1513, 2381-2878",
      website: "http://www.gda.co.th/",
    },
    {
      id: 12,
      nameTH: "บริษัท จูปิเตอร์ โลจิสติกส์ (ไทยแลนด์) จำกัด",
      nameEN: "JUPITER LOGISTICS (THAILAND) CO.,LTD.",
      contact:
        "139 Sethiwan Tower, 5th Floor, Pan Road,<br>Silom, Bangrak, Bangkok 10500<br>Tel: +66-2635-1999 (Domestic call 02-635-1999)",
      website: "https://www.jupiterlogistics.co.th/",
    },
    {
      id: 13,
      nameTH: "บริษัท เช้งเก้อร์ (ไทย) จำกัด",
      nameEN: "SCHENKER (THAI) LIMITED",
      contact: "",
      website: "https://www.dbschenker.com/global",
    },
    {
      id: 14,
      nameTH: "บริษัท ซังกิวไทย จำกัด",
      nameEN: "SANKYU-THAI CO.,LTD.",
      contact: "",
      website: "https://www.sankyu.co.jp/en/",
    },
    {
      id: 15,
      nameTH: "บริษัท ซันไชน์ ลอจิสติคส์ จำกัด",
      nameEN: "SUNSHINE LOGISTICS CO., LTD.",
      contact:
        "บริษัท ซันไชน์ ลอจิสติคส์ จำกัด<br>58/6 หมู่ที่ 7 ตำบลราชาเทวะ อำเภอบางพลี จังหวัดสมุทรปราการ 10540 (สำนักงานใหญ่ )<br>โทร. 02 738 5996 (อัตโนมัติ) แฟกซ์. 02 738 5990",
      website: "http://sunshine-logis.com/",
    },
    {
      id: 16,
      nameTH: "บริษัท ซี เอฟ เอฟ จำกัด",
      nameEN: "C F F CO.,LTD.",
      contact: "",
      website: "",
    },
    {
      id: 17,
      nameTH: "บริษัท ซีทีไอ โลจิสติกส์ จำกัด",
      nameEN: "CTI LOGISTICS CO., LTD.",
      contact:
        "Sea Freight Forwarding<br>คุณพิชภัท นันทกิตติ<br> pitchapat@ctibkk.com<br> (+66) 81 646 3586<br> (+66) 99 312 9586",
      website: "https://www.ctibkk.com/th/",
    },
    {
      id: 18,
      nameTH: "บริษัท ซูซูโย (ประเทศไทย) จำกัด",
      nameEN: "SUZUYO (THAILAND) LTD.",
      contact:
        "21ST FLOOR, 2922/260<br>New Petchaburi Road, Bangkapi,<br>Huaykwang, Bangkok,10310<br>Tel. : 02-7165380<br>Mail. : info@suzuyo.co.th",
      website: "https://suzuyo.co.th/",
    },
    {
      id: 19,
      nameTH: "บริษัท ซูมิโช โกลบอล โลจิสติคส์ (ประเทศไทย) จำกัด",
      nameEN: "SUMISHO GLOBAL LOGISTICS (THAILAND) CO.,LTD.",
      contact:
        "HEAD OFFICE<br>55/20 Moo 13 Tumbol Klongnueng , Amphur Klongluang, Pathumthani 12120, Thailand.<br>Tel. 02-529-2361-7, 02-529-2219-21<br>Fax 02-529-2368",
      website: "https://www.sgl.co.th/",
    },
    {
      id: 20,
      nameTH: "บริษัท เอ็มเอส ซัพพลาย เชน โซลูชั่นส์ (ประเทศไทย) จำกัด",
      nameEN: "MS SUPPLY CHAIN SOLUTIONS (THAILAND) LTD.",
      contact:
        "Email: Inquiry@mscs-th.com<br>Phone number: +66 2 715 6502<br>+66 2 715 6503<br>+66 2 715 6525",
      website: "https://www.mscs.co.th/",
    },
    {
      id: 21,
      nameTH: "บริษัท ดอคคิวเมนท์ พาร์เซล เอ็กซ์เพรส จำกัด",
      nameEN: "DOCUMENT PARCEL EXPRESS CO.,LTD.",
      contact:
        "60 ซอยอารีย์ 5 เหนือ<br>ถนนพหลโยธิน แขวงพญาไท เขตพญาไท<br>กรุงเทพมหานคร 10400<br>โทร : 02-278-2900<br>มือถือ : 065-519-0597, 065-519-0598<br>อีเมลล์ : sales@dpxlogistics.com",
      website: "https://www.dpxlogistics.com/",
    },
    {
      id: 22,
      nameTH: "บริษัท ดัมโก้ โลจิสติกส์ (ไทยแลนด์) จำกัด",
      nameEN: "DAMCO LOGISTICS (THAILAND) CO., LTD.",
      contact: "",
      website: "https://www.maersk.com/damco/",
    },
    {
      id: 23,
      nameTH: "ห้างหุ้นส่วนจำกัด ดาวทองเทรดดิ้ง",
      nameEN: "DAO THONG TRADING LTD.,PART.",
      contact: "",
      website: "https://www.sjn.in.th/",
    },
    {
      id: 24,
      nameTH: "บริษัท ดิเมอร์โก เอ็กซ์เพรส (ประเทศไทย) จำกัด",
      nameEN: "DIMERCO EXPRESS (THAILAND) CO., LTD.",
      contact:
        "Unit 2003-3 & 2004, 20th Floor, Rasa Tower 1, 555 Phaholyothin Road, Chatuchak, 10900,  <br>Eid Laksana<br>Country Manager<br>eid_laksana@dimerco.com<br>+66 2 937-1979",
      website: "https://dimerco.com/",
    },
    {
      id: 25,
      nameTH: "บริษัท ดีเอชแอล โกลเบิล ฟอร์เวิร์ดดิ้ง (ประเทศไทย) จำกัด",
      nameEN: "DHL GLOBAL FORWARDING (THAILAND) LIMITED",
      contact: "",
      website: "https://www.dhl.com/sa-en/home.html",
    },
    {
      id: 26,
      nameTH: "บริษัท ดีเอชแอล เอ็กซ์เพรส (ประเทศไทย) จำกัด",
      nameEN: "DHL EXPRESS (THAILAND) LTD.",
      contact: "",
      website: "https://mydhl.express.dhl/sa/en/home.html",
    },
    {
      id: 27,
      nameTH: "บริษัท ดีเอสวี แอร์ แอนด์ ซี จำกัด",
      nameEN: "DSV AIR & SEA LTD.",
      contact:
        "Info.Solutions@th.dsv.com<br>Info.AirSea@th.dsv.com<br>+66 2 033 8100",
      website: "https://www.dsv.com/en/countries/asia/thailand",
    },
    {
      id: 28,
      nameTH: "บริษัท เด็กซ์ตร้า อินดัสทรี แอนด์ ทรานสปอร์ต จำกัด",
      nameEN: "DEXTRA INDUSTRY AND TRANSPORT CO., LTD.",
      contact:
        "5th Floor, Lumpini 2 Building,<br>Sarasin Road, Lumpini, Pathumwan,<br>Bangkok 10330​, Thailand<br>info@dextratransport.com<br>tel : +66 2119 4400 / 4488",
      website: "https://www.dextratransport.com/",
    },
    {
      id: 29,
      nameTH: "บริษัท ทรานสปีด จำกัด",
      nameEN: "TRANSPEED CO.,LTD.",
      contact:
        'Transpeed Co.,Ltd.<br>3360/6-8 Soi Manorom, Rama 4 Road, Klongton,<br>Klongtoey, Bangkok 10110, Thailand<br>Tel: (+66) 0-2249-9001  Fax: (+66) 0-2249-6060<br>Email: onlineinquiry@transpeed.biz<br>Website: <a target="_blank" href="http://www.transpeed.biz/">www.transpeed.biz</a>',
      website: "https://www.transpeed.biz/",
    },
    {
      id: 30,
      nameTH: "บริษัท ทรานสโป อินเตอร์เนชั่นแนล จำกัด",
      nameEN: "TRANSPO INTERNATIONAL LTD.",
      contact:
        "20/22-23 Moo 3, Klong Nung, Klong Luang, Prathumthani 12120 Thailand<br>Tel : +66 2105 8651<br>Fax : +66 2902 2262<br>Email : sales@transpologistics.com",
      website: "https://www.transpologistics.com/",
    },
    {
      id: 31,
      nameTH: "บริษัท ทีซีซี โลจิสติกส์ จำกัด",
      nameEN: "TCC LOGISTICS LIMITED",
      contact:
        "Tel: +66 (0) 2026 7111<br>Tax ID: 0105547037485 (Head Office)<br>Email: info@tccs.co.th",
      website: "https://tccs.co.th/",
    },
    {
      id: 32,
      nameTH: "บริษัท ทีเอ็นที เอ็กซเพรส เวิลด์ไวด์ (ประเทศไทย) จำกัด",
      nameEN: "TNT EXPRESS WORLDWIDE (THAILAND) CO., LTD.",
      contact: "",
      website: "https://www.tnt.com/express/th_th/site/home.htmll",
    },
    {
      id: 33,
      nameTH: "บริษัท ไทยสมเด็จ เซอร์วิส จำกัด",
      nameEN: "THAISOMDEJ SERVICE CONPANY LIMITED",
      contact:
        "144, 144/1 Soi Sukhumvit 62 Yaek 5, Phrakanong-tai, Phrakanong, Bangkok 10260<br>info@thaisomdej.com<br>+6623313838",
      website: "https://www.thaisomdej.co.th/",
    },
    {
      id: 34,
      nameTH: "บริษัท นครไทยแอคมี่ซิสเท็มส์ จำกัด",
      nameEN: "NAKORNTHAI ACME SYSTEMS CO., LTD",
      contact: "",
      website: "",
    },
    {
      id: 35,
      nameTH: "บริษัท นิปปอน เอ็กซ์เพรส (ประเทศไทย) จำกัด",
      nameEN: "NIPPON EXPRESS (THAILAND) CO.,LTD.",
      contact: "",
      website: "https://www.nipponexpress.com/tha/",
    },
    {
      id: 36,
      nameTH: "บริษัท นิปปอน เอ็กซ์เพรส เอ็นอีซี ลอจิสติกส์ (ประเทศไทย) จำกัด",
      nameEN: "NIPPON EXPRESS NEC LOGISTICS (THAILAND) CO.,LTD.",
      contact:
        "Nippon Express NEC Logistics (Thailand) Co., Ltd.<br>12th Floor, Thaniya Plaza Building, 52 Silom Rd., Suriyawongse, Bangrak, Bangkok 10500<br>Tel : +66 (0) 2238 1370-9<br>Fax : +66 (0) 2238 3743-4<br>Website : www.nipponexpress-necl.co.th<br>E-mail : sales@nipponexpress-necl.co.th",
      website: "https://www.nipponexpress-necl.co.th/",
    },
    {
      id: 37,
      nameTH: "บริษัท นิยมบริการ จำกัด",
      nameEN: "NIYOM SERVICES CO.,LTD.",
      contact:
        "Niyom Service Tel: +662-671-0381-4<br>Cargofast Tel: +662-671-0386-7<br>Email: info@niyomservice.com, info@cargofast.co.th",
      website: "https://www.niyomservice.com/",
    },
    {
      id: 38,
      nameTH: "บริษัท แนสโก้ ชิปปิ้ง จำกัด",
      nameEN: "NASCO SHIPPING CO.,LTD.",
      contact:
        "โทรศัพท์ : (+66) 02-347-0733<br>อีเมล : nasabkk@nasatransport.com",
      website: "https://www.nasanasco.com/th/",
    },
    {
      id: 39,
      nameTH: "บริษัท รักษาความปลอดภัย บริงค์ส ประเทศไทย จำกัด",
      nameEN: "BRINKS SECURITY THAILAND LIMITED",
      contact:
        "47th Floor, Jewelry Trade Center Building, North Tower,<br>919/586-591 Silom Road,<br>Silom, Bangrak, Bangkok<br>Thailand 10500<br>Tel : (66 2) 630 0661<br>Fax : (66 2) 630 0660",
      website: "https://th.brinks.com/",
    },
    {
      id: 40,
      nameTH: "บริษัท บางกอก เฟรท ฟอร์เวิดเดอร์ จำกัด",
      nameEN: "BANGKOK FREIGHT FORWARDERS CO.,LTD.",
      contact:
        "BANGKOK FREIGHT FROWARDERS CO.,LTD.<br>10 ถ.ชายเขา ต.บ่อยาง อ.เมือง<br>จ.สงขลา 9000<br>โทรศัพท์ +66 (0) 74321-644-5<br>โทรสาร +66 (0) 74440-619",
      website: "http://www.bafcothai.com/",
    },
    {
      id: 41,
      nameTH: "บริษัท บางกอกเยนเนอร์รัลเอ๊กซ์เพรส จำกัด",
      nameEN: "BANGKOK GENERAL EXPRESS CO.,LTD.",
      contact: "",
      website: "",
    },
    {
      id: 42,
      nameTH: "บริษัท บิส โอเชี่ยน โลจิสติกส์ จำกัด",
      nameEN: "BIZ OCEAN LOGISTICS CO., LTD.",
      contact: "",
      website: "https://www.bizocean.net/",
    },
    {
      id: 43,
      nameTH: "บริษัท บีดีพี เอเซีย-แปซิฟิค จำกัด",
      nameEN: "BDP ASIA-PACIFIC LTD.",
      contact: "",
      website: "https://psabdp.com/",
    },
    {
      id: 44,
      nameTH: "บริษัท เบทเทอร์ ซิสเท็ม จำกัด",
      nameEN: "BETTER SYSTEM CO., LTD.",
      contact:
        "159 ซอยดำรงค์ลัทธพิพัฒน์ ถนนอาจณรงค์ แขวง คลองเตย เขตคลองเตย กรุงเทพมหานคร 10110 <br>โทรศัพท์ : +66 (0) 2671 5858<br>โทรสาร : +66 (0) 2​672 ​5503 <br>เว็บไซต์ : www.bettersystem.co.th<br>อีเมล์ : info@bettersystem.co.th",
      website: "https://www.bettersystem.co.th/",
    },
    {
      id: 45,
      nameTH: "บริษัท เบอร์ลี่ ยุคเกอร์ โลจิสติกส์ จำกัด",
      nameEN: "BERLI JUCKER LOGISTICS LTD.",
      contact:
        "บริษัท เบอร์ลี่ ยุคเกอร์ โลจิสติกส์ จำกัด<br>บริษัท บีเจซี มูฟ จำกัด<br>เลขที่ 99/1 อาคาร BJC2 ชั้น 7<br>ซอยรูเบีย ถนนสุขุมวิท 42<br>แขวงพระโขนง เขตคลองเตย<br>กรุงเทพมหานคร 10110<br>โทรศัพท์ : 02 146 9889",
      website: "https://www.bjclogistics.co.th/",
    },
    {
      id: 46,
      nameTH: "บริษัท พรวัฒนา ชิปปิ้ง เซอร์วิส จำกัด",
      nameEN: "PORNVATANA SHIPPING SERVICES CO.,LTD.",
      contact:
        "55,57 SOI LASAL 79, BANGNA, BANGNA, BANGKOK 10260 THAILAND<br>FAX : +66 2 745 8015-7 (FREIGHT FORWARDER) / +66 2 745 8074-5 (SHIPPING)<br>EMAIL : admin@pornvatana-transport.com",
      website: "https://pornvatana-transport.com/",
    },
    {
      id: 47,
      nameTH: "บริษัท พี แอนด์ พี พรีเมียร์เทรด จำกัด",
      nameEN: "P & P PREMIER TRADE CO.,LTD.",
      contact: "",
      website: "",
    },
    {
      id: 48,
      nameTH: "บริษัท พี.เจ. ทรานช์แพ็ค (ประเทศไทย) จำกัด",
      nameEN: "P.J. TRANPACK (THAILAND) CO.,LTD.",
      contact:
        "1000/57-58 ตรอกวัดจันทร์ใน ถนนพระราม 3<br>แขวงบางโคล่ เขตบางคอแหลม กรุงเทพฯ 10120,ประเทศไทย<br>เบอร์โทร : 0-2296-9599 แฟกซ์: 0-2683-5970<br>อีเมล์ :  porama@pj-group.com",
      website: "http://www.pj-group.com/index_th.php",
    },
    {
      id: 49,
      nameTH: "บริษัท พุทธชาดเอ็กซ์เพรส (ไทยแลนด์) จำกัด",
      nameEN: "PHUTHACHART EXPRESS (THAILAND) CO.,LTD.",
      contact:
        "115 ROMPO-MANSION RIMTHANGRODFAI-SAIPAKNAM RD., KLONGTOEY, BANGKOK 10110, THAILAND<br>TEL. 0-2671-9007-8, 0-2671-2009, 0-2711-9282-3<br>Fax : 0-2671-2010, 0-2671-2149, 0-2671-3025<br>E-mail : phuthachart@gmail.com, prajak@phuthachart.co.th",
      website: "http://phuthachart.co.th/",
    },
    {
      id: 50,
      nameTH: "บริษัท ไพลอต เซอร์วิส จำกัด",
      nameEN: "PILOT SERVICES CO.,LTD.",
      contact:
        "Sukhumvit 50, Prakanong, KlongtoeyBangkok 10260 Thailand<br>EMAIL : info@pilot.co.th<br>Tel : (+66)2-333-0651, (+66)2-742-8900<br>2024/164-168 Rimtangrodfai Rd.",
      website: "https://www.pilotth.com/",
    },
    {
      id: 51,
      nameTH: "บริษัท ไพโอเนียร์ แอร์คาร์โก้ จำกัด",
      nameEN: "PIONEER AIR CARGO CO.,LTD.",
      contact:
        "Pioneer Logistics Co, Ltd.<br>Email: cs-wh@pioneer.co.th<br>Tel: +666 4181 0214, +669 5371 5483",
      website: "https://www.pioneer.co.th/th/",
    },
    {
      id: 52,
      nameTH: "บริษัท ฟาร์อีสท์ คอนทรานส์ จำกัด",
      nameEN: "FAREAST CONTRANS CO.,LTD.",
      contact: "",
      website: "https://www.fareast.co.th/",
    },
    {
      id: 53,
      nameTH: "บริษัท มิตซุย-โซโค (เชียงใหม่) จำกัด",
      nameEN: "MITSUI - SOKO (CHIANGMAI) CO.,LTD",
      contact: "",
      website: "",
    },
    {
      id: 54,
      nameTH: "บริษัท มิตซุย-โซโค (ประเทศไทย) จำกัด",
      nameEN: "MITSUI-SOKO (Thailand) CO., LTD.",
      contact:
        "2126 อาคารกรมดิษฐ์ ชั้น 5 ถ.เพชรบุรีตัดใหม่ บางกะปิ ห้วยขวาง กรุงเทพฯ 10310<br>TEL. 02-715-6590<br>FAX. 02-715-6580",
      website: "https://www.mitsui-soko.co.th/th/",
    },
    {
      id: 55,
      nameTH: "บริษัท มิตซูบิชิ โลจิสติคส์ (ประเทศไทย) จำกัด",
      nameEN: "MITSUBISHI LOGISTICS (THAILAND) CO.,LTD.",
      contact:
        "16th Floor Sethiwan Tower 139 Pan Road Silom Bangrak Bangkok 10500 Thailand<br>Tel : 66-(2)-237-9272 (Auto)<br>Fax : 66-(2)-237-9270 , 66-(2)-237-9276, 66-(2)-235-6067",
      website: "https://www.mitsubishi-logistics.co.th/",
    },
    {
      id: 56,
      nameTH: "บริษัท เมอิโก ทรานส์ (ประเทศไทย) จำกัด",
      nameEN: "MEIKO TRANS (THAILAND) CO.,LTD.",
      contact:
        "Address : 216/68 16th Floor, Unit B, L.P.N. Tower, Nanglinchee Rd., Chongnonsee, Yannawa, Bangkok 10120<br>Tel : (66)-2650-1555 (auto 100 lines)<br>Fax : (66)-2285-2896-7<br>Email : Ishikawa@meikoasia.com<br>Mr. Ishikawa , Senior Manager / Japanese & English<br>siriporn@meikoasia.com<br>Ms. Siriporn, General Manager/Thai & English<br>yupaporn@meikoasia.com<br>Ms. Yupaporn, Marketing Manager/Thai & English",
      website: "https://www.meikoasia.com/",
    },
    {
      id: 57,
      nameTH: "บริษัท ยังสตาร์ เอ็กซ์เพรส กรุ๊ป อินเตอร์เนชั่นแนล จำกัด",
      nameEN: "YOUNG STAR EXPRESS GROUP INTERNATIONAL CO.,LTD.",
      contact:
        "29 ซอยบางนา-ตราด19 แยก22 ถนนเทพรัตน แขวงบางนาเหนือ เขตบางนา., กทม 10260 <br>โทร : 02-958-7621<br>อีเมล : info@ysegroup.co.th",
      website: "https://youngstargroup.com/",
    },
    {
      id: 58,
      nameTH: "บริษัท ยูเซ็น โลจิสติกส์ (ประเทศไทย) จำกัด",
      nameEN: "YUSEN LOGISTICS (THAILAND) CO.,LTD.",
      contact:
        "Yusen Logistics (Thailand) Co., Ltd<br>TEL : +662-034-8000<br>ylth.ml.bdu.sale.mgt@th.yusen-logistics.com",
      website: "https://www.yusen-logistics.com/th_th/",
    },
    {
      id: 59,
      nameTH: "บริษัท ยูนิค ทรานส์ลิงค์ จำกัด",
      nameEN: "UNIQUE TRANSLINK CO., LTD.",
      contact:
        "ที่อยู่ : 2024/83 ถนนริมทางรถไฟสายปากน้ำ แขวงพระโขนง เขตคลองเตย กรุงเทพฯ 10260<br>โทรศัพท์ : 02-742-8340-3<br>E-Mail : siriwan@uniquetranslink.com , darunee@uniquetranslink.com<br>ID line : 0631897676",
      website: "https://www.uniquetranslink.com/",
    },
    {
      id: 60,
      nameTH: "บริษัท ยูนิเทรด ชิ้ปปิ้ง แอนด์ เซอร์วิส จำกัด",
      nameEN: "UNITRADE SHIPPING AND SERVICE COMPANY LIMITED",
      contact:
        "Address: 321/31-33 Nanglinchi Rd., Chongnonsi, Yannawa, Bangkok 10120 Thailand<br>Ms. Patchara Voraprukpisut<br>Email: patchara@unitradeshipping.co.th<br>Mr. Pichit Voraprukpisut<br>Email: pichit@unitradeshipping.co.th<br>Contact Number: 662 2854902-10<br>Fax: 662 2852911-12",
      website: "https://www.unitradeshipping.co.th/th/",
    },
    {
      id: 61,
      nameTH: "บริษัท ยูพีเอส พาร์เซล ดีลิเวอร์รี่ เซอร์วิส จำกัด",
      nameEN: "UPS PARCEL DELIVERY SERVICE LIMITED",
      contact: "",
      website: "https://www.ups.com/th/th/Home.pagee",
    },
    {
      id: 62,
      nameTH: "บริษัท ระยองชิปปิ้ง จำกัด",
      nameEN: "RAYONG SHIPPING CO.,LTD.",
      contact:
        "Telephone: (+66) 33-033061-3<br>Fax: (+66) 33-033064<br>Email: niyom@rayongshipping.co.th",
      website: "http://www.rayongshipping.co.th/",
    },
    {
      id: 63,
      nameTH: "บริษัท รีนุส โลจิสติกส์ จำกัด",
      nameEN: "RHENUS LOGISTICS CO., LTD.",
      contact: "",
      website: "https://www.rhenus.group/th/th/",
    },
    {
      id: 64,
      nameTH: "บริษัท โรจนะ ดิสทริบิวชั่น เซ็นเตอร์ จำกัด",
      nameEN: "ROJANA DISTRIBUTION CENTER CO.,LTD.",
      contact:
        "Head Office (Freight Forwording, Warehousing)<br>1/35 Moo.5, Rojana Road, Tambol Karnham Amphur U-Thai, Ayuthaya 13210, Thailand<br>Tel : (035) 330141-7 Fax : (035) 330-140, 330-149",
      website: "https://www.rdc.co.th/",
    },
    {
      id: 65,
      nameTH: "บริษัท ล็อกวิน แอร์ พลัส โอเชี่ยน (ไทยแลนด์) จำกัด",
      nameEN: "LOGWIN AIR+ OCEAN (THAILAND) LTD.",
      contact: "",
      website: "https://www.logwin-logistics.com/index.php",
    },
    {
      id: 66,
      nameTH: "บริษัท เลสชาโก้ (ประเทศไทย) จำกัด",
      nameEN: "LESCHACO (THAILAND) LTD.",
      contact: "",
      website: "https://www.leschaco.com/en/start.html",
    },
    {
      id: 67,
      nameTH: "บริษัท วี.ซี. ชิปปิ้ง แอนด์ เซอร์วิส จำกัด",
      nameEN: "V.C. SHIPPING & SERVICE CO., LTD.",
      contact:
        "ตั้งอยู่ที่ เลขที่ 446/75 ซอยปรีดีพนมยงค์ 20/1 ถนนสุขุมวิท 71 แขวงพระโขนงเหนือ เขตวัฒนา กรุงเทพ ฯ 10110<br>โทรศัพท์ 02 392 7676-7, 02 392 0099, 02 711-0001-2 โทรสาร 02 381 1904 E-mail : center@vcshipping.co.th",
      website: "https://www.vcshipping.co.th/",
    },
    {
      id: 68,
      nameTH: "บริษัท วี.แพค แอนด์ มูฟ (กรุงเทพ) จำกัด",
      nameEN: "V.PACK & MOVE (BANGKOK) CO.,LTD.",
      contact: "",
      website: "https://www.agsmovers.com/",
    },
    {
      id: 69,
      nameTH: "บริษัท วีซีแอล โลจิสติกส์ จำกัด",
      nameEN: "VCL LOGISTICS CO.,LTD.",
      contact: "",
      website: "",
    },
    {
      id: 70,
      nameTH: "บริษัท วี-เซิร์ฟ โลจิสติกส์ จำกัด",
      nameEN: "V-SERVE LOGISTICS LTD.",
      contact:
        "Marketing Contact : Bangna Office<br>Floor.20, MD Tower Bangna-Trad Rd.(km.3)<br>Bangkok 10260<br>Tel. : 02 744 1007 #19, 02 744 1031-3<br>Fax.02 744 1006<br>Hotline : 064 656 5999<br>e-mail : mkt4@v-servegroup.com<br><br>Hatyai Marketing Office (Songkhla) :<br>392/1 Kanchanawanich.Rd,<br>Ban Phru Sub-district, Hatyai District,<br>Songkhla 90250<br>Tel. 074-241-340-1<br>e-mail : mkt_admin.south@v-servegroup.com",
      website:
        "https://www.v-servelogistics.com/media/vserve2017/index_th_2021.php",
    },
    {
      id: 71,
      nameTH: "บริษัท สแตนดาร์ด ชิปปิ้ง (ประเทศไทย) จำกัด",
      nameEN: "STANDARD SHIPPING (THAILAND) CO.,LTD.",
      contact: "",
      website: "https://www.lannausa.com/",
    },
    {
      id: 72,
      nameTH: "บริษัท สยาม ทรานส์ อินเตอร์เนชั่นแนล จำกัด",
      nameEN: "SIAM TRANS INTERNATIONAL CO.,LTD.",
      contact:
        "Tel. (+66) 2-237-3061-4<br>FAX. (+66) 2-236-1042<br>EMAIL : STI@siamtrans.com",
      website: "https://www.siamtrans.com/",
    },
    {
      id: 73,
      nameTH: "บริษัท สยาม ฟอร์มัลลิตี้ จำกัด",
      nameEN: "SIAM FORMALITY CO., LTD.",
      contact: "",
      website: "",
    },
    {
      id: 74,
      nameTH: "บริษัท สยามนิสทรานส์ จำกัด",
      nameEN: "SIAM NITRANS CO.,LTD.",
      contact:
        "ชั้น 15 เลขที่ 191/66, 68-69 CTI TOWER ถนนรัชดาภิเษก<br>เขตคลองเตย กรุงเทพมหานคร 10110 ประเทศไทย<br>โทรศัพท์ : (+66)-2-261-1080～5 or 261-5343～6",
      website: "https://www.th.nissin-asia.com/th/index.php",
    },
    {
      id: 75,
      nameTH: "บริษัท อจิลิตี้ จำกัด",
      nameEN: "AGILITY CO., LTD.",
      contact: "",
      website: "https://www.agility.com/en/",
    },
    {
      id: 76,
      nameTH: "บริษัท อะคูเท็คท์ จำกัด",
      nameEN: "ACUTECH CO.,LTD.",
      contact:
        "Ekkamai HQ<br>87/125–128 Modern Town Bldg A, 17th Floor Sukhumvit 63 Rd, Khlong Ton Nuea, Vadhana kok, Thailand 10110<br><br>TEL. (+66) 02 711 6180–3<br>FAX. (+66) 02 711 6929–30<br>EMAIL. info@acutech.co.th",
      website: "https://www.acutech.co.th/",
    },
    {
      id: 77,
      nameTH: "บริษัท อาร์ ที เอ็น โลจิสติคส์ จำกัด",
      nameEN: "RTN LOGISTIC CO.,LTD.",
      contact:
        "RTN LOGISTICS CO.,LTD (HEAD OFFICE) 48/15 Soi Rung Rueang, Ratchadapisek Road, Samsen Nok Subdistrict, Huai Khwang District, Bangkok 10310<br>TEL. +662 512 3484<br>EMAIL. sales@rtnlogistics.co.th",
      website: "https://rtnlogistics.com/",
    },
    {
      id: 78,
      nameTH: "บริษัท อินเตอร์เนชั่นแนลคัสตอมส์โบรกเกอร์ จำกัด",
      nameEN: "INTERNATIONAL CUSTOMS BROKER CO.,LTD.",
      contact: "",
      website: "",
    },
    {
      id: 79,
      nameTH: "บริษัท อีเกิลส์ แอร์แอนด์ซี (ประเทศไทย) จำกัด",
      nameEN: "EAGLES AIR & SEA (THAILAND) CO., LTD.",
      contact:
        "12 Soi ICD 5,Chaokhunthahan Road, Khlong Sam Prawet Sub-District, Lat Krabang District, Bangkok 10520 Thailand<br><br>Tel : +662 7904599<br>FAX : +662 7904567<br>Email :<br>sales@eaglesthai.com (Forwarding)<br>sales-warehouse@eaglesthai.com (Warehouse & Distribution)",
      website: "https://www.eaglesthai.com/",
    },
    {
      id: 80,
      nameTH: "บริษัท อีเทอร์นิตี้ แกรนด์ โลจิสติคส์ จำกัด (มหาชน)",
      nameEN: "ETERNITY GRAND LOGISTICS PUBLIC CO.,LTD",
      contact:
        "18/8 Moo 4 Bangna -Trad Road (KM23) Tambol Bangsaothong,<br>Bangsaothong District, Samutprakan Province 10570<br><br>TEL.+66 2 315 7333<br>Email : ETG-BD@eternity.co.th",
      website: "https://eternity.co.th/en/about",
    },
    {
      id: 81,
      nameTH: "บริษัท อีสท์-เวสท์ โลจิสติกส์ จำกัด",
      nameEN: "EAST-WEST LOGISTICS",
      contact:
        "East-West Logistics Co., Ltd.<br>10/1 Soi Farm Watana, Rama 4 Road, Prakhanong, Klongtoey, Bangkok 10110, Thailand.<br><br>Tel: (66) 2712-0130<br>Fax: (66) 2712-0156<br>Email: overseas@ewl.co.th",
      website: "https://www.ewl.co.th/",
    },
    {
      id: 82,
      nameTH: "บริษัท เอพีซี โลจิสติกส์ (ไทย) จำกัด",
      nameEN: "APC LOGISTICS (THAI) CO.,LTD.",
      contact: "",
      website: "",
    },
    {
      id: 83,
      nameTH: "บริษัท เอฟ ที เอส บริการขนส่ง จำกัด",
      nameEN: "FTS TRANSPORT SERVICE CO., LTD.",
      contact:
        "216/73, 75, 76 ชั้น 17 แอล.พี.เอ็น. ทาวเวอร์ ถนนนางลิ้นจี่ แขวงช่องนนทรี เขตยานนาวา กรุงเทพมหานคร 10120<br><br>TEL. 0-2285-2936<br>FAX. 0-2285-2539-40<br>EMAIL. ftsbd@fts.co.th",
      website: "https://www.fts.co.th/",
    },
    {
      id: 84,
      nameTH: "บริษัท เอ็ม เอส ไอ โลจิสติคส์ จำกัด",
      nameEN: "MSI LOGISTICS LTD.",
      contact:
        "Head Office<br>Address: 9 Soi Seri Villa Village ( 1st Intersection), Nhongbon, Praves, Bangkok 10250 Thailand<br>Tel: +66 2 398 2266<br>Email: operations@msi-logistics.net",
      website: "https://mercuryinter.com/",
    },
    {
      id: 85,
      nameTH: "บริษัท เอ็มโอแอล โลจีสติกส์ (ประเทศไทย) จำกัด",
      nameEN: "MOL LOGISTICS (THAILAND) CO., LTD.",
      contact:
        "เลขที่ 163 อาคารไทยสมุทร ชั้น 11-12<br>ถนนสุรวงศ์ แขวงสุริยวงศ์ เขตบางรัก<br>กรุงเทพฯ 10500<br>โทรศัพท์ : +66 (0) 2287-7878, +66 (0) 2237-1260<br>แฟกซ์ : +66 (0) 2287-7871-3",
      website: "https://mol-logistics.co.th/th/corporate-profile",
    },
    {
      id: 86,
      nameTH: "บริษัท เอส.เอ็ม.เอส. คอมเมอร์เชียล จำกัด",
      nameEN: "S.M.S. COMMERCIAL CO.,LTD.",
      contact:
        "อาคาร เอส เอส พี ทาวเวอร์ 2 ห้องเลขที่ 116/46 ชั้น 12 เอ<br>ถนน ณ ระนอง แขวงคลองเตย เขตคลองเตย กรุงเทพมหานคร 10110<br> <br>E-Mail : narongvate@smsc.co.th<br>Tel : 02-671-3630-5 (อัตโนมัติ) <br>Fax : 02-671-3423-4",
      website: "http://www.smsc.co.th/web/",
    },
    {
      id: 87,
      nameTH: "บริษัท เอสซีจี โลจิสติกส์ แมเนจเม้นท์ จำกัด",
      nameEN: "SCG LOGISTICS MANAGEMENT CO,.LTD.",
      contact: "",
      website: "",
    },
    {
      id: 88,
      nameTH: "บริษัท เอสพีจี โลจิสติกส์ จำกัด",
      nameEN: "SPG LOGISTICS CO.,LTD.",
      contact:
        "20 Kasemrat Rd., Klongtoey, Bangkok 10110, Thailand.<br>  Tel: +66-2249-3682-4, +66-2249-6066  Fax: +66-2249-3690-1 Email:sales@spgint.com",
      website: "https://spgint.com/main.php",
    },
    {
      id: 89,
      nameTH: "บริษัท แอ็คทีฟ โลจิสติกส์ จำกัด",
      nameEN: "ACTIVE LOGISTICS CO., LTD.",
      contact:
        "ACTIVE LOGISTICS CO.,LTD.<br>124 Pattanachonnabot 3 Klongsongtonnoon, Latkrabang, Bangkok 10520<br><br>TEL. (66)2326-3700<br>EMAIL. quote@active.co.th<br>",
      website: "https://www.active.co.th/",
    },
    {
      id: 90,
      nameTH: "บริษัท โอ.บี.ซี. แคร์ริเออร์ (ประเทศไทย) จำกัด",
      nameEN: "O.B.C. CARRIERS (THAILAND) CO.,LTD.",
      contact: "",
      website: "",
    },
    {
      id: 91,
      nameTH: "บริษัท โอ.บี.อินเตอร์เนชั่นแนล จำกัด",
      nameEN: "O.B. INTERNATIONAL CO., LTD.",
      contact: "",
      website: "",
    },
    {
      id: 92,
      nameTH: "บริษัท ไอดีล คอนโซลิเดเตอร์ จำกัด",
      nameEN: "IDEAL CONSOLIDATORS CO.,LTD.",
      contact:
        "65/122-123 14 Fl. Rama IX Rd, Khwaeng Huai Khwang, Khet Huai Khwang, Krung Thep Maha Nakhon 10310, Thailand <br>TEL. 02-643-9860",
      website: "https://www.idealgroups.com/",
    },
    {
      id: 93,
      nameTH: "บริษัท ไอโอนิค โลจีสติกส์ จำกัด",
      nameEN: "IONIC LOGISTICS CO.,LTD.",
      contact: "",
      website: "",
    },
    {
      id: 94,
      nameTH: "บริษัท ไฮเวย์ ชิปปิ้ง จำกัด",
      nameEN: "HIGHWAY SHIPPING CO.,LTD.",
      contact:
        "No.220/1 Soi Onnut40 Village Phatthanaphon Road Suanluang,<br>Suan Luang, Bangkok, Thailand<br><br>Tel.02 722 4515-16 , 063 664 5190<br>Email : cs@highwaysshipping.com<br>FB : Highways Shipping",
      website: "https://www.highwaysshipping.com/",
    },
    {
      id: 95,
      nameTH: "บริษัท โกลบอล เพาเวอร์ โลจิสติคส์ เซอร์วิสเซส (ไทยแลนด์) จำกัด",
      nameEN: "GLOBAL POWER LOGISTICS SERVICES (THAILAND) CO.,LTD",
      contact:
        "BLK 221 Henderson Road, #01-04 Henderson Building, Singapore 159557<br><br>Tel: +65 6278 5122     FAX: +65 6278 5182<br>Email: sales@sin.global-gp.com",
      website: "https://www.global-gp.com/",
    },
    {
      id: 96,
      nameTH: "บริษัท ฮิตาชิ ทรานสปอร์ต ซิสเต็ม แวนเทค (ประเทศไทย) จำกัด",
      nameEN: "HITACHI TRANSPORT SYSTEM VANTEC (THAILAND) LTD.",
      contact: "",
      website: "https://www.logisteed.com/en/",
    },
    {
      id: 97,
      nameTH: "บริษัท ไอ.เอ็ม.ที.โลจิสติกส์ 1979 จำกัด",
      nameEN: "I.M.T.LOGISTICS 1979 CO.,LTD.",
      contact:
        "61/189-191 Rama 9 Road, Huai Kwang, Bangkok 10310,Thailand<br>Tel : +66(0)2 643 1178<br>Customer Care : imt@imtgroup.net",
      website: "https://www.imtgroup.net/",
    },
    {
      id: 98,
      nameTH: "บริษัท ยูเนี่ยน เฟรท ฟอร์เวิดเดอร์ จำกัด",
      nameEN: "UNION FREIGHT FORWARDER CO.,LTD.",
      contact: "",
      website:
        "https://www.facebook.com/p/UNION-FREIGHT-FORWARDER-COLTD-100069502659919/",
    },
    {
      id: 99,
      nameTH: "บริษัท โปรเฟรท เอ็กซ์เพรส จำกัด",
      nameEN: "PROFREIGHT EXPRESS CO.,LTD.",
      contact:
        "19 Srinakarin Road, North Bangna, Bangna, Bangkok, Thailand 10260<br>EMAIL : maildesk@profrtgroup.com info@profrtgroup.com<br>TEL. (+66) 02-338-7488",
      website: "https://www.profrtgroup.com/",
    },
    {
      id: 100,
      nameTH: "บริษัท ลุค ฟาร์ มัลติ คาร์โก้ อินเตอร์เนชั่นแนล กรุ๊ป จำกัด",
      nameEN: "LOOK FAR MULTI CARGO INTERNATIONAL GROUP.CO.,LTD.",
      contact:
        "5/5 ซอยอนามัย, ถนนศรีนครินทร์, แขวงสวนหลวง, เขตสวนหลวง, กรุงเทพฯ 10250<br><br>โทร: 02-183-6156-9<br>แฟกซ์: 02-183-6160-1<br>อีเมล์: phattharaphornt@lookfargroup.com",
      website: "https://lookfargroup.com/th/",
    },
    {
      id: 101,
      nameTH: "บริษัท แมคอินเตอร์ชิปปิ้งแอนด์เซอร์วิส จำกัด",
      nameEN: "MAC INTER SHIPPING AND SERVICE CO.,LTD.",
      contact: "",
      website: "",
    },
    {
      id: 102,
      nameTH: "บริษัท เฟดเดอรัล เอ็กซ์เพรส (ประเทศไทย) จำกัด",
      nameEN: "FEDERAL EXPRESS (THAILAND) LTD.",
      contact: "",
      website: "https://www.fedex.com/en-th/home.html",
    },
    {
      id: 103,
      nameTH: "บริษัท สยามคอนเทนเนอร์เทอร์มินอล จำกัด",
      nameEN: "SIAM CONTAINER TERMINAL CO.,LTD",
      contact:
        "บริษัท สยามคอนเทนเนอร์เทอร์มินอล จำกัด<br>102 หมู่ 2 ต.บางเสาธง อ.บางเสาธง จ.สมุทรปราการ 10570<br><br>Phone:<br>Tel : 02-338-1425-36<br>Tel2 : 02-708-1011-20<br>Fax : 02-708-1086-8<br><br>Email:<br>Customer Service: info@siamcontainer.com",
      website: "https://siamcontainer.com/default",
    },
    {
      id: 104,
      nameTH: "บริษัท ลิตคอน เอ็กซ์เพรส (ประเทศไทย) จำกัด",
      nameEN: "LITCON EXPRESS (THAILAND) CO.,LTD.",
      contact:
        "Address : 351/87 Praram 9 Road, Bangkapi Huay Khwang<br>Bangkok 10320, Thailand<br><br>Email : marketing@litgroupthailand.com<br>Tel : (662) 719-6003 (auto), (662) 319-7357-9<br>Fax : (662) 319-7568 ,(662) 719-6011-2",
      website: "http://www.litgroupthailand.com/",
    },
    {
      id: 105,
      nameTH: "บริษัท ยามาโตะ อุนยู (ประเทศไทย) จำกัด",
      nameEN: "YAMATO UNYU (THAILAND) CO.,LTD.",
      contact: "",
      website: "https://www.yamatothai.com/th/",
    },
    {
      id: 106,
      nameTH: "บริษัท มัลคา-อามิท (ประเทศไทย) จำกัด",
      nameEN: "MALCA-AMIT (THAILAND) CO.,LTD.",
      contact: "",
      website: "https://www.malca-amit.com/",
    },
    {
      id: 107,
      nameTH: "บริษัท แหลมฉบัง อิมเม็กซ์ จำกัด",
      nameEN: "LAEMCHABANG IMEX CO.,LTD",
      contact:
        "988/114-116 MOO 9, T.THUNGSUKHA, A.SRIRACHA ,CHONBURI 20230 <br>TEL. 038-494570<br>FAX. 038-494569",
      website: "https://www.laemchabangimex.com/",
    },
    {
      id: 108,
      nameTH: "บริษัท เดอะคาร์โกเอ๊กซ์เพรส โลจิสติกส์ จำกัด",
      nameEN: "THE CARGO EXPRESS LOGISTIC CO.,LTD.",
      contact:
        "ติดต่อเรา<br>สำนักงานท่าเรือ<br><br>69-71-73-75<br>ซอย ดำรงลัทธพิพัฒน์<br>ถนน อาจณรงค์ แขวงคลองเตย<br>เขตคลองเตย กรุงเทพฯ 10110<br>โทร: +66 2 249 2414 - 16<br>Email: info.cargothai@gmail.com<br><br>​",
      website: "https://www.thecargoexpress.com/th",
    },
    {
      id: 109,
      nameTH: "บริษัท คูห์เน่ พลัส นาเกิ้ล จำกัด",
      nameEN: "KUEHNE + NAGEL LIMITED",
      contact: "",
      website: "https://th.kuehne-nagel.com/th/",
    },
    {
      id: 110,
      nameTH: "บริษัท เอพีแอล โลจิสติคส์ เอสวีซีเอส ประเทศไทย จำกัด",
      nameEN: "APL LOGISTICS SVCS THAILAND LTD.",
      contact: "",
      website: "https://www.apllogistics.com/",
    },
    {
      id: 110,
      nameTH: "บริษัท เอพีแอล โลจิสติคส์ เอสวีซีเอส ประเทศไทย จำกัด",
      nameEN: "APL LOGISTICS SVCS THAILAND LTD.",
      contact: "",
      website: "https://www.apllogistics.com/",
    },
    {
      id: 111,
      nameTH: "บริษัท เอ็กเซล ทรานสปอร์ต อินเตอร์เนชั่นแนล จำกัด",
      nameEN: "EXCEL TRANSPORT INTERNATIONAL CO., LTD.",
      contact:
        "OVERSEAS PARTNER CONTACT<br>Midtown office<br>EMAIL : Partner@exctrans.co.th<br>Tel : +66 (0) 2254-5370-8<br>Fax : +66 (0) 22542119<br><br>CUSTOMER CONTACT<br>Airport office<br>EMAIL : Excel@exctrans.co.th<br>Tel : +66 (0) 2134-7341-44",
      website: "http://www.exceltransport.co.th/",
    },
    {
      id: 112,
      nameTH: "บริษัท ทรานส์ แอร์ คาร์โก้ จำกัด",
      nameEN: "TRANS AIR CARGO CO.,LTD.",
      contact:
        "Address: TAC HOUSE No.1 Soi Ruam Rudi, 3rd-4th Floor, Ploenchit Rd., Lumpini, Patumwan, Bangkok 10330<br><br>Tel: +66(0)2 650 9030-59<br>Fax: +66(0)2 651 4667-9<br><br>E-mail:<br>import@transaircargo.com<br>export@transaircargo.com",
      website: "https://www.transaircargo.com/",
    },
    {
      id: 113,
      nameTH: "บริษัท เซ้าท์อีสท์ โลจิสติกส์ จำกัด",
      nameEN: "SOUTHEAST LOGISTICS CO.,LTD",
      contact: "",
      website: "",
    },
    {
      id: 114,
      nameTH: "บริษัท ทรานซ์เวย์ เอ็กซ์เพรส จำกัด",
      nameEN: "TRANSWAY EXPRESS CO.,LTD",
      contact: "",
      website: "",
    },
    {
      id: 115,
      nameTH: "บริษัท สยามสากลบริการ จำกัด",
      nameEN: "SIAM INTERNATIONAL SERVICE LTD.",
      contact: "",
      website: "",
    },
    {
      id: 116,
      nameTH: "บริษัท เอ แอนด์ จี อินเตอร์เนชั่นแนล คาร์โก้ ไทยแลนด์ จำกัด",
      nameEN: "A&G INTERNATIONAL THAILAND CO.,LTD.",
      contact:
        "514/18 Regent Ratchada, Soi Ramkhamhaeng 39 (Thepleela 1) Ramkhamhaeng Rd., Wangthonglang ,Bangkok 10310, Thailand<br><br>Telephone : +66 0 2158 2552<br>Fax : +66 0 2158 2698 9<br>E-mail : ang@angth.com",
      website: "https://angth.com/index.php/home",
    },
    {
      id: 117,
      nameTH: "บริษัท วี.คาร์โก จำกัด",
      nameEN: "V.CARGO CO.,LTD",
      contact:
        "email: info@vcargo.co.th<br>phone: 02-9714227-9<br>facebook: vcargo",
      website: "https://www.vcargo.co.th/TH/index",
    },
    {
      id: 118,
      nameTH: "บริษัท เออีซี ฮับ โลจิสติกส์ (ไทยแลนด์) จำกัด",
      nameEN: "AEC HUB LOGISTICS (THAILAND) CO.,LTD.",
      contact: "",
      website: "",
    },
    {
      id: 119,
      nameTH:
        "บริษัท ไทยมาสเตอร์ ทรานสปอร์ต อินเตอร์เนชั่นแนล เซอร์วิส ที.เอ็ม.ที. จำกัด",
      nameEN: "THAI MASTER TRANSPORT INTERNATIONAL SERVICE T.M.T. CO.,LTD.",
      contact:
        "สำนักงานสุทธิสาร<br>91 ซอยอินทามระ 18 (วิภาวดี 4) ถนนวิภาวดี เขตดินแดง กรุงเทพฯ 10400 ประเทศไทย<br><br>โทรศัพท์ +66(0)-2690-8060<br>โทรสาร +66(0)-2690-8030<br>อีเมล sales@tmtcargo.com",
      website: "https://tmtcargo.com/th/",
    },
    {
      id: 120,
      nameTH: "บริษัท วานา อินเตอร์เซอร์วิส จำกัด",
      nameEN: "VANA INTER-SERVICE CO.,LTD",
      contact: "",
      website: "",
    },
    {
      id: 121,
      nameTH: "บริษัท เฟรท ลิ้งค์ส เอ็กซ์เพรส ประเทศไทย จำกัด",
      nameEN: "FREIGHT LINKS EXPRESS THAILAND CO.,LTD.",
      contact:
        "507/321 อาคารเฟรทลิ้งค์ส ซอยสาธุประดิษฐ์31 (หมู่บ้านนครไทยซอย4) ถนนสาธุประดิษฐ์ แขวงช่องนนทรี<br>ยานนาวากรุงเทพฯ10120 ประเทศไทย<br><br>อีเมล: center@freightlinks.co.th<br>โทรศัพท์: 02-2102888<br>โทรสาร: 02-2102894<br><br>http://www.fleth.co.th",
      website: "https://www.fleth.co.th/th/",
    },
    {
      id: 122,
      nameTH: "บริษัท เค.จี.เอ็ม.เซอร์วิส จำกัด",
      nameEN: "K.G.M.SERVICES CO.,LTD.",
      contact:
        "SSP Tower 2 116/65,67 18th Fl., Na Ranong Road, Klongtoey, Klongtoey, Bangkok 10110, Thailand<br>TEL：+66-2-671-2317",
      website: "https://www.mdlogis.co.jp/english/group/kgm/",
    },
    {
      id: 123,
      nameTH: "บริษัท ฮันคิว ฮันชิน เอ็กซ์เพรส (ประเทศไทย) จำกัด",
      nameEN: "HANKYU HANSHIN EXPRESS (THAILAND) CO.,LTD.",
      contact: "",
      website: "https://www.hh-express.com/en/global/thailand/",
    },
    {
      id: 124,
      nameTH: "บริษัท ชีฟ โอเวอร์ซี จำกัด",
      nameEN: "CHIEF OVERSEA",
      contact:
        "35/138 SOI LADPRAO 124 (SAWADDIKARN)<br>PLUBPLA, WANGTHONGLANG,<br>BANGKOK 10310 THAILAND<br><br>Tel. +6629341519 Fax. +6629341520<br>TAX ID 0205555002325<br>Email: saysamphan@chiefoversea.com",
      website: "https://www.chiefoversea.com/",
    },
    {
      id: 125,
      nameTH: "บริษัท ทีเอ็นทีที โลจีสติกส์ จำกัด",
      nameEN: "TNTT LOGISTICS LTD.",
      contact: "",
      website: "https://www.tiongnam.com/",
    },
    {
      id: 126,
      nameTH: "บริษัท สยาม คาร์โก้ ลอจีสติคส์ จำกัด",
      nameEN: "SIAM KARGO LOGISTICS CO.,LTD.",
      contact: "",
      website: "http://www.siamkargo.com/",
    },
    {
      id: 127,
      nameTH: "บริษัท แฟร์แอนด์แฟร์ชิปปิ้ง จำกัด",
      nameEN: "FAIRFAIR SHIPPING CO.,LTD.",
      contact: "",
      website: "",
    },
    {
      id: 128,
      nameTH: "บริษัท เดียร์บอร์น อินเตอร์เนชั่นแนล จำกัด",
      nameEN: "DEARBORN INTERNATIONAL CORPORATION LIMITED",
      contact:
        "บริษัท เดียร์บอร์น อินเตอร์เนชั่นแนล จำกัด<br><br>59 หมู่ 2 ถนนปู่เจ้าสมิงพราย ตำบลบางหญ้าแพรก<br>อำเภอพระประแดง จังหวัดสมุทรปราการ 10130 ประเทศไทย<br>โทร : 02-755-8025 ถึง 6<br>แฟ็กซ์ : 02-385-9042<br>อีเมล์ : info@dearborn.co.th",
      website: "https://www.dearborn.co.th/index-th.php",
    },
    {
      id: 129,
      nameTH: "บริษัท ยูพีเอส เอสซีเอส เซอร์วิสเซส ประเทศไทย จำกัด",
      nameEN: "UPS SCS SERVICES THAILAND LIMITED",
      contact: "",
      website: "",
    },
    {
      id: 130,
      nameTH: "บริษัท เอส.เอ็น.พี. ชิปปิ้ง กรุ๊ป จำกัด",
      nameEN: "S.N.P. SHIPPING GROUP CO., LTD.",
      contact:
        "40 Sukhumvit 62 Rd.<br>Phra Khanong-Tai,<br>Phra Khanong, Bangkok<br>10260, Thailand<br><br>TEL : 0-2333-1199<br>FAX : 0-2333-1166",
      website: "https://snp.co.th/",
    },
    {
      id: 131,
      nameTH: "ห้างหุ้นส่วนจำกัด ที.พี. คัสตอมส์ โบรคเกอร์ แอนด์ เซอร์วิส",
      nameEN: "TP CUSTOMS BROKER @ SERVICES LTD.,PART.",
      contact: "",
      website: "",
    },
    {
      id: 132,
      nameTH: "บริษัท ไพโอเนียร์ คาร์โก้ แหลมฉบัง จำกัด",
      nameEN: "PIONEER CARGO LAEMCHABANG CO.,LTD.",
      contact:
        "Pioneer Logistics Co, Ltd.<br><br>Email: cs-wh@pioneer.co.th<br>Tel: +666 4181 0214, +669 5371 5483",
      website: "https://www.pioneer.co.th/th/",
    },
    {
      id: 133,
      nameTH: "บริษัท เพาเวอร์เฟรท อินเตอร์เนชั่นแนล จำกัด",
      nameEN: "POWER FREIGHT INTERNATIONAL CO.,LTD.",
      contact: "",
      website: "",
    },
    {
      id: 134,
      nameTH: "บริษัท นิปปอน เอ็กซ์เพรส โลจิสติกส์ ประเทศไทย จำกัด",
      nameEN: "NIPPON EXPRESS LOGISTICS THAILAND CO.,LTD.",
      contact: "",
      website: "",
    },
    {
      id: 135,
      nameTH: "บริษัท จีโอดีส วิลสัน ทรานสปอร์ต จำกัด",
      nameEN: "GEODIS WILSON TRANSPORT CO.,LTD.",
      contact: "",
      website: "https://geodis.com/th-th",
    },
    {
      id: 136,
      nameTH: "บริษัท แมส ทรานสปอร์ต เอ็กซ์เพรส จำกัด",
      nameEN: "MASS TRANSPORT EXPRESS CO.,LTD.",
      contact: "",
      website: "",
    },
    {
      id: 137,
      nameTH: "บริษัท ฟูล เวล เฟรท (ประเทศไทย) จำกัด",
      nameEN: "FULL WELL FREIGHT (THAILAND) CO.,LTD.",
      contact:
        "116/71 SSP Tower 2, 19th Floor, Na Ranong Rd,<br>Khlong Toei, Khlong Toei, Bangkok 10110 Thailand<br><br>Tel: +66 2 119 5222 -39<br>Fax : +66 2 119 5377<br>Hot line : +66 95 204 9515.<br>Email: center@fullwellfreight.com<br>Hot Line : +669 5204 9515",
      website: "https://fullwellfreight.com/",
    },
    {
      id: 138,
      nameTH: "บริษัท ออเร้นจ์ อินเตอร์เฟรท จำกัด",
      nameEN: "ORANGE INTERFREIGHT CO.,LTD.",
      contact: "",
      website: "",
    },
    {
      id: 139,
      nameTH: "บริษัท เฟรทมาร์ก โลจิสติกส์ จำกัด",
      nameEN: "FREIGHT MARK LOGISTICS CO.,LTD.",
      contact: "",
      website: "https://www.freightmark.co.th/",
    },
    {
      id: 140,
      nameTH: "บริษัท ชัยรักษ์พัฒนา เซอร์วิส จำกัด",
      nameEN: "CHAIRAK DEVELOP SERVICE CO.,LTD.",
      contact:
        "บริษัท ชัยรักษ์พัฒนา เซอร์วิส จำกัด :<br>: Chairak Develop Service Co. Ltd ::<br>2029 / 24 - 28 อาคาร. เอช.พี.ทาวเวอร์ ชั้น 2<br>ถนนเจริญกรุง แขวงวัดพระยาไกร<br>เขตบางคอแหลม  กรุงเทพมหานคร  10120<br>โทร. 0-2675-0559-63    โทรสาร. 0-2675-1342",
      website: "http://www.chairak.co.th/contact.htm",
    },
    {
      id: 141,
      nameTH: "บริษัท ไพโอเนียร์ โอเชี่ยน เฟรท จำกัด",
      nameEN: "PIONEER OCEAN FREIGHT CO.,LTD.",
      contact:
        "HEAD OFFICE:<br><br>3656/30 RAMA 4 ROAD, KLONG TON, KLONG TOEYBANGKOK THAILAND 10110<br><br>TEL : +66 2 367-3655-68<br>FAX : +66 2 367-3651<br>E-MAIL : info@pioneergroup.in.th<br>E-MAIL : marketing@pioneergroup.in.th",
      website: "https://www.pioneergroup.in.th/",
    },
    {
      id: 142,
      nameTH: "บริษัท โนเบิ้ล-แจ๊ส จำกัด",
      nameEN: "NOBLE-JAZZ CO.,LTD.",
      contact: "",
      website: "",
    },
    {
      id: 143,
      nameTH: "บริษัท โอเอ็มเอส คาร์โก้ จำกัด",
      nameEN: "OMS CARGO CO.,LTD.",
      contact:
        "OCS THAILAND<br><br>OCS Head Office<br>OCS House 679/9 Soi 7, Lard Prao Rd., Chomphol, Chatuchak, Bangkok 10900 THAILAND<br>Tel : 66 (0) 2-797-8555<br>Fax : 66 (0) 2-797-8580<br>E-mail :",
      website: "https://www.ocs.co.th/en/default.asp",
    },
    {
      id: 144,
      nameTH: "บริษัท พี แอนด์ ดับบลิว เซอร์วิส จำกัด",
      nameEN: "P&W SERVICE LIMITED",
      contact: "",
      website: "",
    },
    {
      id: 145,
      nameTH: "บริษัท เจ.ยู.เอ.เอ็กซ์เพรส จำกัด",
      nameEN: "J.U.A.EXPRESS CO.,LTD.",
      contact: "",
      website: "",
    },
    {
      id: 146,
      nameTH: "บริษัท ทรานซี โลจิสติคส์ (ประเทศไทย) จำกัด",
      nameEN: "TRANCY LOGISTICS (THAILAND) CO.,LTD.",
      contact: "",
      website: "https://www.trancy.co.jp/",
    },
    {
      id: 147,
      nameTH: "บริษัท สแกนเวล โลจิสติกส์ (ประเทศไทย) จำกัด",
      nameEN: "SCANWELL LPGISTICS (THAILAND) CO.,LTD.",
      contact:
        "Tel: (852) 2796 0678, Fax: 2796 0038<br>Tel: (852) 2796 6262, Fax: 2795 1666",
      website: "https://www.scanwell.com/HOME/",
    },
    {
      id: 148,
      nameTH: "บริษัท ซีเจ โลจิสติคส์ ประเทศไทย จำกัด",
      nameEN: "CJ LOGISTICS THAILAND CO.,LTD.",
      contact: "",
      website: "https://www.cjlogistics.com/en/main",
    },
    {
      id: 149,
      nameTH: "บริษัท พร้อมท์ กรุ๊ป จำกัด",
      nameEN: "PROMPT GROUP CO.,LTD.",
      contact: "",
      website: "https://www.prompt-group.com/home/",
    },
    {
      id: 150,
      nameTH: "บริษัท ฮาร์เปอร์สเฟรท อินเตอร์เนชั่นแนล แอร์ คาร์โก้ จำกัด",
      nameEN: "HARPERS FREIGHT INTERNATIONAL AIR CARGO CO.,LTD.",
      contact:
        "2 Soi Romklao 38, Romklao Road,<br>Klongsampravej, Ladkrabang,<br>Bangkok 10520,<br>Thailand<br><br>Tel: + 66 2 327 9009<br>FAX: + 66 2 327 9000 - 1<br>Email: info@harpersfreight.com",
      website: "https://www.harpersfreight.com/en/",
    },
    {
      id: 151,
      nameTH: "บริษัท ฟูจิทรานส์ (ประเทศไทย) จำกัด",
      nameEN: "FUJITRANS (THAILAND) CO.,LTD.",
      contact:
        "HEAD OFFICE（Warehouse No.1, No.2）<br><br>509/4 Mu 3 Nongkham, Sriracha, Chonburi 20110, Thailand<br>TEL +66-3367-4831",
      website: "https://global.fujitrans.com/global/thailand/",
    },
    {
      id: 152,
      nameTH: "บริษัท มหาชัยทรานสปอร์ตเซอร์วิส จำกัด",
      nameEN: "MAHACHAI TRANSPORT SERVICE CO.,LTD.",
      contact: "",
      website: "",
    },
    {
      id: 153,
      nameTH: "บริษัท ไวส์ โลจิสติกส์ จำกัด (มหาชน)",
      nameEN: "WICE LOGISTICS PUBLIC COMPANY LIMITED",
      contact:
        "WICE Logistics Public Company Limited<br>88/8 ถนนนนทรี แขวงช่องนนทรี เขตยานนาวา กรุงเทพฯ 10120<br><br>โทรศัพท์ (662) 681-6181<br>แฟกซ์ (662) 681-6123<br>อีเมล info@wice.co.th",
      website: "https://www.wice.co.th/",
    },
    {
      id: 154,
      nameTH: "บริษัท บี.บี. โลจิสติกส์ (ประเทศไทย) จำกัด",
      nameEN: "B.B. LOGISTICS (THAILAND) CO.,LTD.",
      contact:
        "<br>TEL  02-369-6036 ต่อ 41<br>02-369-6042 ต่อ 44<br><br>Email :<br>Info-bb@bblogistics.co.th<br>enquiries@bblogistics.co.th",
      website: "https://www.bblogistics.co.th/",
    },
    {
      id: 155,
      nameTH: "บริษัท เอสซี อิมเม็กซ์ ทรานสปอร์ต จำกัด",
      nameEN: "SC IMEX TRANSPORT CO.,LTD.",
      contact: "",
      website: "",
    },
    {
      id: 156,
      nameTH:
        "บริษัท เอ็กซ์เซลเล้นท์ บิสเนส คอร์ปอร์เรชั่น อินเตอร์แนชชั่นแนล จำกัด",
      nameEN: "Excellent Business Corporation International Ltd.",
      contact:
        "2024/104-107 Rimtangrotfai-saipaknam Road, Prakanong, Klongtoey, Bangkok 10260,<br>Thailand<br><br>TEL. 0-2742-7851-5 / 0-2742-7858-60<br>EMAIL : mks@ebcitrade.com",
      website: "http://www.ebcitrade.com/",
    },
    {
      id: 157,
      nameTH: "บริษัท เอ็นเอ็นอาร์ โกลบอล โลจิสติคส์ (ประเทศไทย) จำกัด",
      nameEN: "NNR GOLBAL LOGISTICS (THAILAND) CO.,LTD",
      contact:
        "Address : 89 Motor-Way Road, Kweang Klongsongton-noon, Khet Lat Krabang, Bangkok 10520, Thailand <br> TEL. (+66)2184 9545 – 54",
      website: "https://nnrthailand.com/",
    },
    {
      id: 158,
      nameTH: "บริษัท เอบีซี เอ็กซ์ซิม แอนด์ คอนซัลท์ จำกัด",
      nameEN: "ABC EXIM & CONSULT COMPANY LIMITED",
      contact: "",
      website: "",
    },
    {
      id: 159,
      nameTH: "บริษัท จีทีแอล (ไทยแลนด์) จำกัด",
      nameEN: "GTL (THAILAND) CO., LTD.",
      contact:
        "281 ซ.รัชดาภิเษก 6 ถ.รัชดาภิเษก (ท่าพระ-ตากสิน) แขวงบุคโล เขตธนบุรี<br>กรุงเทพฯ 10600<br><br>เลขประจำตัวผู้เสียภาษี: 0105548033505<br>โทร: +662 460 2044-55  Fax: +662 460 2041 (แผนกชิปปิ้ง)<br>Fax: +662 460 2042 (ฝ่ายขาย)<br>Fax: +662 460 2043 (บัญชี, ฝ่ายบุคคล)",
      website: "https://www.gtl-thailand-logistics.com/th/",
    },
    {
      id: 160,
      nameTH: "บริษัท โลจิสติคส์ แมเนจเมนท์ เซอร์วิสเซส จำกัด",
      nameEN: "LOGISTICS MANAGEMENT SERVICES LIMITED",
      contact:
        "Address  :<br>2922/132, Charnissara Tower II, 3rd Floor, New Petchaburi Road, Bangkapi, Huaykwang, Bangkok 10310, Thailand<br><br>Phone : +66 2 716 5185 - 6, +66 2 716 5270,<br>+66 2 716 5275, +66 2 716 5367<br><br>Fax : +66 2 716 5187<br>Email : sale@logistics-man.com",
      website: "http://www.logistics-man.com/eng/home.php",
    },
    {
      id: 161,
      nameTH: "บริษัท โคโนอิเกะ เอเซีย (ประเทศไทย) จำกัด",
      nameEN: "KONOIKE ASIA (THAILAND) CO., LTD.",
      contact: "",
      website: "https://www.konoike.net/en/",
    },
    {
      id: 162,
      nameTH: "บริษัท บีโอพี เอ็กซ์เพรส จำกัด",
      nameEN: "BOP EXPRESS CO., LTD.",
      contact:
        "ที่อยู่<br>52/49 หมู่ที่ 9 ตำบลทุ่งสุขลา อำเภอศรีราชา จ.ชลบุรี 20230<br><br>อีเมล<br>sales@bopexpress.co.th<br><br>เบอร์โทรศัพท์<br>0-3849-3333, 0-3849-1495-6",
      website: "https://www.bopexpress.co.th/",
    },
    {
      id: 163,
      nameTH: "บริษัท เฮลแมน เวิร์ลไวด์ โลจิสติคส์ จำกัด",
      nameEN: "HELLMANN WORLDWIDE LOGISTICS CO.,LTD",
      contact: "",
      website: "https://www.hellmann.com/en",
    },
    {
      id: 164,
      nameTH: "บริษัท อินเตอร์คอสเพ็ด (ประเทศไทย) จำกัด",
      nameEN: "INTERCOSPED (THAILAND) COMPANY LIMITED",
      contact: "",
      website: "https://www.facebook.com/intercospedthailand/?locale=th_TH",
    },
    {
      id: 165,
      nameTH: "บริษัท บางกอก เทอร์มินอล โลจิสติกส์ จำกัด",
      nameEN: "ฺBangkok Terminal Logistics Co.,Ltd",
      contact:
        "127/25 อาคาร ปัญจธานีทาวเวอร์ ชั้น 20<br>ถนนนนทรี แขวงช่องนนทรี<br>เขตยาวนาวา กรุงเทพ 10120<br>ติดต่อเรา: +662-681-2005-9",
      website: "https://www.bkkterminal.com/",
    },
    {
      id: 166,
      nameTH: "บริษัท มนต์ โบรกเคอร์เรจ เซอร์วิส จำกัด",
      nameEN: "MON BROKERAGE SERVICES CO.,LTD.",
      contact: "",
      website: "",
    },
    {
      id: 167,
      nameTH: "บริษัท เลสชาโก้ คัสตอม เคลียเรนซ์ (ประเทศไทย) จำกัด",
      nameEN: "LESCHACO CUSTOMS CLEARANCE (THAILAND) LTD",
      contact: "",
      website: "https://www.leschaco.com/en/start.html",
    },
    {
      id: 168,
      nameTH: "บริษัท แพนโทส ลอจิสติกส์ (ประเทศไทย) จำกัด",
      nameEN: "PANTOS LOGISTICS (THAILAND) CO., LTD.",
      contact:
        "19th Floor, 193/77 Lake Ratchada Complex, Ratchadaphisek Rd, Khlong Toei, Bangkok, Thailand<br><br>TEL. +66-2-260-6321<br>EMAIL : hyunmyeong.choi@lxpantos.com",
      website: "https://www.lxpantos.com/en/company/global-networks/asia.do",
    },
    {
      id: 169,
      nameTH: "บริษัท ฟอร์แมลิตี้ โลจิสติกส์ จำกัด",
      nameEN: "FORMALITY LOGISTICS",
      contact: "",
      website: "",
    },
    {
      id: 170,
      nameTH: "บริษัท วายซีเอช (ประเทศไทย) จำกัด",
      nameEN: "YCH (THAILAND) CO.,LTD",
      contact: "",
      website: "https://www.ych.com/thailand",
    },
    {
      id: 171,
      nameTH: "บริษัท โบลโลเร่ โลจิสติคส์ (ประเทศไทย) จำกัด",
      nameEN: "BOLLORE LOGISTICS (THAILAND) CO.,LTD",
      contact: "",
      website: "https://www.cevalogistics.com/fr",
    },
    {
      id: 172,
      nameTH: "บริษัท โอกาโมโต ลอจิสติกส์ (ประเทศไทย) จำกัด",
      nameEN: "OKAMOTO LOGISTICS (THAILAND)CO.,LTD.",
      contact: "",
      website: "https://www.okalog.co.th/",
    },
    {
      id: 173,
      nameTH: "บริษัท แอลเอฟ โลจิสติกส์ ประเทศไทย จำกัด",
      nameEN: "LF Logistics Thailand Ltd.",
      contact: "",
      website: "",
    },
    {
      id: 174,
      nameTH: "บริษัท สยามเคมีคัล โลจิสติกส์ จำกัด",
      nameEN: "SIAM CHEMICAL LOGISTICS CO.,LTD.",
      contact:
        "ที่อยู่ : 183 ชั้น 8 อาคารรีเจ้นท์เฮ้าส์ ถนนราชดำริ แขวงลุมพินี เขตปทุมวัน<br>กทม. 10330<br><br>โทร : 02-254-5501<br>แฟกซ์ : 02-254-5503<br>อีเมล์ : info@scl-logistics.co.th",
      website: "https://www.scl-logistics.co.th/?lang=th",
    },
    {
      id: 175,
      nameTH: "บริษัท จีซี โลจิสติกส์ โซลูชั่นส์ จำกัด",
      nameEN: "GC LOGISTICS SOLUTIONS COMPANY LIMITED",
      contact:
        'Address<br>555/1, Energy Complex, Building A, 8th Floor, Vibhavadi Rangsit Road, Chatuchak, Bangkok 10900<br><br>Call Us<br>Tel : 02-140-3700 , Fax : 02-140-3701<br><br>facebook<br><a target="_blank" href="http://facebook.com/gclogisticssolutions">facebook.com/gclogisticssolutions</a>',
      website: "https://wha-gc.com/",
    },
    {
      id: 176,
      nameTH: "บริษัท บิลเลี่ยน โลจิสติกส์ จำกัด",
      nameEN: "BILLION LOGISTICS CO.,LTD.",
      contact:
        "Address :Billion Logistics Co., Ltd.                <br>43 Thai CC Tower, Room# 44 - 45, 4th.,Flr., South Sathorn Rd., Yananawa, Sathorn, Bangkok 10120, Thailand<br><br>Telephone :+66 (0) 2672 3833 – 4 Ext: 101<br>Fax :+66 (0) 2672 3822 - 3<br>Website :www.bl.co.th",
      website: "https://www.bl.co.th/2016/",
    },
    {
      id: 177,
      nameTH: "บริษัท รัตนโชติ โลจิสติกส์ จำกัด",
      nameEN: "RATTANACHOT LOGISTICS CO.,LTD.",
      contact: "",
      website:
        "https://www.facebook.com/p/Rattanachot-Logistics-100064627346173/",
    },
    {
      id: 178,
      nameTH: "บริษัท โลเจ็ม โลจิสติกส์ จำกัด",
      nameEN: "LOGEM LOGISTICS CO.,LTD.",
      contact: "",
      website: "https://www.logemlogistics.co.th/",
    },
    {
      id: 179,
      nameTH: "บริษัท เซ้าท์สตาร์ มารีน จำกัด",
      nameEN: "SOUTH STAR MARINE CO.,LTD.",
      contact: "",
      website: "",
    },
    {
      id: 180,
      nameTH: "บริษัท ลีโอ โกลบอล โลจิสติกส์ จำกัด มหาชน",
      nameEN: "LEO GLOBAL LOGISTICS PUBLIC COMPANY LIMITED",
      contact:
        "บริษัท ลีโอ โกลบอล โลจิสติกส์ จำกัด (มหาชน)<br><br>251-251/1 ซ.ภักดี ถ.พระราม3<br>แขวงบางคอแหลม เขตบางคอแหลม<br>กรุงเทพฯ 10120.<br>EMAIL : center@leogloballogistics.com<br>TEL. +66(0)2-079-9888 (อัตโนมัติ 50 สาย)",
      website: "https://leogloballogistics.com/th/",
    },
    {
      id: 181,
      nameTH: "บริษัท ซีวา เฟรท ประเทศไทย จำกัด",
      nameEN: "CEVA FREIGHT THAILAND LTD.",
      contact: "",
      website:
        "https://www.cevalogistics.com/en/news-and-media/newsroom/press-release/ceva-moves-headoffice-in-thailand",
    },
    {
      id: 182,
      nameTH: "บริษัท สมาร์ท อะเลิร์ท จำกัด",
      nameEN: "SMART ALERT CO.,LTD.",
      contact: "",
      website: "",
    },
    {
      id: 183,
      nameTH: "บริษัท เอ-วอท โกลเบิล โลจิสติกส์ ไทยแลนด์ จำกัด",
      nameEN: "AWOT GLOBAL LOGISTICS THAILAND CO.,LTD.",
      contact: "",
      website: "https://www.awotglobal.com/",
    },
    {
      id: 184,
      nameTH: "บริษัท โลจิเทม ประเทศไทย จำกัด",
      nameEN: "LOGITEM THAILAND CO.,LTD.",
      contact:
        "75/22,27 Richmond Tower 11th Fl., Sukhumvit 26 (Ari)<br>Sukhumvit Rd., Klongton, Klongtoey, Bangkok ,10110 Thailand<br><br>Tel. +662-665-6973 to 8",
      website: "https://www.logitem.co.th/",
    },
    {
      id: 185,
      nameTH: "บริษัท แอร์ ซี เอ็กซ์เพรส จำกัด",
      nameEN: "AIR SEA EXPRESS CO.,LTD.",
      contact: "",
      website: "http://www.ase-airsea.com/",
    },
    {
      id: 186,
      nameTH: "บริษัท ทรีเอ็กซ์ โลจิสติกส์ จำกัด",
      nameEN: "3X LOGISTICS COMPANY LIMITED",
      contact: "",
      website: "https://www.3xlogistics.com/",
    },
    {
      id: 187,
      nameTH: "บริษัท รีเฟอร์ เอ็กซเพรส จำกัด",
      nameEN: "REEFER EXPRESS CO.,LTD.",
      contact:
        "ที่อยู่ : 88 หมู่ 1 ต.บางกล่ำ อ.บางกล่ำ จ.สงขลา 90220<br>ข้อมูลติดต่อลาน<br>โทร : +6674 300343",
      website: "https://thaireefer.co.th/th/",
    },
    {
      id: 188,
      nameTH: "บริษัท นิปปอน เฟรท ฟอร์เวิร์ดเดอร์ เซอร์วิส จำกัด",
      nameEN: "NIPPON FREIGHT FORWARDER SERVICE CO.,LTD.",
      contact: "",
      website: "",
    },
    {
      id: 189,
      nameTH: "บริษัท เอทีเอส ชิปปิ้ง จำกัด",
      nameEN: "ATS SHIPPING CO.,LTD.",
      contact: "",
      website: "https://www.atsshipping.com.pk/",
    },
    {
      id: 190,
      nameTH: "บริษัท นิปปอน คอนโป ประเทศไทย จำกัด",
      nameEN: "NIPPON KONPO THAILAND CO.,LTD.",
      contact: "",
      website: "http://www.nkt.co.th/index.php?mo=10&amp;amp;art=42098788",
    },
    {
      id: 191,
      nameTH: "บริษัท อิสเทิร์น วินด์ เฟรท ประเทศไทย จำกัด",
      nameEN: "EASTERN WIND FREIGHT THAILAND CO.,LTD.",
      contact: "",
      website: "",
    },
    {
      id: 192,
      nameTH: "บริษัท กฤษฎา สเปเชียลตี้ จำกัด",
      nameEN: "KRISADA SPECIALTIES CO.,LTD.",
      contact: "",
      website: "",
    },
    {
      id: 193,
      nameTH: "บริษัท เอ็นเอส โลจีสติกส์ จำกัด",
      nameEN: "NS LOGISTICS CO.,LTD.",
      contact:
        "เอ็นเอสโลจีสติกส์ (สำนักงานใหญ่)<br>199 ซ.อ่อนนุช 30 สวนหลวง กรุงเทพฯ 10250<br><br>Tel. +66 (0) 2-716-2652-3 Fax.+66 (0) 2-742-0129<br>Email: info@ns-logistic.com",
      website:
        "http://ns-logistic.com/?fbclid=IwY2xjawGmvDhleHRuA2FlbQIxMAABHTWU8txupmGlB2K8SSAVrtdIu_ksVsGjzHM2UyNzubM8RLHlEGJbC2W41w_aem_nTut57Ut6iCpQtvr33u4wQ",
    },
  ];

  const rowsPerPage = 20;
  let currentPage = 1;

  function displayTable(page) {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedAgents = agents.slice(start, end);

    const tableBody = document.getElementById("agentTableBody");
    tableBody.innerHTML = "";

    paginatedAgents.forEach((agent) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <th scope="row">${agent.id}</th>
        <td>${agent.nameTH}</td>
        <td>${agent.nameEN}</td>
        <td>${agent.contact}</td>
        <td><a target="_blank" href="${agent.website}">${agent.website}</a></td>
      `;
      tableBody.appendChild(row);
    });
  }

  function setupPagination() {
    const pageCount = Math.ceil(agents.length / rowsPerPage);
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    for (let i = 1; i <= pageCount; i++) {
      const pageItem = document.createElement("li");
      pageItem.className = "page-item";
      pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
      pageItem.addEventListener("click", function (e) {
        e.preventDefault();
        currentPage = i;
        displayTable(currentPage);
      });
      pagination.appendChild(pageItem);
    }
  }

  displayTable(currentPage);
  setupPagination();
});
