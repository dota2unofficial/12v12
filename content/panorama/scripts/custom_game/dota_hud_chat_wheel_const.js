const heronames = [
	["Abaddon", "Alchemist", "Ancient Apparition", "Anti-Mage", "Arc Warden", "Axe", "Bane", "Batrider"],
	[
		"Beastmaster",
		"Bloodseeker",
		"Bounty Hunter",
		"Brewmaster",
		"Bristleback",
		"Broodmother",
		"Centaur Warrunner",
		"Chaos Knight",
	],
	["Chen", "Clinkz", "Clockwerk", "Crystal Maiden", "Dark Seer", "Dark Willow", "Dazzle", "Death Prophet"],
	["Disruptor", "Doom", "Dragon Knight", "Drow Ranger", "Earth Spirit", "Earthshaker", "Elder Titan", "Ember Spirit"],
	["Enchantress", "Enigma", "Faceless Void", "Grimstroke", "Gyrocopter", "Hoodwink", "Huskar", "Invoker"],
	["Io", "Jakiro", "Juggernaut", "Keeper of the Light", "Kunkka", "Legion Commander", "Leshrac", "Lich"],
	["Lifestealer", "Lina", "Lion", "Lone Druid", "Luna", "Lycan", "Magnus", "Mars"],
	["Medusa", "Meepo", "Mirana", "Monkey King", "Morphling", "Naga Siren", "Nature's Prophet", "Necrophos"],
	[
		"Night Stalker",
		"Nyx Assassin",
		"Ogre Magi",
		"Omniknight",
		"Oracle",
		"Outworld Devourer",
		"Pangolier",
		"Phantom Assassin",
	],
	["Phantom Lancer", "Phoenix", "Puck", "Pudge", "Pugna", "Queen of Pain", "Razor", "Riki"],
	["Rubick", "Sand King", "Shadow Demon", "Shadow Fiend", "Shadow Shaman", "Silencer", "Skywrath Mage", "Slardar"],
	["Slark", "Snapfire", "Sniper", "Spectre", "Spirit Breaker", "Storm Spirit", "Sven", "Techies"],
	[
		"Templar Assassin",
		"Terrorblade",
		"Tidehunter",
		"Timbersaw",
		"Tinker",
		"Tiny",
		"Treant Protector",
		"Troll Warlord",
	],
	["Tusk", "Underlord", "Undying", "Ursa", "Vengeful Spirit", "Venomancer", "Viper", "Visage"],
	["Void Spirit", "Warlock", "Weaver", "Windranger", "Winter Wyvern ", "Witch Doctor", "Wraith King", "Zeus"],
];
const heronames2 = [
	"abaddon",
	"alchemist",
	"ancient_apparition",
	"antimage",
	"arc_warden",
	"axe",
	"bane",
	"batrider",
	"beastmaster",
	"bloodseeker",
	"bounty_hunter",
	"brewmaster",
	"bristleback",
	"broodmother",
	"centaur",
	"chaos_knight",
	"chen",
	"clinkz",
	"rattletrap",
	"crystal_maiden",
	"dark_seer",
	"dark_willow",
	"dazzle",
	"death_prophet",
	"disruptor",
	"doom_bringer",
	"dragon_knight",
	"drow_ranger",
	"earth_spirit",
	"earthshaker",
	"elder_titan",
	"ember_spirit",
	"enchantress",
	"enigma",
	"faceless_void",
	"grimstroke",
	"gyrocopter",
	"hoodwink",
	"huskar",
	"invoker",
	"wisp",
	"jakiro",
	"juggernaut",
	"keeper_of_the_light",
	"kunkka",
	"legion_commander",
	"leshrac",
	"lich",
	"life_stealer",
	"lina",
	"lion",
	"lone_druid",
	"luna",
	"lycan",
	"magnataur",
	"mars",
	"medusa",
	"meepo",
	"mirana",
	"monkey_king",
	"morphling",
	"naga_siren",
	"furion",
	"necrolyte",
	"night_stalker",
	"nyx_assassin",
	"ogre_magi",
	"omniknight",
	"oracle",
	"obsidian_destroyer",
	"pangolier",
	"phantom_assassin",
	"phantom_lancer",
	"phoenix",
	"puck",
	"pudge",
	"pugna",
	"queenofpain",
	"razor",
	"riki",
	"rubick",
	"sand_king",
	"shadow_demon",
	"nevermore",
	"shadow_shaman",
	"silencer",
	"skywrath_mage",
	"slardar",
	"slark",
	"snapfire",
	"sniper",
	"spectre",
	"spirit_breaker",
	"storm_spirit",
	"sven",
	"techies",
	"templar_assassin",
	"terrorblade",
	"tidehunter",
	"shredder",
	"tinker",
	"tiny",
	"treant",
	"troll_warlord",
	"tusk",
	"abyssal_underlord",
	"undying",
	"ursa",
	"vengefulspirit",
	"venomancer",
	"viper",
	"visage",
	"void_spirit",
	"warlock",
	"weaver",
	"windrunner",
	"winter_wyvern",
	"witch_doctor",
	"skeleton_king",
	"zuus",
];
const mesarrs = ["_laugh", "_thank", "_deny", "_1", "_2", "_3", "_4", "_5"];
const herostartnum = 110;
const nowrings = 18;
const herostartrings = nowrings + heronames.length + 1;

