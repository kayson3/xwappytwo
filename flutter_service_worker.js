'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5c1999fed9a61f96cc6d19033d264ca7",
"version.json": "044900a42eb3e504a44ced727635fea6",
"splash/img/light-background.png": "ee8b65c4a93e95f7be9047ebe28ea5ee",
"index.html": "2e739514a7f088d4551e562a261c611c",
"/": "2e739514a7f088d4551e562a261c611c",
"main.dart.js": "75ff7a7e12627e0612eca8c238b988b3",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fb3d573f34132ef611f0d46a2671affb",
".git/config": "484cdabc7b1c601771fe7ae17dcd4d21",
".git/objects/95/72d6f7f51b8532e9f34413d49406115a37d218": "1b0b3524532652d4cad435bbfaeab9d2",
".git/objects/66/fbe1a754cb2209c7a27a07f34c2fe88bfa7adc": "06b0ecdc7af36fecbaebc319ac5df149",
".git/objects/3e/a3e66b02d5ad19164b32bbe69ab26804348238": "e1a72c345a91f79354d82c70262bdd52",
".git/objects/68/14792abf49d6b66f132b3edb7b2ca1ae3e9ee3": "41531ed6f620e9d72b0e8e18131f2a6e",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/9b/84a623241ed2b18a534cf7cc0674ed2cb607ad": "7a6445e74a288673aa229a0482c2d231",
".git/objects/35/23965513b6d7c00ceb49a352a8db2913b211f7": "37ceffc2609a6261503b57b7732355c9",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/51/28233ca1a27fa9cabbf1d541b9fef85f2fae8c": "915fe16160b005296d3450653f4b496d",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/68af3aa1c6ee97ded3791c62972f667c6e1475": "67e584cd2a4b6690d3d0b2641d51f148",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/67/903a93a2cbbb1349a5d48fd0f24844fc4ef174": "f9f7b82bb6a047764c88ff4ec11e2a67",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/94/f6ac0149ea714fa816eb935bb9cc1f50d3019a": "b073f429e344d96613780bed70c6a9c1",
".git/objects/5a/03346236e78f23dd9d0a8a82348dd1a0b6b6f9": "f99fb66ddf9eed239ea1b923f661643e",
".git/objects/9c/f19871d1d85948934f566a7bfa6a7ac7bb1fc2": "be1e928687b3ae91c8135baf8a9e2c42",
".git/objects/02/adb9e91518c331b5bbb46f38a0ae460d388a8c": "a02a7d42654f2b03e10487a98c9c4986",
".git/objects/b5/2f0641f07c196fe77a9cfb2d1bd6dd898cac86": "4edb2890b41f94318866ac5fef92dc11",
".git/objects/ac/c283aeee66c660a236b2e99dc1e086d886190c": "001be95d02cee9f57f031a3f90ba0134",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/ad/e760a8eddfd24795b50be58e8e511a7b63fa13": "f337516bf30803f2e6693604f14bcb1d",
".git/objects/ad/33c06259896f8f68d2aba64574c9c7410df7ce": "e3e73a0c1ad9a8caa11fb938302ebe19",
".git/objects/d7/452dcbd11f79daee39a2dcf844f2937b9e7624": "6f116d9937cecd9afd87de292fa5e8c4",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/aff140b6cb45383898e23f8f264ebb74dbcf46": "8f08add221db4d9065ae6db2a267170a",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a2/f44f281f3f84c9de5f62c07946f6ca16a5b3c5": "b3dd8d9fa21cedc411c3e13d725ebd03",
".git/objects/a5/02cccddb8bf7c348d9e14318e82cf44a30b055": "23f0090bf03a258ef3f23cc9010371d4",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/ac9ba1169e4076832034c5585e1c5bf9d6f83c": "876bc5615b97dd6984ed3a864ba27059",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/0801b3b620af91f824c7655df7d064db05b764": "3a034b2609afa6f9a14cf62c9fb57254",
".git/objects/e2/b5fbb02fd0ce400780207ac39d203a319af7bb": "4bb073efbd374cfa8e7e0d1b0377cd4c",
".git/objects/f3/daf1f4a9f42114a9bffa5f7b8ec23a33b381fd": "8ba545dbf19feb9d781184dc84b9e48d",
".git/objects/f3/3e8162997aaa9da582aa81428ee87aa48953a6": "fc158db0779aaef1b463487bc31157f0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/332d5e846be69bab91d47153b6784a28b66840": "3911b52649ae693cfafba7b6a2ce1382",
".git/objects/eb/73c2757158be6c57067ad9a05c6af0344ef8ca": "b70474b9b47d1a07fe8c2c9974af21e9",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c0/57ac52e568b38cdbec429ef0f1a510a3f0500c": "12f1e98e74e62b72a4db155d575bfef6",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/fc/c952a72a154f1ace2bb5a61214873797dcfec7": "87152fdb005814ac51c221b25a39d013",
".git/objects/fc/567cd2f11d83683d9eb4ca1a5fdc912f7d417c": "a043e3e370f27b8721ecd4c53e4c975e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/728d97daad1a34be5f3908a9030d33ace7bd27": "cc00fd391b66cdcefddff7547f7ae6a2",
".git/objects/f2/caa9a51ee45f78148bb01bf1d09f05ad4a461e": "a7d29b4be8c876ac2aa6b3dfe0428085",
".git/objects/f5/e0fa3828c57545172795424a94608e76c3fb34": "474effedf98262e58dccf46ae1d5aabf",
".git/objects/e3/b96d3557b354e937f4ff74bd014f8bfc26a12c": "97f7276199625613b6df21ed8c700362",
".git/objects/ec/e0ab77fb41f02758a99319da6d5e841fde349b": "ed0cd4c57e6acd427ef3c6a12c864a1c",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/4b/6666d4ea5293030be7f523abb901568bb81f8b": "f8d55406c239b990de3a8fbbe37683dd",
".git/objects/42/38dc462d8ef1387855ff4dc84a39ba20f9c721": "05d43d4b50990dd22c0ae9c4dbd56db1",
".git/objects/1a/0d7e6e89a7bef16cf569f1645f50a6af0d1641": "86de74207f4d3304951a9c6c2d469f30",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/e7f4d845dce4ca0fb4e42a41c7d11f90652c08": "7cf21b4dadbd1888810a452da3fb996d",
".git/objects/4d/e1214ad644204a6ace2401c23237d0c3aa48c2": "eb08fbea1b62e38bc5966b2927c833c8",
".git/objects/72/a20c92ec7692e9f50d1c0296b77ea708d02200": "0830ede182cd957e0c677698a2e430a9",
".git/objects/72/746a78326f4895e279081c819f3f081ef975e4": "dae93d7ac8b3ae402da0f7c90a43a5f8",
".git/objects/44/34563a20a70bae70c52bcff08159344f879510": "ffd2ca42a4d1249539591f69237c83a8",
".git/objects/44/5b473bed849a04a8ea6f831d55f9587a4d68d3": "ded8c31363ab2d4b37ac9043432973ab",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/09/c84ed12b2bd86bf936ead7885a53bf34a4643b": "324392ee674b17cba81100573dd73f69",
".git/objects/91/5949b1dbd43df7d6cb4335189f258f4bfa19e0": "029ccc658e08f6f8be5e16d3284fbba6",
".git/objects/96/e2e81a3d1e00f2638000e2110075d3af23cfbe": "fa5d75dadf587cc64c82eaf9de652f15",
".git/objects/98/72af16d5ef314c1b124b05f171ae3b7cdb66bd": "69337d114630cd6fad4cc316e75f1b73",
".git/objects/5b/3bfc2a3188c12ba1076db235f2df76fb9fa203": "3acf1684b333c2ecf27aec7e83415abe",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/a29ce7f3dbc18c5284bf430439c6da56de2f7c": "1ba9f12762908f7af5918d4c6745a33d",
".git/objects/6c/f938334674985220fb31d247aacb035c55e7a2": "73980926c6fbf2a9e0d1809f5cfad0ac",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/99/d5c42245464002db8588c137efbd99d0152cc6": "8188c534f4408de520a026fe3399cbca",
".git/objects/99/fe5a5c55cc164716655efd924e5f490fbce9da": "99184acd25cd65b0ff5a8585ef46c8f1",
".git/objects/52/c6ed9646d1a5089e5df24baeb410665eb186f6": "4c545917f8120bc7746d799da5d65443",
".git/objects/0f/cbaf4911b0e51cc8daa040a4fd4dc86563558e": "7b0bcd1fad501807b7fd27ba08507a5d",
".git/objects/90/2d6420aaac108782f2192cade1cd88fe02272d": "46bc0949275afdc1896163f39db73677",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/25ea74bee27b697944986c002710bd1a0a5995": "01f92ffea0e1a7f100340f1b652ddf04",
".git/objects/d4/1255f1dc96e7527cf3574facf5f8b9dd4c2001": "a4305cf2e5fb9942167bbfa3a2dc9a2c",
".git/objects/ba/873595714be0aed5b3f40c3f409125d58b741e": "090eab633a2fc6144387ae5913e6fe15",
".git/objects/ba/976da08280574bec1524752655435a5d3f308c": "e603488584ebcfbb8f9e293b78bf83d1",
".git/objects/ba/ffe12f87ca645313628c3c2649ef7093c9c626": "5e8264bd3f2bdab1d6397b8c5d9c3499",
".git/objects/a0/624d76805468270facb247f50bf40cb6e9e9a4": "48d315f49b4110669fccf5e4cb83f46c",
".git/objects/a9/266781dd996fa3c276f6854b549d52ae9d7e67": "612cad71aa8bfc3c4340c0fe7b8be815",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d2/97a742919b87ee75009c20b0af23c2984d5366": "0145908c08abea2a0b99a3085f85f710",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4964ddf0fd92e51cd7742cd51cc6c47670fc01": "0ebe57f83e5210bb949b0f4702146244",
".git/objects/b9/480681e18b1b745cd3fa3a1583fc42656c8956": "4baa1394a48546975d73ba10bc348ff2",
".git/objects/a1/68196dbdd3850f4eceeb22fe7d653547c8dd94": "b3a10fcf02ee3d80015965c891f06add",
".git/objects/a1/10f307eb901b3404fc5d4722d5e5014c0a3ef3": "f71eca7917c6e4b4e7d7c1e3f7113c04",
".git/objects/f1/219d27cb91723b88eb8986dc3dea3d25153e24": "afdce9ecd849f9aa40b0c6574d3ab40c",
".git/objects/f1/40bb8e6e58dbf7366f15f4538f7b14d7d5a1df": "8cfaa5790f0807cbdc289ab6fdb3c566",
".git/objects/cb/c2c2212688cc6d750ce3eace6443ea303efc76": "8c2738f4511a8bd97ef4adcb34398934",
".git/objects/f8/daedca4515bb70b84038c6c447022f868f57ab": "6a10cef0b99704e835bd0f233ca880ac",
".git/objects/46/3e2a596879f6fe80096569003835f955fee892": "c3ec108ca59a164a971cd74d2172e2b7",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/05a2aecc024b574bdf6be160a4ba47731feaad": "5ca287bb760572c2b179177c077c1564",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/1e/dafd5150a47e0d824d529fd76151af270dad5a": "a11ddd2b782434ac6bddde5e65190d89",
".git/objects/1e/b3401714d64831136df9511a31a7b81e91b72f": "ec57c7c8fb1f1692a5d41ecc726fdd84",
".git/objects/4a/a6ea9a9494f9fe6309755d7cfc8f0718542859": "8d4163512de20bb4b128bbabf6dd99b1",
".git/objects/23/4811c1ab83cf763615bed5cf9a236f52e30eee": "4df3dc8afba2711a77a0c577b8cb6972",
".git/objects/12/de8f2b1b1d5e7816c86f25d75ccfab3d827897": "31c02c0d5d320895dff3badcab76c663",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/86385c081252b660dc91da311293d476a5fd03": "3d914390f74839c5fa4f8b4be46063ff",
".git/objects/71/9442d420a9c3d8df77d85b6f6ea1bc55bd39cc": "f0f785e8e884c8c1befbda9dcd273a1d",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/76/dfa1923d67aa24bc059c576eba4fc294051e2d": "775aa6c6219e94bef433ea7a9b4da116",
".git/objects/76/d91cb9895982d66c398f9da3daa61470488fb6": "eb9c926b9504ff85b80091feb21a6b60",
".git/objects/1c/c7c5c40921a0a67880871b8274e19c1ff6d49c": "c6463ddd213c0f15300fb188ccc55e0a",
".git/objects/49/fd90122683466eb1c52498cc3e50d60abec166": "3fca9043d0cf8cca020ec84ef141b104",
".git/objects/49/698e74205843ebf63e7af48dda68e5b6fde879": "c35a3360410ae549c879baf34348f2e8",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/13/e3d2f95c91114a4df80d42040d4626d882435e": "31bcda75350f7bb682c752061732cd05",
".git/objects/7f/9868ec832fda421d9831a4b81b96b9ce11c463": "170b46223d2f993edcc5e1f8a61f6cc2",
".git/objects/7a/2da89087fe8aa0816a176ac96bc143b57f6dce": "f31de6372eefd3230dab311d0cab2f07",
".git/objects/8e/dd2c246d1e0c202587d6849ac65742823e1691": "a6f35791b98441b02f544c9edfb19d89",
".git/objects/25/1a44bbd628854d1303e79f0bea1af7e2065023": "e4ea0b99ec7fa2cbcd20d03e77a17bab",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f4ba81fb7cb7a324f6a5a14b31f88760",
".git/logs/refs/heads/main": "f4ba81fb7cb7a324f6a5a14b31f88760",
".git/logs/refs/remotes/xwappy/main": "c06239774a661ca6d8020d3b396221e2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "a90b9d3343150e3f57c3bbee773346bc",
".git/refs/remotes/xwappy/main": "a90b9d3343150e3f57c3bbee773346bc",
".git/index": "c503256fab260ab28e5d0e5db9309864",
".git/COMMIT_EDITMSG": "7f918243abb1e6025b14deed6b5b5f93",
".git/FETCH_HEAD": "c72fdd5a31cd9ee106f32e260aa7226d",
"assets/AssetManifest.json": "1a0d095abeb5e268e6d89bd2081d9def",
"assets/NOTICES": "4f834d96dce51ae6983541b6305c66c6",
"assets/FontManifest.json": "5504c4e38aba3935ae8c644d8dd735ab",
"assets/AssetManifest.bin.json": "763d9d280622f8a1301c0cb8a41293e9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "f7c53c47a66934504fcbc7cc164895a7",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "a76d309774d33d9856f650bed4292a23",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "31b5ffea3daddc69dd01a1f3d6cf63c5",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "3b89dd103490708d19a95adcae52210e",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "605ed7926cf39a2ad5ec2d1f9d391d3d",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "1f77739ca9ff2188b539c36f30ffa2be",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "1681f34aaca71b8dfb70756bca331eb2",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4dd46902426f36e672eaf2cf43fd79e7",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/Group%25202608876.png": "8ce69740716f4ff1250604aa53a5d216",
"assets/assets/images/kyc.png": "1e9a10054006696d6885b1078ac5184a",
"assets/assets/images/image%2520188.png": "1c855879c31184c3be6b5c7fbe58ec7a",
"assets/assets/images/Group%25202608817.png": "730e2f4e8bb91188923c7d4735a5ff7c",
"assets/assets/images/image%2520219.png": "29bba1c60da2acb0f07b2f228b58bdb7",
"assets/assets/images/contactsupport.png": "c4c84c99141f42d823c192c99a28d1f8",
"assets/assets/images/splash.png": "ee8b65c4a93e95f7be9047ebe28ea5ee",
"assets/assets/images/image%2520187.png": "ef06eedf460a996ff400fc53fdb25f71",
"assets/assets/images/image%2520186.png": "0b822e58dff7df294c1325fadce745e6",
"assets/assets/images/emojione_flag-for-nigeria.png": "46ca09672d17e3f1364b833f900e8a32",
"assets/assets/images/money-send.png": "043d1d91758fcf6b9f9e9066b38818a8",
"assets/assets/images/money-send%2520copy.png": "81a9ae009494e5b9ea139b2409739208",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
