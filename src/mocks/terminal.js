import { rest } from 'msw';

export const terminals = [
  rest.get('/terminal-list', (req, res, ctx) => {
    return res(
      ctx.json({Response:	{"type":"SUCCESS","data":[{"depName":"ASSEMBLY","depCode":"A","shopCode":"A","filterBaseds":[{"filterCode":"AONAY","linkCount":1,"userDesc":"Son Onay","termName":"ASSY KONFİRMAYSON"},{"filterCode":"DUZ","linkCount":1,"userDesc":"Hata düzeltme","termName":"ASSY HATA DÜZELTME"},{"filterCode":"HATA","linkCount":1,"userDesc":"Hata giriş","termName":"ASSY HATA GİRİŞ"},{"filterCode":"HOLD","linkCount":1,"userDesc":"Kontrol Amaçlı Araç Seçme","termName":"Araç Hold"},{"filterCode":"SORGU","linkCount":1,"userDesc":"Hızlı Sorgu Sayfası","termName":"HATA SORGULAMA"},{"filterCode":"TAMIR","linkCount":1,"userDesc":"Inline tamir","termName":"ASSY IN LINE TAMİR"}]},{"depName":"ASSEMBLY QS","depCode":"AQS","shopCode":"A","filterBaseds":[{"filterCode":"A.HRG","linkCount":1,"userDesc":"Hata giriş","termName":"PARÇA PROB."},{"filterCode":"AQS0","linkCount":9}]},{"depName":"Assembly Repair","depCode":"AR","shopCode":"A","filterBaseds":[{"filterCode":"ANALİ","linkCount":3},{"filterCode":"I/L","linkCount":1,"userDesc":"Inline tamir","termName":"ASSY INLINE REPAIR"},{"filterCode":"KONFI","linkCount":1,"userDesc":"Son Onay","termName":"H-Hold Onaylama"},{"filterCode":"O/L","linkCount":1,"userDesc":"Offline tamir","termName":"OFF LINE REPAIR"},{"filterCode":"OREP","linkCount":1,"userDesc":"Tamir Düzeltme","termName":"OFF LINE TAMİR DÜZELT"}]},{"depName":"Assembly Repair Kritik","depCode":"ARS","shopCode":"A","filterBaseds":[{"filterCode":"AR","linkCount":2}]},{"depName":"PRESS PROCESS","depCode":"PRP","shopCode":"P","filterBaseds":[{"filterCode":"IPI","linkCount":1,"userDesc":"Hata giriş","termName":"IPI"},{"filterCode":"P1A","linkCount":1,"userDesc":"Hata giriş","termName":"PRESS 1A HATTI"},{"filterCode":"P2C","linkCount":1,"userDesc":"Hata giriş","termName":"PRESS 2C HATTI"},{"filterCode":"P3A","linkCount":1,"userDesc":"Hata giriş","termName":"PRESS 3A HATTI"},{"filterCode":"PBL","linkCount":1,"userDesc":"Hata giriş","termName":"PRESS BLANKING HATTI"}]},{"depName":"Assembly Inspection","depCode":"AI","shopCode":"QA","filterBaseds":[{"filterCode":"EQ SP","linkCount":4},{"filterCode":"HAT","linkCount":27},{"filterCode":"I/L","linkCount":1,"userDesc":"Hata düzeltme","termName":"HATA DÜZELTME"},{"filterCode":"KONF.","linkCount":2},{"filterCode":"KONFI","linkCount":1,"userDesc":"Transfer","termName":"AI SPEC CAMERA I/L KONF."},{"filterCode":"OFFLI","linkCount":1,"userDesc":"Offline Takip","termName":"OFF LINE  TAKİP"},{"filterCode":"OTH","linkCount":4}]},{"depName":"Audit Yard Port Follow","depCode":"TLST","shopCode":"QA","filterBaseds":[{"filterCode":"TLST","linkCount":4}]},{"depName":"COP Audit","depCode":"COP","shopCode":"QA","filterBaseds":[{"filterCode":"COP","linkCount":5},{"filterCode":"COPAN","linkCount":1,"userDesc":"Araç Analizi","termName":"COP ANALİZ"},{"filterCode":"COTAR","linkCount":1,"userDesc":"Araç Tarama","termName":"ARAÇ TARAMA"}]},{"depName":"Dynamic Audit","depCode":"DYN","shopCode":"QA","filterBaseds":[{"filterCode":"DYN","linkCount":4},{"filterCode":"OTH","linkCount":1,"userDesc":"Günlük Analiz","termName":"DİĞER İŞLER"}]},{"depName":"ECL","depCode":"ECL","shopCode":"QA","filterBaseds":[{"filterCode":"ECL","linkCount":2},{"filterCode":"SEÇ","linkCount":1,"userDesc":"Kontrol Amaçlı Araç Seçme","termName":"ECL ARAÇ SEÇME"}]},{"depName":"Field Quality Engineering","depCode":"FQE","shopCode":"QA","filterBaseds":[{"filterCode":"FACTI","linkCount":2}]},{"depName":"Henkaten Management","depCode":"HENKATEN","shopCode":"QA","filterBaseds":[{"filterCode":"HOLD","linkCount":1,"userDesc":"Son Onay","termName":"HOLD KONFİRMASYON"}]},{"depName":"MQE Analysis","depCode":"MQEA","shopCode":"QA","filterBaseds":[{"filterCode":"ANL","linkCount":8},{"filterCode":"CMM","linkCount":1,"userDesc":"Offline Takip","termName":"CCM OFF LINE TAKİP"},{"filterCode":"SORGU","linkCount":2}]},{"depName":"MQE Electric Analysis","depCode":"MQEE","shopCode":"QA","filterBaseds":[{"filterCode":"ELEKT","linkCount":2}]},{"depName":"Project AI","depCode":"QAP AI","shopCode":"QA","filterBaseds":[{"filterCode":"QA AI","linkCount":1,"userDesc":"Hata düzeltme","termName":"HATA DÜZELTME"}]},{"depName":"Project VPI","depCode":"QAP VPI","shopCode":"QA","filterBaseds":[{"filterCode":"HATA","linkCount":1,"userDesc":"Hata giriş","termName":"PROJE VPI HATA GİRİŞ"},{"filterCode":"HOLD","linkCount":1,"userDesc":"Kontrol Amaçlı Araç Seçme","termName":"HOLD ARAÇ SEÇME"}]},{"depName":"QA CVQS","depCode":"QU","shopCode":"QA","filterBaseds":[{"filterCode":"AQS0","linkCount":1,"userDesc":"Araç Sorgulama","termName":"ARAÇ BLİGİLERİ"}]},{"depName":"QA Paint Audit","depCode":"QAPA","shopCode":"QA","filterBaseds":[{"filterCode":"QAPA","linkCount":4}]},{"depName":"Receiving Inspection","depCode":"RI","shopCode":"QA","filterBaseds":[{"filterCode":"HOLD","linkCount":1,"userDesc":"Kontrol Amaçlı Araç Seçme","termName":"RI ARAÇ HOLD ETME"},{"filterCode":"RI","linkCount":1,"userDesc":"Inline tamir","termName":"IN LINE REPAIR RECEIVING INSPECTION"},{"filterCode":"RI0","linkCount":1,"userDesc":"Araç Analizi","termName":"RI  W/H ONARIM KAYIT"}]},{"depName":"Sampling Inspection","depCode":"SI","shopCode":"QA","filterBaseds":[{"filterCode":"SI","linkCount":4},{"filterCode":"SI0","linkCount":2},{"filterCode":"SI1","linkCount":1},{"filterCode":"SI2","linkCount":1,"userDesc":"Araç Analizi","termName":"SI ANALİZ"}]},{"depName":"Sampling Inspection 2","depCode":"SIO","shopCode":"QA","filterBaseds":[{"filterCode":"SIO","linkCount":1,"userDesc":"Araç Analizi","termName":"ARAÇ KAYIT  & HOLD & REPAIR "},{"filterCode":"SIO1","linkCount":3}]},{"depName":"Shipping Audit","depCode":"SHP","shopCode":"QA","filterBaseds":[{"filterCode":"SHP","linkCount":5},{"filterCode":"SHP1","linkCount":1,"userDesc":"Günlük Analiz","termName":"DİĞER AKTİVİTELER"}]},{"depName":"Shower","depCode":"SHW","shopCode":"QA","filterBaseds":[{"filterCode":"SHW","linkCount":3},{"filterCode":"SHW1","linkCount":1,"userDesc":"Hata giriş","termName":"SHW HATA GİRİŞİ"}]},{"depName":"VPI","depCode":"VPI","shopCode":"QA","filterBaseds":[{"filterCode":"HOLDI","linkCount":2},{"filterCode":"KONFI","linkCount":1,"userDesc":"Son Onay","termName":"VPI KONFİRMASYON"},{"filterCode":"OFFLN","linkCount":4},{"filterCode":"VPI","linkCount":3}]},{"depName":"Welding Audit","depCode":"WAU","shopCode":"QA","filterBaseds":[{"filterCode":"PWT","linkCount":7},{"filterCode":"SOR","linkCount":1,"userDesc":"Hızlı Sorgu Sayfası","termName":"W Audit Hızlı Sorgu"}]},{"depName":"Plastics Shop","depCode":"PLST","shopCode":"R","filterBaseds":[{"filterCode":"REP","linkCount":1,"userDesc":"Inline tamir","termName":"IN LINE TAMİR KAYIT"},{"filterCode":"SORGU","linkCount":1,"userDesc":"Hızlı Sorgu Sayfası","termName":"Plastik Hata Sorgu"}]},{"depName":"ED","depCode":"ED","shopCode":"T","filterBaseds":[{"filterCode":"ED0","linkCount":2},{"filterCode":"ED1","linkCount":2},{"filterCode":"ED2","linkCount":1,"userDesc":"Hata düzeltme","termName":"ED HATA DÜZELTME"}]},{"depName":"PRIMER","depCode":"PRM","shopCode":"T","filterBaseds":[{"filterCode":"PR0","linkCount":2},{"filterCode":"PR1","linkCount":2},{"filterCode":"PR2","linkCount":1,"userDesc":"Hata düzeltme","termName":"PR HATA DÜZELTME"}]},{"depName":"Paint Repair","depCode":"PR","shopCode":"T","filterBaseds":[{"filterCode":"REP","linkCount":3}]},{"depName":"TOSO PROCESS","depCode":"TP","shopCode":"T","filterBaseds":[{"filterCode":"REP","linkCount":1,"userDesc":"Inline tamir","termName":"TOSO INLINE REPAIR"},{"filterCode":"t1","linkCount":1,"userDesc":"Kontrol Amaçlı Araç Seçme","termName":"toso araç seçme"}]},{"depName":"TOSO QS ANALİZ ED","depCode":"TQSAED","shopCode":"T","filterBaseds":[{"filterCode":"ED-QS","linkCount":1,"userDesc":"Hata giriş","termName":"TOSO QS ANL. ED"}]},{"depName":"TOSO QS ANALİZ PRIMER","depCode":"TQSAPR","shopCode":"T","filterBaseds":[{"filterCode":"PR-QS","linkCount":1,"userDesc":"Hata giriş","termName":"TOSO QS ANL. PR"}]},{"depName":"TOSO QS ANALİZ WB","depCode":"TQSAWB","shopCode":"T","filterBaseds":[{"filterCode":"BIT","linkCount":1,"userDesc":"Hata giriş","termName":"WB BITONO"},{"filterCode":"HTDUZ","linkCount":1,"userDesc":"Hata düzeltme","termName":"HATA DÜZELTME QS"},{"filterCode":"SORGU","linkCount":1,"userDesc":"Hızlı Sorgu Sayfası","termName":"HIZLI SORGU"},{"filterCode":"WB-QS","linkCount":1,"userDesc":"Hata giriş","termName":"TOSO QS ANL. WB"}]},{"depName":"Top Coat","depCode":"TC","shopCode":"T","filterBaseds":[{"filterCode":"IN_R1","linkCount":1,"userDesc":"Inline tamir","termName":"Inline Repair R1"},{"filterCode":"RH2","linkCount":1,"userDesc":"Hata giriş","termName":"RH Inspection 2"},{"filterCode":"TC0","linkCount":2},{"filterCode":"TC1","linkCount":2},{"filterCode":"TC2","linkCount":1,"userDesc":"Hata düzeltme","termName":"TC HATA DÜZELTME"},{"filterCode":"THS","linkCount":1,"userDesc":"Hızlı Sorgu Sayfası","termName":"TOSO HIZLI SORGU"},{"filterCode":"TRAN1","linkCount":1,"userDesc":"Transfer","termName":"Topcoat Transfer 1"}]},{"depName":"Main Body","depCode":"MB","shopCode":"W","filterBaseds":[{"filterCode":"ABM","linkCount":1,"userDesc":"Araç Sorgulama","termName":"ARAÇ BİLGİLERİ M/B"},{"filterCode":"CON","linkCount":1,"userDesc":"Transfer","termName":"TRANSFER WELDING"},{"filterCode":"HDW","linkCount":2},{"filterCode":"MB","linkCount":4},{"filterCode":"MB1","linkCount":1,"userDesc":"Hata giriş","termName":"MAIN BODY 1"},{"filterCode":"MB2","linkCount":1,"userDesc":"Hata giriş","termName":"MAIN BODY 2"},{"filterCode":"MB3","linkCount":1,"userDesc":"Hata giriş","termName":"MAIN BODY 3"},{"filterCode":"MB4","linkCount":1,"userDesc":"Hata giriş","termName":"MAIN BODY 4"},{"filterCode":"MBHIZ","linkCount":1,"userDesc":"Hızlı Sorgu Sayfası","termName":"MB HIZLI SORGULAMA"},{"filterCode":"MBO","linkCount":4},{"filterCode":"MBT","linkCount":1,"userDesc":"Hata giriş","termName":"MAIN BODY BACK UP "},{"filterCode":"NPT","linkCount":1,"userDesc":"Hata giriş","termName":"NP CHECK"},{"filterCode":"SMKK","linkCount":1,"userDesc":"Hata giriş","termName":"SIDE MEMBER KALİTE KONTROL TERMİNALİ"},{"filterCode":"USP","linkCount":1,"userDesc":"Hata giriş","termName":"ULTRASONIC INSPECTION"}]},{"depName":"S/A PATROL","depCode":"SAP","shopCode":"W","filterBaseds":[{"filterCode":"SAPA","linkCount":1,"userDesc":"Hata giriş","termName":"S/A PATROL INSP."},{"filterCode":"SWLI","linkCount":1,"userDesc":"Hata giriş","termName":"WATERLEAK INSP."}]},{"depName":"Shell Body","depCode":"SB","shopCode":"W","filterBaseds":[{"filterCode":"1","linkCount":1,"userDesc":"Holding Ekranı","termName":"SHELL BODY HOLDING"},{"filterCode":"CON","linkCount":1,"userDesc":"Son Onay","termName":"KONFİRMASYON WELDING"},{"filterCode":"DRM","linkCount":1,"userDesc":"Hata giriş","termName":"DARK ROOM"},{"filterCode":"KKT","linkCount":1,"userDesc":"Hata giriş","termName":"KALİTE KAPISI TERMİNALİ"},{"filterCode":"OFFT","linkCount":1,"userDesc":"Offline Takip","termName":"OFFLINE TAKİP"},{"filterCode":"SB","linkCount":2},{"filterCode":"SBCL","linkCount":1,"userDesc":"Hata giriş","termName":"SB CTR LH"},{"filterCode":"SBCR","linkCount":1,"userDesc":"Hata giriş","termName":"SB CTR RH"},{"filterCode":"SBF","linkCount":1,"userDesc":"Hata giriş","termName":"SB FRONT"},{"filterCode":"SBFL","linkCount":1,"userDesc":"Hata giriş","termName":"SB FR LH"},{"filterCode":"SBFR","linkCount":1,"userDesc":"Hata giriş","termName":"SB FR RH"},{"filterCode":"SBI","linkCount":1,"userDesc":"Inline tamir","termName":"(SB) IN LINE WELDING"},{"filterCode":"SBIR","linkCount":1,"userDesc":"Inline tamir","termName":"(SB) INLINE WELDING RH"},{"filterCode":"SBIT","linkCount":1,"userDesc":"Inspection Takip","termName":"S/B INSPECTION TAKİP"},{"filterCode":"SBITL","linkCount":1,"userDesc":"Inline tamir","termName":"SB Inline Tamir LH"},{"filterCode":"SBITR","linkCount":1,"userDesc":"Inline tamir","termName":"SB Inline Tamir RH"},{"filterCode":"SBKK","linkCount":1,"userDesc":"Hata giriş","termName":"SHELL BODY KALİTE KONTROL TERMİNALİ"},{"filterCode":"SBO","linkCount":1,"userDesc":"Offline tamir","termName":"(SB) OFFLINE WELDING"},{"filterCode":"SBRL","linkCount":1,"userDesc":"Hata giriş","termName":"SB RR LH"},{"filterCode":"SBRR","linkCount":1,"userDesc":"Hata giriş","termName":"SB RR RH"},{"filterCode":"SBTL","linkCount":1,"userDesc":"Hata giriş","termName":"SB TEMİZLİK LH"},{"filterCode":"SBTR","linkCount":1,"userDesc":"Hata giriş","termName":"SB TEMİZLİK RH"}]},{"depName":"Under Body","depCode":"UB","shopCode":"W","filterBaseds":[{"filterCode":"TPC","linkCount":1,"userDesc":"Hata giriş","termName":"TPCA 1 UNDER BODY"},{"filterCode":"UB1","linkCount":1,"userDesc":"Hata giriş","termName":"UNDER BODY 1"},{"filterCode":"UB2","linkCount":1,"userDesc":"Hata giriş","termName":"UNDER BODY 2"},{"filterCode":"UB3","linkCount":1,"userDesc":"Hata giriş","termName":"UNDER BODY 3"},{"filterCode":"UB4","linkCount":1,"userDesc":"Hata giriş","termName":"UNDER BODY 4"},{"filterCode":"UB5","linkCount":1,"userDesc":"Hata giriş","termName":"UNDER BODY 5"},{"filterCode":"UBBE","linkCount":1,"userDesc":"Hata giriş","termName":"Under Body Big Eye"},{"filterCode":"UBKK","linkCount":1,"userDesc":"Hata giriş","termName":"UNDER BODY KALİTE KONTROL TERMİNALİ"},{"filterCode":"UBO","linkCount":1,"userDesc":"Hata giriş","termName":"UNDER BODY OFFLINE INSP."},{"filterCode":"USK","linkCount":2}]},{"depName":"WELDING PRIMER","depCode":"WPR","shopCode":"W","filterBaseds":[{"filterCode":"PIW","linkCount":1,"userDesc":"Hata giriş","termName":"WELDING PRIMER INSPECTION"},{"filterCode":"POW","linkCount":1,"userDesc":"Offline tamir","termName":"(PRIMER) OFFLINE WELDING"}]},{"depName":"WELDING PROCESS","depCode":"WPC","shopCode":"W","filterBaseds":[{"filterCode":"WPR","linkCount":1,"userDesc":"Hata giriş","termName":"ALT PARÇA GİRİŞ"},{"filterCode":"WPRO","linkCount":1,"userDesc":"Offline tamir","termName":"ALT PARÇA TAMİR"}]},{"depName":"WELDING TOP COAT","depCode":"WTC","shopCode":"W","filterBaseds":[{"filterCode":"LKI","linkCount":1,"userDesc":"Hata giriş","termName":"LAKER INSPECTION"},{"filterCode":"TCK","linkCount":1,"userDesc":"Hata giriş","termName":"TOP COAT KAÇAN HATA"},{"filterCode":"TOW","linkCount":1,"userDesc":"Offline tamir","termName":"(TC) OFFLINE WELDING"},{"filterCode":"W(TC)","linkCount":1,"userDesc":"Hata giriş","termName":"TOP COAT"},{"filterCode":"WLI","linkCount":1,"userDesc":"Inline tamir","termName":"LACKER INLINE REPAIR"},{"filterCode":"WLO","linkCount":1,"userDesc":"Offline tamir","termName":"LACKER OFFLINE"},{"filterCode":"WTC","linkCount":1,"userDesc":"Inline tamir","termName":"INLINE TOP COAT"}]},{"depName":"Welding ED","depCode":"WED","shopCode":"W","filterBaseds":[{"filterCode":"EDCL","linkCount":1,"userDesc":"Hata giriş","termName":"Welding ED CTR LH"},{"filterCode":"EDCR","linkCount":1,"userDesc":"Hata giriş","termName":"Welding ED CTR RH"},{"filterCode":"EDFL","linkCount":1,"userDesc":"Hata giriş","termName":"Welding ED FR LH"},{"filterCode":"EDFR","linkCount":1,"userDesc":"Hata giriş","termName":"Welding ED FR RH"},{"filterCode":"EDRL","linkCount":1,"userDesc":"Hata giriş","termName":"Welding  ED RR LH"},{"filterCode":"EDRR","linkCount":1,"userDesc":"Hata giriş","termName":"Welding ED RR RH"},{"filterCode":"EDT","linkCount":1,"userDesc":"Inline tamir","termName":"ED INLINE TAMİR"},{"filterCode":"EOW","linkCount":1,"userDesc":"Offline tamir","termName":"(ED) OFFLINE WELDING"}]},{"depName":"Welding QS","depCode":"FIT","shopCode":"W","filterBaseds":[{"filterCode":"FIT","linkCount":1,"userDesc":"Inline tamir","termName":"FITTING INLINE TAMİR"},{"filterCode":"SBFL","linkCount":1,"userDesc":"Hata giriş","termName":"SHELL BODY FITTING LH"},{"filterCode":"SBFR","linkCount":1,"userDesc":"Hata giriş","termName":"SHELL BODY FITTING RH"}]},{"depName":"Welding Repair","depCode":"WR","shopCode":"W","filterBaseds":[{"filterCode":"AWR","linkCount":1,"userDesc":"Inline tamir","termName":"ASSEMBLY WELDING REPAIR"}]},{"depName":"General","filterBaseds":[{"filterCode":"000","linkCount":2},{"filterCode":"RO","linkCount":2},{"filterCode":"V","linkCount":1,"userDesc":"Araç Sorgulama","termName":"Araç Bilgisi"},{"filterCode":"W","linkCount":1,"userDesc":"Kontrol Amaçlı Araç Seçme","termName":"ARAÇ SEÇME"}]}]}																							})
    )
  }),
  rest.get('/:depcode/:filtercode',(req,res,ctx)=>{

    let terminal = {
      "type": "SUCCESS",
      "data": [
        {
          "termId": 82842,
          "depCode": "AI",
          "termName": "CHASSIS SPEC",
          "searchType": "A",
          "lastAssyNo": "770",
          "searchRequired": "Y",
          "line": "1",
          "filterCode": "HAT"
        },
        {
          "termId": 83993,
          "depCode": "AI",
          "termName": "CHASSIS-1",
          "searchType": "A",
          "lastAssyNo": "197",
          "searchRequired": "Y",
          "line": "1",
          "filterCode": "HAT"
        },
        {
          "termId": 76733,
          "depCode": "AI",
          "termName": "CHASSIS-2",
          "searchType": "A",
          "lastAssyNo": "222",
          "searchRequired": "Y",
          "line": "1",
          "filterCode": "HAT"
        },
        {
          "termId": 82843,
          "depCode": "AI",
          "termName": "DRIVER SPEC",
          "searchType": "A",
          "lastAssyNo": "682",
          "searchRequired": "Y",
          "line": "1",
          "filterCode": "HAT"
        },
        {
          "termId": 76736,
          "depCode": "AI",
          "termName": "E/G",
          "searchType": "A",
          "lastAssyNo": "683",
          "searchRequired": "Y",
          "line": "1",
          "filterCode": "HAT"
        },
        {
          "termId": 76734,
          "depCode": "AI",
          "termName": "E/G SPEK",
          "searchType": "A",
          "lastAssyNo": "683",
          "searchRequired": "Y",
          "line": "1",
          "filterCode": "HAT"
        },
        {
          "termId": 92341,
          "depCode": "AI",
          "termName": "FLEXIBLE",
          "searchType": "A",
          "lastAssyNo": "677",
          "searchRequired": "Y",
          "line": "1",
          "filterCode": "HAT"
        },
        {
          "termId": 83992,
          "depCode": "AI",
          "termName": "FONKSIYON",
          "searchType": "A",
          "lastAssyNo": "680",
          "searchRequired": "Y",
          "line": "1",
          "filterCode": "HAT"
        },
        {
          "termId": 91431,
          "depCode": "AI",
          "termName": "FR EXTERIOR LH",
          "searchType": "A",
          "lastAssyNo": "415",
          "searchRequired": "Y",
          "line": "1",
          "filterCode": "HAT"
        },
        {
          "termId": 91432,
          "depCode": "AI",
          "termName": "FR EXTERIOR RH",
          "searchType": "A",
          "lastAssyNo": "415",
          "searchRequired": "Y",
          "line": "1",
          "filterCode": "HAT"
        },
        {
          "termId": 93071,
          "depCode": "AI",
          "termName": "FR EXTERIOR SPEC",
          "searchType": "A",
          "lastAssyNo": "582",
          "searchRequired": "Y",
          "line": "1",
          "filterCode": "HAT"
        },
        {
          "termId": 76740,
          "depCode": "AI",
          "termName": "FR INTERIOR LH",
          "searchType": "A",
          "lastAssyNo": "000",
          "searchRequired": "Y",
          "line": "1",
          "filterCode": "HAT"
        },
        {
          "termId": 76738,
          "depCode": "AI",
          "termName": "FR INTERIOR RH",
          "searchType": "A",
          "lastAssyNo": "679",
          "searchRequired": "Y",
          "line": "1",
          "filterCode": "HAT"
        },
        {
          "termId": 76731,
          "depCode": "AI",
          "termName": "LH EXTERIOR",
          "searchType": "A",
          "lastAssyNo": "683",
          "searchRequired": "Y",
          "line": "1",
          "filterCode": "HAT"
        },
        {
          "termId": 91941,
          "depCode": "AI",
          "termName": "LH SIDE SPEC",
          "searchType": "A",
          "lastAssyNo": "682",
          "searchRequired": "Y",
          "line": "1",
          "filterCode": "HAT"
        },
        {
          "termId": 76732,
          "depCode": "AI",
          "termName": "RH EXTERIOR",
          "searchType": "A",
          "lastAssyNo": "684",
          "searchRequired": "Y",
          "line": "1",
          "filterCode": "HAT"
        },
        {
          "termId": 91942,
          "depCode": "AI",
          "termName": "RH SIDE SPEC",
          "searchType": "A",
          "lastAssyNo": "680",
          "searchRequired": "Y",
          "line": "1",
          "filterCode": "HAT"
        },
        {
          "termId": 82848,
          "depCode": "AI",
          "termName": "RR EXTERIOR  SPEC",
          "searchType": "A",
          "lastAssyNo": "519",
          "searchRequired": "Y",
          "line": "1",
          "filterCode": "HAT"
        },
        {
          "termId": 91433,
          "depCode": "AI",
          "termName": "RR EXTERIOR LH",
          "searchType": "A",
          "lastAssyNo": "478",
          "searchRequired": "Y",
          "line": "1",
          "filterCode": "HAT"
        },
        {
          "termId": 91434,
          "depCode": "AI",
          "termName": "RR EXTERIOR RH",
          "searchType": "A",
          "lastAssyNo": "477",
          "searchRequired": "Y",
          "line": "1",
          "filterCode": "HAT"
        },
        {
          "termId": 82847,
          "depCode": "AI",
          "termName": "RR INTERIOR LH",
          "searchType": "A",
          "lastAssyNo": "680",
          "searchRequired": "Y",
          "line": "1",
          "filterCode": "HAT"
        },
        {
          "termId": 82846,
          "depCode": "AI",
          "termName": "RR INTERIOR RH",
          "searchType": "A",
          "lastAssyNo": "682",
          "searchRequired": "Y",
          "line": "1",
          "filterCode": "HAT"
        },
        {
          "termId": 92280,
          "depCode": "AI",
          "termName": "RR ROOM",
          "searchType": "A",
          "lastAssyNo": "679",
          "searchRequired": "Y",
          "line": "1",
          "filterCode": "HAT"
        },
        {
          "termId": 93065,
          "depCode": "AI",
          "termName": "RR ROOM SPEC",
          "searchType": "A",
          "lastAssyNo": "678",
          "searchRequired": "Y",
          "line": "1",
          "filterCode": "HAT"
        },
        {
          "termId": 92281,
          "depCode": "AI",
          "termName": "SIDE EXTERIOR LH",
          "searchType": "A",
          "lastAssyNo": "678",
          "searchRequired": "Y",
          "line": "1",
          "filterCode": "HAT"
        },
        {
          "termId": 92282,
          "depCode": "AI",
          "termName": "SIDE EXTERIOR RH",
          "searchType": "A",
          "lastAssyNo": "678",
          "searchRequired": "Y",
          "line": "1",
          "filterCode": "HAT"
        },
        {
          "termId": 76741,
          "depCode": "AI",
          "termName": "INLINE KONFİRME",
          "searchType": "B",
          "lastAssyNo": "579",
          "searchRequired": "Y",
          "line": "1",
          "filterCode": "HAT"
        }
      ]
    };

    let filter_data = terminal.data?.map((el)=>{
      if(el.filterCode == req.params.filtercode) return el;
    });   
    
    return res(
      ctx.json({Response:{filter_data}})
    );
  })
]