let rings = [
	[
		[
			"#" + Players.GetPlayerSelectedHero(Game.GetLocalPlayerID()),
			"#announcers",
			"#favourites",
			"#heroes",
			"#misc",
			"#battlepass2019",
			"#dotaplus2",
			"#dotaplus",
		],
		[false, false, false, false, false, false, false, false],
		[1, 13, 18, 4, 11, 14, 7, 8],
	],
	[
		[
			"#dota_chatwheel_label_" + Players.GetPlayerSelectedHero(Game.GetLocalPlayerID()).substring(14) + "_laugh",
			"#dota_chatwheel_label_" + Players.GetPlayerSelectedHero(Game.GetLocalPlayerID()).substring(14) + "_thank",
			"#dota_chatwheel_label_" + Players.GetPlayerSelectedHero(Game.GetLocalPlayerID()).substring(14) + "_deny",
			"#dota_chatwheel_label_" + Players.GetPlayerSelectedHero(Game.GetLocalPlayerID()).substring(14) + "_1",
			"#dota_chatwheel_label_" + Players.GetPlayerSelectedHero(Game.GetLocalPlayerID()).substring(14) + "_2",
			"#dota_chatwheel_label_" + Players.GetPlayerSelectedHero(Game.GetLocalPlayerID()).substring(14) + "_3",
			"#dota_chatwheel_label_" + Players.GetPlayerSelectedHero(Game.GetLocalPlayerID()).substring(14) + "_4",
			"#dota_chatwheel_label_" + Players.GetPlayerSelectedHero(Game.GetLocalPlayerID()).substring(14) + "_5",
		],
		[true, true, true, true, true, true, true, true],
		[
			herostartnum - 8,
			herostartnum - 7,
			herostartnum - 6,
			herostartnum - 5,
			herostartnum - 4,
			herostartnum - 3,
			herostartnum - 2,
			herostartnum - 1,
		],
	],
	[
		[
			"#chineseannouncer2",
			"#duiyou_ne",
			"#wan_bu_liao_la",
			"#po_liang_lu",
			"#tian_huo",
			"#jia_you",
			"#zou_hao_bu_song",
			"#liu_liu_liu",
		],
		[false, true, true, true, true, true, true, true],
		[9, 40, 41, 42, 43, 44, 45, 46],
	],
	[
		[
			"#russianannouncer2",
			"#bozhe_ti_posmotri",
			"#zhil_do_konsta",
			"#ay_ay_ay",
			"#ehto_g_g",
			"#eto_prosto_netchto",
			"#krasavchik",
			"#bozhe_kak_eto_bolno",
		],
		[false, true, true, true, true, true, true, true],
		[10, 55, 56, 57, 58, 59, 60, 61],
	],
	[
		["#heros_a-b", "#heros_b-c", "#heros_c-d", "#more", "#heros_d-e", "#heros_e-i", "#heros_j-l", "#heros_l-m"],
		[false, false, false, false, false, false, false, false],
		[nowrings + 1, nowrings + 2, nowrings + 3, 12, nowrings + 4, nowrings + 5, nowrings + 6, nowrings + 7],
	],
	[
		[
			"#that_was_questionable",
			"#playing_to_win",
			"#what_just_happened",
			"#looking_spicy",
			"#no_chill",
			"#ding_ding_ding",
			"#absolutely_perfect",
			"#lets_play",
		],
		[true, true, true, true, true, true, true, true],
		[32, 33, 34, 35, 36, 37, 38, 39],
	],
	[
		[
			"#englishannouncer2",
			"#patience",
			"#wow",
			"#all_dead",
			"#brutal",
			"#disastah",
			"#oh_my_lord",
			"#youre_a_hero",
		],
		[false, true, true, true, true, true, true, true],
		[5, 25, 26, 27, 28, 29, 30, 31],
	],
	[
		[
			"#dota_chatwheel_label_Headshake",
			"#dota_chatwheel_label_Kiss",
			"#dota_chatwheel_label_Ow",
			"#dota_chatwheel_label_Snore",
			"#dota_chatwheel_label_Bockbock",
			"#dota_chatwheel_label_Crybaby",
			"#dota_chatwheel_label_Sad_Trombone",
			"#dota_chatwheel_label_Yahoo",
		],
		[true, true, true, true, true, true, true, true],
		[9, 10, 11, 12, 13, 14, 15, 16],
	],
	[
		[
			"#dota_chatwheel_label_Applause",
			"#dota_chatwheel_label_Crash_and_Burn",
			"#dota_chatwheel_label_Crickets",
			"#dota_chatwheel_label_Party_Horn",
			"#dota_chatwheel_label_Rimshot",
			"#dota_chatwheel_label_Charge",
			"#dota_chatwheel_label_Drum_Roll",
			"#dota_chatwheel_label_Frog",
		],
		[true, true, true, true, true, true, true, true],
		[1, 2, 3, 4, 5, 6, 7, 8],
	],
	[
		[
			"#hu_lu_wa",
			"#ni_qi_bu_qi",
			"#gao_fu_shuai",
			"#gan_ma_ne_xiong_di",
			"#bai_tuo_shei_qu",
			"#piao_liang",
			"#lian_dou_xiu_wai_la",
			"#zai_jian_le_bao_bei",
		],
		[true, true, true, true, true, true, true, true],
		[47, 48, 49, 50, 51, 52, 53, 54],
	],
	[
		[
			"#oy_oy_bezhat",
			"#eto_nenormalno",
			"#eto_sochno",
			"#kreasa_kreasa",
			"#kak_boyge_te_byechenya",
			"#eto_ge_popayx_feeda",
			"#da_da_da_nyet",
			"#wot_eto_bru",
		],
		[true, true, true, true, true, true, true, true],
		[62, 63, 64, 65, 66, 67, 68, 69],
	],
	[
		[
			"#dota_chatwheel_message_Celebratory_Gong",
			"#dota_chatwheel_message_Sleighbells",
			"#dota_chatwheel_message_Oink_Oink",
			"#dota_chatwheel_message_Greevil_Laughter",
			"#dota_chatwheel_message_Frostivus_Magic",
			"#dota_chatwheel_message_Ceremonial_Drums",
			"",
			"",
		],
		[true, true, true, true, true, true, false, false],
		[24, 18, 23, 20, 21, 22, 19, 17],
	],
	[
		[
			"#heros_m-n",
			"#heros_n-p",
			"#heros_p-r",
			"#heros_s-s",
			"#heros_s-t",
			"#heros_t-t",
			"#heros_u-v",
			"#heros_w-z",
		],
		[false, false, false, false, false, false, false, false],
		[
			nowrings + 8,
			nowrings + 9,
			nowrings + 10,
			nowrings + 11,
			nowrings + 12,
			nowrings + 13,
			nowrings + 14,
			nowrings + 15,
		],
	],
	[
		["#englishannouncer", "#chineseannouncer", "#russianannouncer", "", "", "", "#epiccaster", "#koreancaster"],
		[false, false, false, false, false, false, false, false],
		[6, 2, 3, 0, 0, 0, 15, 17],
	],
	[
		[
			"#kooka_laugh",
			"#monkey_biz",
			"#orangutan_kiss",
			"#skeeter",
			"#crowd_groan",
			"#head_bonk",
			"#record_scratch",
			"#ta_da",
		],
		[true, true, true, true, true, true, true, true],
		[70, 71, 72, 73, 74, 75, 76, 77],
	],
	[
		[
			"#epiccaster2",
			"#easiest_money",
			"#echo_slama_jama",
			"#next_level",
			"#oy_oy_oy",
			"#ta_daaaa",
			"#ceeb",
			"#goodness_gracious",
		],
		[false, true, true, true, true, true, true, true],
		[16, 78, 79, 80, 81, 82, 83, 84],
	],
	[
		[
			"#nakupuuu",
			"#whats_cooking",
			"#eughahaha",
			"#glados_chat_21",
			"#glados_chat_01",
			"#glados_chat_07",
			"#glados_chat_04",
			"",
		],
		[true, true, true, true, true, true, true, false],
		[85, 86, 87, 88, 89, 90, 91, 92],
	],
	[
		[
			"#kor_yes_no",
			"#kor_scan",
			"#kor_immortality",
			"#kor_roshan",
			"#kor_yolo",
			"#kor_million_dollar_house",
			"",
			"",
		],
		[true, true, true, true, true, true, false, false],
		[93, 94, 95, 96, 97, 98, 99, 100],
	],
	[
		["#whtooltipff", "", "", "", "", "", "", ""],
		[false, false, false, false, false, false, false, false],
		[0, 0, 0, 0, 0, 0, 0, 0],
	],
];
