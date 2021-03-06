import { randomNumberGenerator } from "../../RandomNumberGenerator";

export const FIRST_NAMES = [
  `Malachi`,
  `Luke`,
  `Cortez`,
  `Ray`,
  `Dashiell`,
  `Nadia`,
  `Donatella`,
  `Karl`,
  `Sonya`,
  `Klaus`,
  `Nicole`,
  `Hanna`,
  `Wang Xiu`,
  `Li`,
  `Kuki`,
  `Mercy`,
  `Jesse`,
  `Bilal`,
  `Hector`,
  `Gambio`,
  `Selena`,
  `Amir`,
  `Yousef`,
  `Khalil`,
  `Otgonbayar`,
  `Batbayar`,
  `Antonia`,
  `Juliana`,
  `Marcia`,
  `Evander`,
  `Estelle`,
  `Dutch`,
  `Sadie`,
  `Lucky`,
  `Darren`,
  `Sinead`,
  `Ellis`,
  `William`,
  `Enoch`,
  `Uriel`,
  `Scott`,
  `Ambrose`,
  `Rachel`,
  `Asher`,
  `Haing`,
  `Someth`,
  `Haxhi`,
  `Griselda`,
  `Chino`,
  `Claudia`,
  `Johnny`,
  `Roy`,
  `Audrina`,
  `Regina`,
  `Stella`,
  `Peter`,
  `Louis`,
  `Dutch`,
  `Joey`,
  `Ilse`,
  `Minal`,
  `Falak`,
  `Jasper`,
  `Yasuko`,
  `Rumi`,
  `Minami`,
  `Lemon`,
  `Aiko`,
  `Munroe`,
  `Zelag`,
  `Murat`,
  `Gunnel`,
  `Sarah`,
  `Kjell`,
  `Vilgot`,
  `Borje`,
  `Pelle`,
  `Mai`,
  `Stoffe`,
  `Sylvie`,
  `Alexis`,
  `Med`,
  `Jerome`,
  `Bernth`,
  `Odafin`,
  `Selden`,
  `Ngugi`,
  `Nripen`,
  `Gaur`,
  `Arvind`,
  `Frances`,
  `Magdalena`,
  `Marcus`,
  `Alaistair`,
  `Chuck`,
  `Jonesy`,
  `Marshall`,
  `Carter`,
  `Jackson`,
  `Khanh`,
];

export const LAST_NAMES = [
  `Rex`,
  `Honey`,
  `Castro`,
  `Hammett`,
  `Chandler`,
  `Federov`,
  `Langerfeld`,
  `Nadeau`,
  `Berlin`,
  `Singh`,
  `Vassily`,
  `Kollontai`,
  `Ying`,
  `Wei`,
  `Synovate`,
  `Chivers`,
  `Bell`,
  `Said`,
  `Rios`,
  `Bonanno`,
  `Garcia`,
  `Raja`,
  `Tengku`,
  `Wan`,
  `Sepp`,
  `Rebane`,
  `Huseynova`,
  `Mammadova`,
  `Aliyev`,
  `Tyson`,
  `King`,
  `Schultz`,
  `Roth`,
  `Luciano`,
  `Hatch`,
  `Gothbeshire`,
  `Harlan`,
  `Staniforth`,
  `Donahue`,
  `Lewis`,
  `Belli`,
  `Carver`,
  `Locard`,
  `Marston`,
  `Bouillevaux`,
  `Ung`,
  `Bikakciu`,
  `Blanco`,
  `Antrax`,
  `Ochoa`,
  `Ajar`,
  `Lopez`,
  `Patridge`,
  `Bilson`,
  `Broussard`,
  `Budaj`,
  `Weinburg`,
  `Schultz`,
  `Noe`,
  `Von Klapper`,
  `Arora`,
  `Ali`,
  `Sharp`,
  `Takahashi`,
  `Kimata`,
  `Aoyama`,
  `Hanazawa`,
  `Fukui`,
  `Bergdorf`,
  `Goodman`,
  `Auberjonois`,
  `Thulin`,
  `Giercksky`,
  `Pink`,
  `Sjoman`,
  `Nyman`,
  `Lindberg`,
  `Zetterling`,
  `Liljedahl`,
  `Denis`,
  `Diament`,
  `Teynac`,
  `Fandor`,
  `Tutuola`,
  `Obiechina`,
  `West`,
  `Lo Liyong`,
  `Chakraborty`,
  `Venugopal`,
  `Ji`,
  `Farmer`,
  `Gagarina`,
  `Daly`,
  `Rabbitt`,
  `Delillo`,
  `Diosdado`,
  `Lynch`,
  `Harrison`,
  `Dukes`,
  `Lao`,
];

function genAndroidName() {
  const i = [
    "Dynamic-",
    "Efficient-",
    "Advanced-",
    "Uplinked-",
    "Networked-",
    "Counter-",
    "Upgraded-",
  ];
  const e = [
    "Repair",
    "Observation",
    "Intelligence",
    "Data",
    "Calculation",
    "Communications",
    "Discovery",
  ];
  return (
    i[randomNumberGenerator(i.length)] + e[randomNumberGenerator(e.length)]
  );
}

function genAndroidVersion() {
  const i = String(randomNumberGenerator(10000));
  const v = ["v-", "ver. ", "", "T-"];
  return v[randomNumberGenerator(v.length)] + i;
}

export const ANDROID_NAMES = [
  "Chromium",
  "Barium",
  "Thorium",
  "Radium",
  "Radon",
  "Argon",
  "Xenon",
  "Palladium",
  "Strontium",
  "Tellurium",
  genAndroidName(),
  genAndroidName(),
  genAndroidName(),
  genAndroidName(),
  genAndroidName(),
  genAndroidName(),
  genAndroidName(),
  genAndroidName(),
  genAndroidName(),
  genAndroidName(),
];

export const ANDROID_VERSION = [
  "Alpha",
  "Beta",
  "Gamma",
  "Delta",
  "Epsilon",
  "Zeta",
  "Theta",
  "Iota",
  "Omicron",
  "Rho",
  "Sigma",
  "Tau",
  "Omega",
  "Tarsos",
  genAndroidVersion(),
  genAndroidVersion(),
  genAndroidVersion(),
  genAndroidVersion(),
  genAndroidVersion(),
  genAndroidVersion(),
  genAndroidVersion(),
  genAndroidVersion(),
  genAndroidVersion(),
  genAndroidVersion(),
  genAndroidVersion(),
  genAndroidVersion(),
  genAndroidVersion(),
  genAndroidVersion(),
  genAndroidVersion(),
];
