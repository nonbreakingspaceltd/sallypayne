var createjs, AdobeAn;
! function(a, i) {
    var t, T = {},
        e = {},
        n = {};

    function s() {
        var t = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        return t.gotoAndStop(this.currentFrame), t.paused = this.paused, t.framerate = this.framerate, t
    }

    function h(t, e, i) {
        var n = a.extend(t, a.MovieClip);
        return n.clone = s, n.nominalBounds = e, n.frameBounds = i, n
    }
    T.ssMetadata = [{
        name: "sallypayne_atlas_",
        frames: [
            [0, 0, 754, 758],
            [0, 1454, 810, 564],
            [1376, 1168, 490, 333],
            [756, 0, 682, 675],
            [688, 760, 686, 692],
            [0, 760, 686, 692],
            [812, 1503, 389, 414],
            [1440, 0, 507, 460],
            [1203, 1503, 389, 401],
            [1594, 1503, 389, 401],
            [1440, 462, 316, 704]
        ]
    }, {
        name: "sallypayne_atlas_2",
        frames: [
            [0, 1122, 108, 110],
            [777, 1506, 23, 19],
            [0, 1469, 172, 11],
            [0, 1482, 160, 10],
            [713, 1493, 142, 11],
            [243, 1474, 135, 11],
            [401, 1297, 276, 23],
            [344, 1519, 12, 13],
            [251, 1520, 12, 13],
            [589, 1513, 12, 13],
            [817, 1445, 44, 46],
            [667, 1457, 44, 46],
            [522, 1461, 44, 46],
            [863, 1462, 44, 46],
            [285, 582, 276, 23],
            [617, 1269, 26, 25],
            [894, 1510, 12, 13],
            [294, 1520, 12, 13],
            [979, 1352, 12, 13],
            [280, 1404, 14, 44],
            [595, 1396, 16, 38],
            [359, 1487, 16, 36],
            [1e3, 925, 15, 42],
            [413, 1500, 15, 34],
            [908, 1520, 13, 12],
            [159, 1502, 15, 34],
            [395, 1500, 16, 34],
            [176, 1502, 15, 34],
            [139, 1494, 18, 32],
            [18, 1506, 15, 32],
            [193, 1502, 15, 34],
            [0, 1506, 16, 30],
            [386, 1464, 52, 34],
            [365, 475, 23, 70],
            [828, 1506, 20, 20],
            [476, 1414, 44, 54],
            [174, 1454, 34, 46],
            [1e3, 857, 15, 66],
            [884, 1414, 47, 46],
            [440, 1464, 34, 46],
            [365, 403, 23, 70],
            [430, 1408, 44, 54],
            [555, 1513, 16, 16],
            [401, 1270, 117, 25],
            [952, 126, 56, 110],
            [1e3, 614, 16, 176],
            [679, 1297, 99, 53],
            [365, 557, 197, 15],
            [211, 1385, 30, 120],
            [546, 1210, 69, 82],
            [646, 1197, 121, 98],
            [960, 1082, 64, 21],
            [896, 1369, 96, 43],
            [548, 1396, 45, 63],
            [605, 1472, 34, 36],
            [377, 1500, 16, 34],
            [365, 574, 24, 4],
            [316, 1204, 83, 109],
            [952, 0, 64, 124],
            [476, 1470, 35, 39],
            [698, 942, 150, 136],
            [522, 1414, 22, 27],
            [661, 1505, 21, 24],
            [494, 1511, 16, 16],
            [476, 1511, 16, 17],
            [798, 1080, 29, 20],
            [923, 1520, 12, 13],
            [594, 602, 13, 10],
            [802, 1526, 10, 13],
            [732, 1506, 21, 21],
            [114, 1507, 19, 19],
            [617, 1210, 23, 57],
            [520, 1261, 24, 26],
            [684, 1505, 21, 24],
            [573, 1513, 14, 18],
            [308, 1520, 12, 13],
            [579, 602, 13, 10],
            [970, 1491, 10, 14],
            [568, 1472, 35, 39],
            [755, 1506, 20, 22],
            [1017, 1116, 7, 8],
            [1017, 1126, 7, 8],
            [407, 574, 14, 5],
            [453, 579, 14, 1],
            [423, 574, 13, 5],
            [391, 574, 14, 6],
            [1010, 234, 14, 2],
            [438, 574, 13, 5],
            [401, 1220, 113, 48],
            [57, 1320, 101, 51],
            [933, 1414, 47, 46],
            [277, 1487, 15, 66],
            [618, 1392, 71, 46],
            [863, 1445, 18, 11],
            [448, 1512, 16, 16],
            [231, 1520, 18, 11],
            [949, 1195, 19, 11],
            [563, 602, 14, 10],
            [870, 1526, 13, 10],
            [997, 330, 14, 8],
            [942, 1518, 15, 16],
            [327, 1519, 15, 16],
            [548, 1322, 68, 72],
            [173, 1308, 69, 75],
            [769, 1208, 111, 87],
            [430, 1512, 16, 16],
            [884, 1400, 10, 11],
            [553, 574, 4, 3],
            [1017, 893, 7, 14],
            [979, 1277, 9, 73],
            [595, 1440, 70, 30],
            [691, 1392, 45, 63],
            [1010, 126, 10, 73],
            [243, 1404, 35, 68],
            [360, 1411, 68, 36],
            [0, 1494, 73, 10],
            [660, 1322, 16, 25],
            [817, 1400, 65, 43],
            [173, 1224, 38, 68],
            [909, 1462, 71, 27],
            [301, 1396, 57, 53],
            [285, 403, 78, 177],
            [649, 1080, 147, 115],
            [641, 1472, 18, 55],
            [1e3, 792, 16, 63],
            [386, 1449, 32, 13],
            [698, 845, 257, 95],
            [24, 1429, 23, 20],
            [896, 1303, 81, 64],
            [231, 1507, 9, 11],
            [1018, 678, 4, 9],
            [385, 547, 4, 8],
            [1018, 689, 4, 8],
            [1018, 699, 4, 8],
            [422, 1004, 225, 76],
            [35, 1506, 23, 20],
            [1013, 330, 11, 7],
            [839, 1303, 55, 95],
            [60, 1507, 16, 25],
            [490, 574, 5, 5],
            [778, 1391, 37, 91],
            [707, 1506, 23, 20],
            [546, 574, 5, 3],
            [533, 574, 4, 4],
            [497, 574, 5, 4],
            [527, 574, 4, 4],
            [504, 574, 5, 4],
            [511, 574, 4, 4],
            [327, 1487, 30, 30],
            [539, 574, 5, 3],
            [428, 1322, 60, 84],
            [0, 1338, 53, 89],
            [618, 1352, 128, 38],
            [1018, 642, 6, 10],
            [474, 574, 7, 6],
            [294, 1487, 31, 31],
            [243, 1487, 32, 31],
            [738, 1407, 8, 8],
            [738, 1417, 8, 8],
            [516, 1220, 27, 39],
            [365, 547, 18, 6],
            [977, 330, 18, 8],
            [453, 574, 19, 3],
            [713, 1457, 32, 31],
            [982, 1476, 32, 31],
            [781, 1197, 8, 8],
            [155, 1374, 8, 8],
            [160, 1353, 11, 19],
            [1011, 1509, 11, 18],
            [110, 1224, 61, 94],
            [667, 1440, 22, 14],
            [970, 1195, 52, 80],
            [106, 1373, 47, 79],
            [55, 1373, 49, 77],
            [244, 1308, 55, 94],
            [490, 1322, 56, 90],
            [649, 1004, 47, 73],
            [368, 1322, 58, 87],
            [780, 1297, 57, 92],
            [57, 1234, 49, 80],
            [960, 980, 59, 100],
            [870, 1510, 22, 14],
            [162, 1482, 10, 14],
            [1014, 1451, 10, 14],
            [894, 1525, 10, 13],
            [265, 1520, 10, 14],
            [358, 1525, 12, 12],
            [959, 1518, 9, 14],
            [285, 614, 339, 229],
            [609, 340, 413, 272],
            [798, 1106, 149, 100],
            [626, 614, 339, 229],
            [952, 238, 67, 90],
            [942, 1491, 26, 25],
            [0, 1234, 55, 102],
            [564, 557, 41, 43],
            [994, 1277, 28, 139],
            [748, 1352, 28, 139],
            [155, 1385, 54, 67],
            [1010, 201, 10, 31],
            [160, 1320, 10, 31],
            [957, 845, 7, 31],
            [1014, 1418, 10, 31],
            [301, 1315, 65, 79],
            [78, 1507, 16, 25],
            [1010, 969, 10, 7],
            [769, 1197, 10, 7],
            [517, 574, 8, 2],
            [522, 1443, 23, 16],
            [952, 330, 23, 8],
            [75, 1494, 62, 11],
            [850, 942, 108, 162],
            [401, 1204, 17, 12],
            [483, 574, 5, 6],
            [1018, 61, 4, 59],
            [96, 1507, 16, 25],
            [1018, 0, 4, 59],
            [391, 0, 216, 555],
            [218, 1204, 96, 102],
            [982, 1418, 30, 56],
            [422, 1082, 122, 136],
            [546, 1082, 98, 126],
            [1e3, 969, 8, 9],
            [1017, 1105, 7, 9],
            [957, 878, 8, 19],
            [957, 899, 8, 16],
            [625, 1510, 14, 22],
            [1017, 857, 7, 16],
            [1017, 875, 7, 16],
            [957, 917, 8, 15],
            [1017, 909, 7, 13],
            [738, 1392, 8, 13],
            [1017, 939, 7, 12],
            [1017, 924, 7, 13],
            [1018, 614, 6, 12],
            [1018, 628, 6, 12],
            [1017, 953, 7, 11],
            [802, 1506, 24, 18],
            [1018, 654, 6, 10],
            [1018, 666, 6, 10],
            [618, 1322, 40, 26],
            [173, 1294, 40, 11],
            [280, 1451, 104, 20],
            [967, 614, 31, 364],
            [949, 1106, 66, 87],
            [0, 774, 217, 346],
            [609, 0, 341, 338],
            [909, 1491, 31, 27],
            [829, 1080, 17, 24],
            [970, 1509, 19, 18],
            [422, 845, 274, 157],
            [991, 1509, 18, 18],
            [210, 1507, 19, 18],
            [605, 1510, 18, 18],
            [513, 1509, 19, 18],
            [534, 1509, 19, 18],
            [850, 1510, 18, 18],
            [219, 845, 201, 357],
            [0, 1454, 165, 13],
            [219, 774, 57, 67],
            [0, 403, 283, 369],
            [0, 0, 389, 401],
            [110, 1122, 106, 100],
            [882, 1208, 86, 93],
            [0, 1429, 22, 23]
        ]
    }], (T.Image_0 = function() {
        this.initialize(e.sallypayne_atlas_), this.gotoAndStop(0)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_1 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(0)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_10 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(1)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_100 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(2)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_101 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(3)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_102 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(4)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_103 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(5)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_104 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(6)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_107 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(7)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_110 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(8)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_111 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(9)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_112 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(10)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_113 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(11)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_114 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(12)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_115 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(13)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_116 = function() {
        this.initialize(e.sallypayne_atlas_), this.gotoAndStop(1)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_117 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(14)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_12 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(15)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_121 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(16)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_123 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(17)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_124 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(18)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_125 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(19)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_126 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(20)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_127 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(21)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_128 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(22)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_129 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(23)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_13 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(24)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_130 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(25)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_131 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(26)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_132 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(27)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_133 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(28)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_134 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(29)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_135 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(30)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_136 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(31)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_137 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(32)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_138 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(33)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_139 = function() {
        this.initialize(e.sallypayne_atlas_), this.gotoAndStop(2)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_14 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(34)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_140 = function() {
        this.initialize(e.sallypayne_atlas_), this.gotoAndStop(3)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_141 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(35)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_142 = function() {
        this.initialize(e.sallypayne_atlas_), this.gotoAndStop(4)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_143 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(36)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_144 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(37)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_145 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(38)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_146 = function() {
        this.initialize(e.sallypayne_atlas_), this.gotoAndStop(5)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_147 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(39)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_148 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(40)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_149 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(41)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_15 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(42)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_150 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(43)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_151 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(44)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_152 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(45)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_153 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(46)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_154 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(47)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_155 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(48)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_156 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(49)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_157 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(50)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_158 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(51)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_159 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(52)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_160 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(53)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_161 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(54)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_162 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(55)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_163 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(56)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_164 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(57)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_165 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(58)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_166 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(59)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_167 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(60)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_168 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(61)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_169 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(62)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_17 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(63)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_170 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(64)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_171 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(65)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_172 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(66)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_173 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(67)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_174 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(68)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_175 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(69)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_176 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(70)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_177 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(71)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_178 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(72)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_179 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(73)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_180 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(74)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_181 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(75)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_182 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(76)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_183 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(77)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_184 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(78)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_185 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(79)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_186 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(80)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_187 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(81)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_188 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(82)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_189 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(83)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_190 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(84)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_191 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(85)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_192 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(86)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_193 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(87)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_194 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(88)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_195 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(89)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_196 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(90)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_197 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(91)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_198 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(92)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_199 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(93)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_2 = function() {
        this.initialize(e.sallypayne_atlas_), this.gotoAndStop(6)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_20 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(94)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_200 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(95)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_201 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(96)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_202 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(97)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_203 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(98)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_204 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(99)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_205 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(100)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_206 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(101)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_207 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(102)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_208 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(103)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_209 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(104)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_21 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(105)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_210 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(106)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_211 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(107)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_212 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(108)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_213 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(109)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_214 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(110)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_215 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(111)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_216 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(112)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_217 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(113)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_218 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(114)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_219 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(115)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_22 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(116)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_220 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(117)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_221 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(118)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_222 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(119)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_223 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(120)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_224 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(121)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_225 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(122)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_226 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(123)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_227 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(124)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_228 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(125)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_229 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(126)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_23 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(127)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_230 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(128)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_231 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(129)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_232 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(130)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_233 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(131)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_234 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(132)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_235 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(133)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_236 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(134)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_237 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(135)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_238 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(136)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_239 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(137)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_24 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(138)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_240 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(139)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_241 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(140)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_243 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(141)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_244 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(142)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_245 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(143)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_246 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(144)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_247 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(145)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_248 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(146)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_249 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(147)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_25 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(148)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_250 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(149)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_251 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(150)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_252 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(151)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_253 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(152)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_254 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(153)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_255 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(154)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_256 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(155)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_257 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(156)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_258 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(157)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_259 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(158)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_26 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(159)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_260 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(160)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_261 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(161)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_262 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(162)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_263 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(163)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_264 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(164)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_265 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(165)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_266 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(166)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_267 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(167)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_268 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(168)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_269 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(169)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_27 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(170)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_270 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(171)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_271 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(172)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_272 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(173)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_273 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(174)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_274 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(175)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_275 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(176)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_276 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(177)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_277 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(178)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_278 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(179)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_279 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(180)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_28 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(181)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_29 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(182)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_30 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(183)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_31 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(184)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_32 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(185)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_33 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(186)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_34 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(187)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_35 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(188)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_36 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(189)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_37 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(190)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_38 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(191)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_39 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(192)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_4 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(193)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_40 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(194)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_41 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(195)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_42 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(196)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_43 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(197)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_44 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(198)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_45 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(199)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_46 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(200)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_47 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(201)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_48 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(202)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_49 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(203)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_5 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(204)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_50 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(205)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_51 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(206)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_52 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(207)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_53 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(208)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_54 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(209)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_55 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(210)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_56 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(211)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_57 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(212)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_58 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(213)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_59 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(214)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_6 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(215)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_60 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(216)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_61 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(217)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_62 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(218)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_63 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(219)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_64 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(220)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_65 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(221)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_66 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(222)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_67 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(223)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_68 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(224)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_69 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(225)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_7 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(226)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_70 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(227)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_71 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(228)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_72 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(229)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_73 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(230)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_74 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(231)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_75 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(232)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_76 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(233)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_77 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(234)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_78 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(235)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_79 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(236)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_8 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(237)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_80 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(238)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_81 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(239)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_82 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(240)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_83 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(241)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_84 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(242)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_85 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(243)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_86 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(244)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_87 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(245)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_88 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(246)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_89 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(247)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_9 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(248)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_90 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(249)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_91 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(250)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_92 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(251)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_93 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(252)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_94 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(253)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_95 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(254)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_96 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(255)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_97 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(256)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_98 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(257)
    }).prototype = t = new a.Sprite, (T.CachedTexturedBitmap_99 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(258)
    }).prototype = t = new a.Sprite, (T.dash = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(259)
    }).prototype = t = new a.Sprite, (T.graph = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(260)
    }).prototype = t = new a.Sprite, (T.Layer10copyImage = function() {
        this.initialize(e.sallypayne_atlas_), this.gotoAndStop(7)
    }).prototype = t = new a.Sprite, (T.Layer2Image = function() {
        this.initialize(e.sallypayne_atlas_), this.gotoAndStop(8)
    }).prototype = t = new a.Sprite, (T.Layer2Image_1 = function() {
        this.initialize(e.sallypayne_atlas_), this.gotoAndStop(9)
    }).prototype = t = new a.Sprite, (T.Layer2Image_2 = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(261)
    }).prototype = t = new a.Sprite, (T.Layer7Image = function() {
        this.initialize(e.sallypayne_atlas_), this.gotoAndStop(10)
    }).prototype = t = new a.Sprite, (T.line = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(262)
    }).prototype = t = new a.Sprite, (T.pinkspot = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(263)
    }).prototype = t = new a.Sprite, (T.SPEC = function() {
        this.initialize(e.sallypayne_atlas_2), this.gotoAndStop(264)
    }).prototype = t = new a.Sprite, (T.Symbol19 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.CachedTexturedBitmap_279, (this.instance.parent = this).instance.setTransform(-7.3, -12.55, .25, .25), this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = t = new a.MovieClip, t.nominalBounds = new a.Rectangle(-7.3, -12.5, 14.8, 25), (T.Symbol18 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.CachedTexturedBitmap_278, (this.instance.parent = this).instance.setTransform(11.65, -41, .25, .25), this.instance_1 = new T.CachedTexturedBitmap_277, (this.instance_1.parent = this).instance_1.setTransform(-23.85, 18.15, .25, .25), this.instance_2 = new T.CachedTexturedBitmap_276, (this.instance_2.parent = this).instance_2.setTransform(-3.5, -16.95, .25, .25), this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1))
    }).prototype = t = new a.MovieClip, t.nominalBounds = new a.Rectangle(-23.8, -41, 47.7, 82.2), (T.Symbol17 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.CachedTexturedBitmap_275, (this.instance.parent = this).instance.setTransform(-21.55, 24.7, .25, .25), this.instance_1 = new T.CachedTexturedBitmap_274, (this.instance_1.parent = this).instance_1.setTransform(-7.35, -9.65, .25, .25), this.instance_2 = new T.CachedTexturedBitmap_273, (this.instance_2.parent = this).instance_2.setTransform(7.9, -42.9, .25, .25), this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1))
    }).prototype = t = new a.MovieClip, t.nominalBounds = new a.Rectangle(-21.5, -42.9, 43.2, 85.9), (T.Symbol16 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.CachedTexturedBitmap_272, (this.instance.parent = this).instance.setTransform(-1.4, -21.45, .25, .25), this.instance_1 = new T.CachedTexturedBitmap_271, (this.instance_1.parent = this).instance_1.setTransform(-14.35, 6.45, .25, .25), this.instance_2 = new T.CachedTexturedBitmap_270, (this.instance_2.parent = this).instance_2.setTransform(-29.5, 32.95, .25, .25), this.instance_3 = new T.CachedTexturedBitmap_269, (this.instance_3.parent = this).instance_3.setTransform(14.35, -53.1, .25, .25), this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1))
    }).prototype = t = new a.MovieClip, t.nominalBounds = new a.Rectangle(-29.5, -53.1, 59.1, 106.1), (T.Symbol13 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.CachedTexturedBitmap_268, (this.instance.parent = this).instance.setTransform(3.55, -5.35, .5, .5), this.instance_1 = new T.CachedTexturedBitmap_267, (this.instance_1.parent = this).instance_1.setTransform(12.9, -5.35, .5, .5), this.instance_2 = new T.CachedTexturedBitmap_266, (this.instance_2.parent = this).instance_2.setTransform(5.15, -36.9, .5, .5), this.instance_3 = new T.CachedTexturedBitmap_265, (this.instance_3.parent = this).instance_3.setTransform(11.15, -42.35, .5, .5), this.instance_4 = new T.CachedTexturedBitmap_264, (this.instance_4.parent = this).instance_4.setTransform(1.4, -44.9, .5, .5), this.instance_5 = new T.CachedTexturedBitmap_263, (this.instance_5.parent = this).instance_5.setTransform(-2.85, -27.75, .5, .5), this.instance_6 = new T.CachedTexturedBitmap_262, (this.instance_6.parent = this).instance_6.setTransform(22.35, -.5, .5, .5), this.instance_7 = new T.CachedTexturedBitmap_261, (this.instance_7.parent = this).instance_7.setTransform(22.2, 3.8, .5, .5), this.instance_8 = new T.CachedTexturedBitmap_260, (this.instance_8.parent = this).instance_8.setTransform(23.05, -6.9, .5, .5), this.instance_9 = new T.CachedTexturedBitmap_259, (this.instance_9.parent = this).instance_9.setTransform(-.9, 31.8, .5, .5), this.instance_10 = new T.CachedTexturedBitmap_258, (this.instance_10.parent = this).instance_10.setTransform(5.05, 37.3, .5, .5), this.instance_11 = new T.CachedTexturedBitmap_257, (this.instance_11.parent = this).instance_11.setTransform(-4.65, 28.7, .5, .5), this.instance_12 = new T.CachedTexturedBitmap_256, (this.instance_12.parent = this).instance_12.setTransform(-8.95, 11.55, .5, .5), this.instance_13 = new T.CachedTexturedBitmap_255, (this.instance_13.parent = this).instance_13.setTransform(-26.6, -3.35, .5, .5), this.instance_14 = new T.CachedTexturedBitmap_254, (this.instance_14.parent = this).instance_14.setTransform(-33, -2.6, .5, .5), this.instance_15 = new T.CachedTexturedBitmap_253, (this.instance_15.parent = this).instance_15.setTransform(-31.05, -9.25, .5, .5), this.instance_16 = new T.CachedTexturedBitmap_252, (this.instance_16.parent = this).instance_16.setTransform(-12.15, 5.4, .5, .5), this.instance_17 = new T.CachedTexturedBitmap_251, (this.instance_17.parent = this).instance_17.setTransform(-7.7, -49.65, .5, .5), this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_17
            }, {
                t: this.instance_16
            }, {
                t: this.instance_15
            }, {
                t: this.instance_14
            }, {
                t: this.instance_13
            }, {
                t: this.instance_12
            }, {
                t: this.instance_11
            }, {
                t: this.instance_10
            }, {
                t: this.instance_9
            }, {
                t: this.instance_8
            }, {
                t: this.instance_7
            }, {
                t: this.instance_6
            }, {
                t: this.instance_5
            }, {
                t: this.instance_4
            }, {
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1))
    }).prototype = t = new a.MovieClip, t.nominalBounds = new a.Rectangle(-33, -49.6, 66, 99.5), (T.Symbol10 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.CachedTexturedBitmap_250, (this.instance.parent = this).instance.setTransform(-29, -6, .5, .5), this.instance_1 = new T.CachedTexturedBitmap_249, (this.instance_1.parent = this).instance_1.setTransform(-32.25, -6.45, .5, .5), this.instance_2 = new T.CachedTexturedBitmap_248, (this.instance_2.parent = this).instance_2.setTransform(-36.15, -6.95, .5, .5), this.instance_3 = new T.CachedTexturedBitmap_247, (this.instance_3.parent = this).instance_3.setTransform(-39.35, -7.35, .5, .5), this.instance_4 = new T.CachedTexturedBitmap_246, (this.instance_4.parent = this).instance_4.setTransform(-43.95, -7.85, .5, .5), this.instance_5 = new T.CachedTexturedBitmap_245, (this.instance_5.parent = this).instance_5.setTransform(-47.15, -8.3, .5, .5), this.instance_6 = new T.CachedTexturedBitmap_244, (this.instance_6.parent = this).instance_6.setTransform(-51.8, -8.8, .5, .5), this.instance_7 = new T.CachedTexturedBitmap_243, (this.instance_7.parent = this).instance_7.setTransform(2.2, 24.45, .5, .5), this.instance_8 = new T.CachedTexturedBitmap_247, (this.instance_8.parent = this).instance_8.setTransform(-55, -9.25, .5, .5), this.instance_9 = new T.CachedTexturedBitmap_241, (this.instance_9.parent = this).instance_9.setTransform(7.35, -32.45, .5, .5), this.instance_10 = new T.CachedTexturedBitmap_240, (this.instance_10.parent = this).instance_10.setTransform(41.25, -4.25, .5, .5), this.instance_11 = new T.CachedTexturedBitmap_239, (this.instance_11.parent = this).instance_11.setTransform(-6.35, -34.45, .5, .5), this.instance_12 = new T.CachedTexturedBitmap_238, (this.instance_12.parent = this).instance_12.setTransform(52.85, -3.25, .5, .5), this.instance_13 = new T.CachedTexturedBitmap_237, (this.instance_13.parent = this).instance_13.setTransform(-1.8, 23.7, .5, .5), this.instance_14 = new T.CachedTexturedBitmap_236, (this.instance_14.parent = this).instance_14.setTransform(-58.3, -11.05, .5, .5), this.instance_15 = new T.CachedTexturedBitmap_235, (this.instance_15.parent = this).instance_15.setTransform(5.95, 17, .5, .5), this.instance_16 = new T.CachedTexturedBitmap_234, (this.instance_16.parent = this).instance_16.setTransform(5.35, 11.75, .5, .5), this.instance_17 = new T.CachedTexturedBitmap_233, (this.instance_17.parent = this).instance_17.setTransform(8.85, 14.3, .5, .5), this.instance_18 = new T.CachedTexturedBitmap_232, (this.instance_18.parent = this).instance_18.setTransform(2.25, 14.3, .5, .5), this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_18
            }, {
                t: this.instance_17
            }, {
                t: this.instance_16
            }, {
                t: this.instance_15
            }, {
                t: this.instance_14
            }, {
                t: this.instance_13
            }, {
                t: this.instance_12
            }, {
                t: this.instance_11
            }, {
                t: this.instance_10
            }, {
                t: this.instance_9
            }, {
                t: this.instance_8
            }, {
                t: this.instance_7
            }, {
                t: this.instance_6
            }, {
                t: this.instance_5
            }, {
                t: this.instance_4
            }, {
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1))
    }).prototype = t = new a.MovieClip, t.nominalBounds = new a.Rectangle(-58.3, -34.4, 116.69999999999999, 68.9), (T.Symbol9 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.CachedTexturedBitmap_231, (this.instance.parent = this).instance.setTransform(-54.2, 9, .5, .5), this.instance_1 = new T.CachedTexturedBitmap_230, (this.instance_1.parent = this).instance_1.setTransform(-28.65, 12.45, .5, .5), this.instance_2 = new T.CachedTexturedBitmap_229, (this.instance_2.parent = this).instance_2.setTransform(-61.3, 4.7, .5, .5), this.instance_3 = new T.CachedTexturedBitmap_228, (this.instance_3.parent = this).instance_3.setTransform(-74.85, 8.1, .5, .5), this.instance_4 = new T.CachedTexturedBitmap_227, (this.instance_4.parent = this).instance_4.setTransform(-4.35, 50.9, .5, .5), this.instance_5 = new T.CachedTexturedBitmap_226, (this.instance_5.parent = this).instance_5.setTransform(5.15, 50.15, .5, .5), this.instance_6 = new T.CachedTexturedBitmap_225, (this.instance_6.parent = this).instance_6.setTransform(1.35, -49.1, .5, .5), this.instance_7 = new T.CachedTexturedBitmap_224, (this.instance_7.parent = this).instance_7.setTransform(-20.4, -82.05, .5, .5), this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_7
            }, {
                t: this.instance_6
            }, {
                t: this.instance_5
            }, {
                t: this.instance_4
            }, {
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1))
    }).prototype = t = new a.MovieClip, t.nominalBounds = new a.Rectangle(-74.8, -82, 149.7, 164.4), (T.Symbol7 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.CachedTexturedBitmap_223, (this.instance.parent = this).instance.setTransform(23.2, 26.3, .25, .25), this.instance_1 = new T.CachedTexturedBitmap_222, (this.instance_1.parent = this).instance_1.setTransform(32.8, 7.6, .25, .25), this.instance_2 = new T.CachedTexturedBitmap_221, (this.instance_2.parent = this).instance_2.setTransform(-25.85, 28.5, .25, .25), this.instance_3 = new T.CachedTexturedBitmap_220, (this.instance_3.parent = this).instance_3.setTransform(-45.35, 15.65, .25, .25), this.instance_4 = new T.CachedTexturedBitmap_219, (this.instance_4.parent = this).instance_4.setTransform(-50.5, .15, .25, .25), this.instance_5 = new T.CachedTexturedBitmap_218, (this.instance_5.parent = this).instance_5.setTransform(-45.75, -26.3, .25, .25), this.instance_6 = new T.CachedTexturedBitmap_217, (this.instance_6.parent = this).instance_6.setTransform(-25.5, -46.25, .25, .25), this.instance_7 = new T.CachedTexturedBitmap_216, (this.instance_7.parent = this).instance_7.setTransform(-.3, -51.2, .25, .25), this.instance_8 = new T.CachedTexturedBitmap_215, (this.instance_8.parent = this).instance_8.setTransform(19.2, -45, .25, .25), this.instance_9 = new T.CachedTexturedBitmap_214, (this.instance_9.parent = this).instance_9.setTransform(30.35, -17.2, .25, .25), this.instance_10 = new T.CachedTexturedBitmap_213, (this.instance_10.parent = this).instance_10.setTransform(1.7, 32.9, .25, .25), this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_10
            }, {
                t: this.instance_9
            }, {
                t: this.instance_8
            }, {
                t: this.instance_7
            }, {
                t: this.instance_6
            }, {
                t: this.instance_5
            }, {
                t: this.instance_4
            }, {
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1))
    }).prototype = t = new a.MovieClip, t.nominalBounds = new a.Rectangle(-50.5, -51.2, 101.1, 102.4), (T.Symbol5 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.CachedTexturedBitmap_212, (this.instance.parent = this).instance.setTransform(-26.95, -10.8, .5, .5), this.instance_1 = new T.CachedTexturedBitmap_211, (this.instance_1.parent = this).instance_1.setTransform(-9.5, -12, .5, .5), this.instance_2 = new T.CachedTexturedBitmap_210, (this.instance_2.parent = this).instance_2.setTransform(-29, -17.85, .5, .5), this.instance_3 = new T.CachedTexturedBitmap_209, (this.instance_3.parent = this).instance_3.setTransform(-26.7, -21.8, .5, .5), this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1))
    }).prototype = t = new a.MovieClip, t.nominalBounds = new a.Rectangle(-29, -21.8, 57.8, 43.5), (T.Symbol3 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.CachedTexturedBitmap_208, (this.instance.parent = this).instance.setTransform(-17.2, -18.65, .5, .5), this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = t = new a.MovieClip, t.nominalBounds = new a.Rectangle(-17.2, -18.6, 34.5, 37.5), (T.Symbol2 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.CachedTexturedBitmap_207, (this.instance.parent = this).instance.setTransform(-16.85, -17.9, .5, .5), this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = t = new a.MovieClip, t.nominalBounds = new a.Rectangle(-16.8, -17.9, 34, 36), (T.Path_9 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.CachedTexturedBitmap_149, (this.instance.parent = this).instance.setTransform(0, 0, .4008, .4008), this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(T.Path_9, new a.Rectangle(0, 0, 17.7, 21.7), null), (T.Path_6 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.CachedTexturedBitmap_148, (this.instance.parent = this).instance.setTransform(0, 0, .4008, .4008), this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(T.Path_6, new a.Rectangle(0, 0, 9.2, 28.1), null), (T.Path_5_0 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.CachedTexturedBitmap_147, (this.instance.parent = this).instance.setTransform(0, 0, .4008, .4008), this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(T.Path_5_0, new a.Rectangle(0, 0, 13.7, 18.5), null), (T.Path_5 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.CachedTexturedBitmap_146, (this.instance.parent = this).instance.setTransform(0, 0, .2004, .2004), this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(T.Path_5, new a.Rectangle(0, 0, 137.5, 138.7), null), (T.Path_4 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.CachedTexturedBitmap_145, (this.instance.parent = this).instance.setTransform(0, 0, .4008, .4008), this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(T.Path_4, new a.Rectangle(0, 0, 18.9, 18.5), null), (T.Path_3 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.CachedTexturedBitmap_144, (this.instance.parent = this).instance.setTransform(0, 0, .4008, .4008), this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(T.Path_3, new a.Rectangle(0, 0, 6, 26.5), null), (T.Path_2_0 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.CachedTexturedBitmap_143, (this.instance.parent = this).instance.setTransform(0, 0, .4008, .4008), this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(T.Path_2_0, new a.Rectangle(0, 0, 13.7, 18.5), null), (T.Path_2 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.CachedTexturedBitmap_142, (this.instance.parent = this).instance.setTransform(0, 0, .2004, .2004), this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(T.Path_2, new a.Rectangle(0, 0, 137.5, 138.7), null), (T.Path_1_1 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.CachedTexturedBitmap_141, (this.instance.parent = this).instance.setTransform(0, 0, .4008, .4008), this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(T.Path_1_1, new a.Rectangle(0, 0, 17.7, 21.7), null), (T.Path_1_0 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.CachedTexturedBitmap_140, (this.instance.parent = this).instance.setTransform(0, 0, .2004, .2004), this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(T.Path_1_0, new a.Rectangle(0, 0, 136.7, 135.3), null), (T.Path_1 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.CachedTexturedBitmap_139, (this.instance.parent = this).instance.setTransform(0, 0, .2004, .2004), this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(T.Path_1, new a.Rectangle(0, 0, 98.2, 66.8), null), (T.Path = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.CachedTexturedBitmap_138, (this.instance.parent = this).instance.setTransform(0, 0, .4008, .4008), this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(T.Path, new a.Rectangle(0, 0, 9.2, 28.1), null), (T.Image = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.Image_0, (this.instance.parent = this).instance.setTransform(0, 0, .1725, .1725), this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(T.Image, new a.Rectangle(0, 0, 130.1, 130.8), null), (T.Group_12 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.CachedTexturedBitmap_103, (this.instance.parent = this).instance.setTransform(6.1, 34.85, .4008, .4008), this.instance_1 = new T.CachedTexturedBitmap_102, (this.instance_1.parent = this).instance_1.setTransform(2.6, 0, .4008, .4008), this.instance_2 = new T.CachedTexturedBitmap_101, (this.instance_2.parent = this).instance_2.setTransform(1.6, 26.95, .4008, .4008), this.instance_3 = new T.CachedTexturedBitmap_100, (this.instance_3.parent = this).instance_3.setTransform(1.5, 18.25, .4008, .4008), this.instance_4 = new T.CachedTexturedBitmap_99, (this.instance_4.parent = this).instance_4.setTransform(0, 8.4, .4008, .4008), this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_4
            }, {
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1))
    }).prototype = h(T.Group_12, new a.Rectangle(0, 0, 70.5, 39.3), null), (T.CompoundPath_5 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.CachedTexturedBitmap_98, (this.instance.parent = this).instance.setTransform(0, 0, .4008, .4008), this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(T.CompoundPath_5, new a.Rectangle(0, 0, 80.6, 143.1), null), (T.Tween7 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.Symbol19("synched", 0), (this.instance.parent = this).instance.setTransform(26.25, -41.6), this.instance_1 = new T.Symbol17("synched", 0), (this.instance_1.parent = this).instance_1.setTransform(-12.05, 11.2), this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1))
    }).prototype = t = new a.MovieClip, t.nominalBounds = new a.Rectangle(-33.6, -54.1, 67.30000000000001, 108.30000000000001), (T.Symbol20 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.Symbol16("synched", 0), (this.instance.parent = this).instance.setTransform(-18.65, -5.75), this.timeline.addTween(a.Tween.get(this.instance).to({
            x: -23.6,
            y: 3.9
        }, 4).to({
            x: -27.55,
            y: 11.65,
            alpha: 0
        }, 4).wait(2).to({
            x: -12.65,
            y: -16.05
        }, 0).to({
            x: -15.05,
            y: -11.95,
            alpha: 1
        }, 4).to({
            x: -18.65,
            y: -5.75
        }, 4).wait(1)), this.instance_1 = new T.Symbol18("synched", 0), (this.instance_1.parent = this).instance_1.setTransform(22.85, 13.85), this.timeline.addTween(a.Tween.get(this.instance_1).to({
            x: 17.9,
            y: 23.5
        }, 4).to({
            x: 13.95,
            y: 31.25,
            alpha: 0
        }, 4).wait(2).to({
            x: 28.85,
            y: 3.55
        }, 0).to({
            x: 26.45,
            y: 7.65,
            alpha: 1
        }, 4).to({
            x: 22.85,
            y: 13.85
        }, 4).wait(1)), this.instance_2 = new T.Tween7("synched", 0), (this.instance_2.parent = this).instance_2.setTransform(9.8, -1.05), this.timeline.addTween(a.Tween.get(this.instance_2).to({
            x: 4.85,
            y: 8.6
        }, 4).to({
            x: .9,
            y: 16.35,
            alpha: 0
        }, 4).wait(2).to({
            x: 15.8,
            y: -11.35
        }, 0).to({
            x: 13.4,
            y: -7.25,
            alpha: 1
        }, 4).to({
            x: 9.8,
            y: -1.05
        }, 4).wait(1))
    }).prototype = t = new a.MovieClip, t.nominalBounds = new a.Rectangle(-57, -69.1, 109.8, 141.5), (T.Symbol15 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.Symbol20, (this.instance.parent = this).timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = t = new a.MovieClip, t.nominalBounds = new a.Rectangle(-48.1, -58.8, 94.9, 113.8), (T.Symbol14 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.Symbol15("synched", 0), (this.instance.parent = this).instance.setTransform(.3, -18.55), this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = h(T.Symbol14, new a.Rectangle(-47.8, -77.4, 94.9, 113.9), null), (T.Symbol12 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.Symbol13("synched", 0), (this.instance.parent = this).timeline.addTween(a.Tween.get(this.instance).to({
            y: -13.2
        }, 59).to({
            y: 0
        }, 60).wait(1))
    }).prototype = t = new a.MovieClip, t.nominalBounds = new a.Rectangle(-33, -62.8, 66, 112.69999999999999), (T.Symbol11 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.Symbol10("synched", 0), (this.instance.parent = this).timeline.addTween(a.Tween.get(this.instance).to({
            y: 14.8
        }, 64).to({
            y: 0
        }, 65).wait(1))
    }).prototype = t = new a.MovieClip, t.nominalBounds = new a.Rectangle(-58.3, -34.4, 116.69999999999999, 83.69999999999999), (T.Symbol8 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.Symbol9("synched", 0), (this.instance.parent = this).timeline.addTween(a.Tween.get(this.instance).to({
            y: 23.45
        }, 100).to({
            y: 0
        }, 100).wait(1))
    }).prototype = t = new a.MovieClip, t.nominalBounds = new a.Rectangle(-74.8, -82, 149.7, 187.9), (T.Symbol6 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.Symbol7("synched", 0), (this.instance.parent = this).timeline.addTween(a.Tween.get(this.instance).to({
            scaleX: .9993,
            scaleY: .9993,
            rotation: 179.9991
        }, 150).to({
            scaleX: .9988,
            scaleY: .9988,
            rotation: 358.9986
        }, 149).wait(1))
    }).prototype = t = new a.MovieClip, t.nominalBounds = new a.Rectangle(-54.3, -54.3, 108.6, 108.69999999999999), (T.Symbol4 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.Symbol5("synched", 0), (this.instance.parent = this).instance.setTransform(271.8, 265.1, 1, 1, -29.9992), this.timeline.addTween(a.Tween.get(this.instance).to({
            startPosition: 0
        }, 24).to({
            x: 158.7
        }, 20).wait(29).to({
            scaleX: .9985,
            scaleY: .9985,
            rotation: -29.8583,
            x: 155.65
        }, 0).to({
            scaleX: 1,
            scaleY: 1,
            rotation: -29.9992,
            x: 106.75
        }, 9).to({
            regX: .1,
            regY: -.1,
            scaleX: .9999,
            scaleY: .9999,
            rotation: 65.002,
            x: 82.85,
            y: 236.5
        }, 10).to({
            rotation: 57.2683,
            x: 88.35,
            y: 151.4
        }, 26).to({
            scaleX: .9982,
            scaleY: .9982,
            rotation: 47.6069,
            x: 82.6,
            y: 112.95
        }, 11).to({
            regX: .6,
            regY: 0,
            scaleX: .9999,
            scaleY: .9999,
            rotation: 35.9997,
            x: 66.25,
            y: 67.4
        }, 13).to({
            scaleX: .9986,
            scaleY: .9986,
            rotation: 24.7852,
            x: 49.75,
            y: 38.4
        }, 9).to({
            regX: .2,
            regY: -.1,
            scaleX: .9999,
            scaleY: .9999,
            rotation: 12.2684,
            x: 22.95,
            y: 12.3
        }, 10).to({
            regX: .1,
            scaleX: .9998,
            scaleY: .9998,
            rotation: -9e-4,
            x: 6.65,
            y: 2.15
        }, 7).wait(30).to({
            rotation: 0,
            skewX: 60.0002,
            skewY: -119.9998,
            x: 7.3,
            y: 2.7
        }, 0).wait(34).to({
            scaleX: .9983,
            scaleY: .9983,
            skewX: 59.4413,
            skewY: -120.5587,
            x: 10.5,
            y: 4.6
        }, 0).to({
            scaleX: .9998,
            scaleY: .9998,
            skewX: 45.0006,
            skewY: -134.9994,
            x: 93.3,
            y: 54.85
        }, 11).to({
            skewX: 30.0018,
            skewY: -149.9982,
            x: 155.6,
            y: 142.85
        }, 11).to({
            x: 180.05
        }, 9).to({
            regX: 0,
            regY: 0,
            skewX: 9e-4,
            skewY: -179.9991,
            x: 205.15,
            y: 125.65
        }, 7).to({
            scaleX: .9997,
            scaleY: .9997,
            skewX: 59.9991,
            skewY: -120.0009,
            x: 256,
            y: 136.45
        }, 9).wait(138).to({
            regX: .1,
            regY: -.1,
            scaleX: .9998,
            scaleY: .9998,
            skewX: 60.0009,
            skewY: -119.9991,
            x: 253.45,
            y: 129.2
        }, 0).wait(1))
    }).prototype = t = new a.MovieClip, t.nominalBounds = new a.Rectangle(-25.9, -33, 333.5, 330.2), (T.Symbol1 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.CachedTexturedBitmap_206, (this.instance.parent = this).instance.setTransform(-49.9, 79.45, .5, .5), this.instance_1 = new T.CachedTexturedBitmap_205, (this.instance_1.parent = this).instance_1.setTransform(58.9, 78.25, .5, .5), this.instance_2 = new T.CachedTexturedBitmap_204, (this.instance_2.parent = this).instance_2.setTransform(2.9, 55.9, .5, .5), this.instance_3 = new T.CachedTexturedBitmap_203, (this.instance_3.parent = this).instance_3.setTransform(13.3, 32.65, .5, .5), this.instance_4 = new T.CachedTexturedBitmap_202, (this.instance_4.parent = this).instance_4.setTransform(7.4, 44.75, .5, .5), this.instance_5 = new T.CachedTexturedBitmap_201, (this.instance_5.parent = this).instance_5.setTransform(33.85, -13.8, .5, .5), this.instance_6 = new T.CachedTexturedBitmap_200, (this.instance_6.parent = this).instance_6.setTransform(33.75, -1.35, .5, .5), this.instance_7 = new T.CachedTexturedBitmap_199, (this.instance_7.parent = this).instance_7.setTransform(33.6, 11.05, .5, .5), this.instance_8 = new T.CachedTexturedBitmap_198, (this.instance_8.parent = this).instance_8.setTransform(-79.95, 15.8, .5, .5), this.instance_9 = new T.Path, (this.instance_9.parent = this).instance_9.setTransform(-70.35, -5.35, 1.2474, 1.2474, 0, 0, 0, 4.9, 14.1), this.instance_9.alpha = .2617, this.instance_10 = new T.Path_1_1, (this.instance_10.parent = this).instance_10.setTransform(-51.25, -2, 1.2474, 1.2474, 0, 0, 0, 8.9, 10.8), this.instance_10.alpha = .2305, this.instance_11 = new T.Path_2_0, (this.instance_11.parent = this).instance_11.setTransform(-77.8, .1, 1.2474, 1.2474, 0, 0, 0, 7, 9.3), this.instance_11.alpha = .8281, this.instance_12 = new T.Path_3, (this.instance_12.parent = this).instance_12.setTransform(-59.85, -5.25, 1.2474, 1.2474, 0, 0, 0, 3.1, 13.3), this.instance_12.alpha = .6289, this.instance_13 = new T.Path_4, (this.instance_13.parent = this).instance_13.setTransform(-65.15, 22.55, 1.2474, 1.2474, 0, 0, 0, 9.6, 9.4), this.instance_13.alpha = .4219, this.instance_14 = new T.Path_5_0, (this.instance_14.parent = this).instance_14.setTransform(-77.8, 0, 1.2474, 1.2474, 0, 0, 0, 7, 9.3), this.instance_14.alpha = .8281, this.instance_15 = new T.Path_6, (this.instance_15.parent = this).instance_15.setTransform(-70.35, -5.4, 1.2474, 1.2474, 0, 0, 0, 4.8, 14.2), this.instance_15.alpha = .6211, this.instance_16 = new T.CachedTexturedBitmap_197, (this.instance_16.parent = this).instance_16.setTransform(-63.8, -21.2, .5, .5), this.instance_17 = new T.CachedTexturedBitmap_196, (this.instance_17.parent = this).instance_17.setTransform(-76.85, 11.15, .5, .5), this.instance_18 = new T.Path_9, (this.instance_18.parent = this).instance_18.setTransform(-51.75, -1.75, 1.2474, 1.2474, 0, 0, 0, 8.9, 10.8), this.instance_18.alpha = .6484, this.instance_19 = new T.CachedTexturedBitmap_195, (this.instance_19.parent = this).instance_19.setTransform(35.7, 51.85, .5, .5), this.instance_20 = new T.CachedTexturedBitmap_194, (this.instance_20.parent = this).instance_20.setTransform(-26.9, -18.25, .5, .5), this.instance_21 = new T.CachedTexturedBitmap_193, (this.instance_21.parent = this).instance_21.setTransform(40.6, -56.15, .5, .5), this.instance_22 = new T.CachedTexturedBitmap_192, (this.instance_22.parent = this).instance_22.setTransform(40.65, -53.1, .5, .5), this.instance_23 = new T.CachedTexturedBitmap_191, (this.instance_23.parent = this).instance_23.setTransform(40.5, -51.85, .5, .5), this.instance_24 = new T.CachedTexturedBitmap_190, (this.instance_24.parent = this).instance_24.setTransform(8.2, -56.9, .5, .5), this.instance_25 = new T.CachedTexturedBitmap_189, (this.instance_25.parent = this).instance_25.setTransform(7.7, -53.75, .5, .5), this.instance_26 = new T.CachedTexturedBitmap_188, (this.instance_26.parent = this).instance_26.setTransform(8.1, -52.5, .5, .5), this.instance_27 = new T.CachedTexturedBitmap_187, (this.instance_27.parent = this).instance_27.setTransform(-1.85, -74.6, .5, .5), this.instance_28 = new T.CachedTexturedBitmap_186, (this.instance_28.parent = this).instance_28.setTransform(54.85, -74, .5, .5), this.instance_29 = new T.CachedTexturedBitmap_185, (this.instance_29.parent = this).instance_29.setTransform(-12.5, -96.2, .5, .5), this.instance_30 = new T.CachedTexturedBitmap_184, (this.instance_30.parent = this).instance_30.setTransform(-16.2, -101.05, .5, .5), this.instance_31 = new T.CachedTexturedBitmap_183, (this.instance_31.parent = this).instance_31.setTransform(12.3, -94.55, .5, .5), this.instance_32 = new T.CachedTexturedBitmap_182, (this.instance_32.parent = this).instance_32.setTransform(-7.1, -53, .5, .5), this.instance_33 = new T.CachedTexturedBitmap_181, (this.instance_33.parent = this).instance_33.setTransform(-2.55, -47.15, .5, .5), this.instance_34 = new T.CachedTexturedBitmap_180, (this.instance_34.parent = this).instance_34.setTransform(4.1, -43.8, .5, .5), this.instance_35 = new T.CachedTexturedBitmap_179, (this.instance_35.parent = this).instance_35.setTransform(5.85, -91.2, .5, .5), this.instance_36 = new T.CachedTexturedBitmap_178, (this.instance_36.parent = this).instance_36.setTransform(.8, -86.9, .5, .5), this.instance_37 = new T.CachedTexturedBitmap_177, (this.instance_37.parent = this).instance_37.setTransform(22.5, -93.8, .5, .5), this.instance_38 = new T.CachedTexturedBitmap_176, (this.instance_38.parent = this).instance_38.setTransform(24.35, -60.45, .5, .5), this.instance_39 = new T.CachedTexturedBitmap_175, (this.instance_39.parent = this).instance_39.setTransform(62.55, -93.7, .5, .5), this.instance_40 = new T.CachedTexturedBitmap_174, (this.instance_40.parent = this).instance_40.setTransform(39.3, -93.2, .5, .5), this.instance_41 = new T.CachedTexturedBitmap_173, (this.instance_41.parent = this).instance_41.setTransform(55.3, -53.3, .5, .5), this.instance_42 = new T.CachedTexturedBitmap_172, (this.instance_42.parent = this).instance_42.setTransform(52.65, -49.15, .5, .5), this.instance_43 = new T.CachedTexturedBitmap_171, (this.instance_43.parent = this).instance_43.setTransform(21.8, -51.65, .5, .5), this.instance_44 = new T.CachedTexturedBitmap_170, (this.instance_44.parent = this).instance_44.setTransform(46.1, -43.7, .5, .5), this.instance_45 = new T.CachedTexturedBitmap_169, (this.instance_45.parent = this).instance_45.setTransform(40, -91.3, .5, .5), this.instance_46 = new T.CachedTexturedBitmap_168, (this.instance_46.parent = this).instance_46.setTransform(45, -87.65, .5, .5), this.instance_47 = new T.CachedTexturedBitmap_167, (this.instance_47.parent = this).instance_47.setTransform(-9.2, -97.15, .5, .5), this.instance_48 = new T.CachedTexturedBitmap_166, (this.instance_48.parent = this).instance_48.setTransform(58.85, -98.55, .5, .5), this.instance_49 = new T.CachedTexturedBitmap_165, (this.instance_49.parent = this).instance_49.setTransform(12.95, -39.2, .5, .5), this.instance_50 = new T.CachedTexturedBitmap_164, (this.instance_50.parent = this).instance_50.setTransform(-.1, 16.35, .5, .5), this.instance_51 = new T.CachedTexturedBitmap_163, (this.instance_51.parent = this).instance_51.setTransform(-4.85, 76.75, .5, .5), this.instance_52 = new T.CachedTexturedBitmap_162, (this.instance_52.parent = this).instance_52.setTransform(-.4, 61, .5, .5), this.instance_53 = new T.CachedTexturedBitmap_161, (this.instance_53.parent = this).instance_53.setTransform(-5.3, 55.05, .5, .5), this.instance_54 = new T.CachedTexturedBitmap_160, (this.instance_54.parent = this).instance_54.setTransform(-43.9, -24.75, .5, .5), this.instance_55 = new T.CachedTexturedBitmap_159, (this.instance_55.parent = this).instance_55.setTransform(-16.9, 51.65, .5, .5), this.instance_56 = new T.CachedTexturedBitmap_158, (this.instance_56.parent = this).instance_56.setTransform(25.1, 14.25, .5, .5), this.instance_57 = new T.CachedTexturedBitmap_157, (this.instance_57.parent = this).instance_57.setTransform(-47.25, 18.8, .5, .5), this.instance_58 = new T.CachedTexturedBitmap_156, (this.instance_58.parent = this).instance_58.setTransform(16.35, 23.15, .5, .5), this.instance_59 = new T.CachedTexturedBitmap_155, (this.instance_59.parent = this).instance_59.setTransform(49, 21.4, .5, .5), this.instance_60 = new T.CachedTexturedBitmap_154, (this.instance_60.parent = this).instance_60.setTransform(-46.25, 16.95, .5, .5), this.instance_61 = new T.CachedTexturedBitmap_153, (this.instance_61.parent = this).instance_61.setTransform(-69.75, 51.5, .5, .5), this.instance_62 = new T.CachedTexturedBitmap_152, (this.instance_62.parent = this).instance_62.setTransform(-47.5, -4.6, .5, .5), this.instance_63 = new T.CachedTexturedBitmap_151, (this.instance_63.parent = this).instance_63.setTransform(-5.95, 6.55, .5, .5), this.instance_64 = new T.CachedTexturedBitmap_150, (this.instance_64.parent = this).instance_64.setTransform(-34.4, -30.8, .5, .5), this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_64
            }, {
                t: this.instance_63
            }, {
                t: this.instance_62
            }, {
                t: this.instance_61
            }, {
                t: this.instance_60
            }, {
                t: this.instance_59
            }, {
                t: this.instance_58
            }, {
                t: this.instance_57
            }, {
                t: this.instance_56
            }, {
                t: this.instance_55
            }, {
                t: this.instance_54
            }, {
                t: this.instance_53
            }, {
                t: this.instance_52
            }, {
                t: this.instance_51
            }, {
                t: this.instance_50
            }, {
                t: this.instance_49
            }, {
                t: this.instance_48
            }, {
                t: this.instance_47
            }, {
                t: this.instance_46
            }, {
                t: this.instance_45
            }, {
                t: this.instance_44
            }, {
                t: this.instance_43
            }, {
                t: this.instance_42
            }, {
                t: this.instance_41
            }, {
                t: this.instance_40
            }, {
                t: this.instance_39
            }, {
                t: this.instance_38
            }, {
                t: this.instance_37
            }, {
                t: this.instance_36
            }, {
                t: this.instance_35
            }, {
                t: this.instance_34
            }, {
                t: this.instance_33
            }, {
                t: this.instance_32
            }, {
                t: this.instance_31
            }, {
                t: this.instance_30
            }, {
                t: this.instance_29
            }, {
                t: this.instance_28
            }, {
                t: this.instance_27
            }, {
                t: this.instance_26
            }, {
                t: this.instance_25
            }, {
                t: this.instance_24
            }, {
                t: this.instance_23
            }, {
                t: this.instance_22
            }, {
                t: this.instance_21
            }, {
                t: this.instance_20
            }, {
                t: this.instance_19
            }, {
                t: this.instance_18
            }, {
                t: this.instance_17
            }, {
                t: this.instance_16
            }, {
                t: this.instance_15
            }, {
                t: this.instance_14
            }, {
                t: this.instance_13
            }, {
                t: this.instance_12
            }, {
                t: this.instance_11
            }, {
                t: this.instance_10
            }, {
                t: this.instance_9
            }, {
                t: this.instance_8
            }, {
                t: this.instance_7
            }, {
                t: this.instance_6
            }, {
                t: this.instance_5
            }, {
                t: this.instance_4
            }, {
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(120)), this.instance_65 = new T.Symbol3("synched", 0), (this.instance_65.parent = this).instance_65.setTransform(62.45, 82.3, 1, 1, -9.9992, 0, 0, .1, .1), this.timeline.addTween(a.Tween.get(this.instance_65).to({
            rotation: -189.0001,
            x: 62.35,
            y: 82.35
        }, 59).to({
            regX: 0,
            rotation: -368.9994,
            x: 62.4,
            y: 82.3
        }, 60).wait(1)), this.instance_66 = new T.Symbol2("synched", 0), (this.instance_66.parent = this).instance_66.setTransform(-46, 84.1), this.timeline.addTween(a.Tween.get(this.instance_66).to({
            rotation: -178.9998
        }, 59).to({
            regX: .1,
            regY: .1,
            rotation: -358.0001,
            y: 84.2
        }, 60).wait(1))
    }).prototype = t = new a.MovieClip, t.nominalBounds = new a.Rectangle(-86.5, -101, 174.4, 210), (T.Group_16 = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.CachedTexturedBitmap_137, (this.instance.parent = this).instance.setTransform(80.55, 74.7, .4008, .4008), this.instance_1 = new T.CachedTexturedBitmap_136, (this.instance_1.parent = this).instance_1.setTransform(204.35, 45.05, .4008, .4008), this.instance_2 = new T.CachedTexturedBitmap_135, (this.instance_2.parent = this).instance_2.setTransform(205.85, 117.85, .4008, .4008), this.instance_3 = new T.CachedTexturedBitmap_134, (this.instance_3.parent = this).instance_3.setTransform(222.9, 36.65, .4008, .4008), this.instance_4 = new T.CachedTexturedBitmap_133, (this.instance_4.parent = this).instance_4.setTransform(234.95, 116.75, .4008, .4008), this.instance_5 = new T.CachedTexturedBitmap_132, (this.instance_5.parent = this).instance_5.setTransform(263.9, 97.55, .4008, .4008), this.instance_6 = new T.CachedTexturedBitmap_131, (this.instance_6.parent = this).instance_6.setTransform(244.85, 58.15, .4008, .4008), this.instance_7 = new T.CachedTexturedBitmap_130, (this.instance_7.parent = this).instance_7.setTransform(263.7, 33.4, .4008, .4008), this.instance_8 = new T.CachedTexturedBitmap_129, (this.instance_8.parent = this).instance_8.setTransform(245, 87.25, .4008, .4008), this.instance_9 = new T.CachedTexturedBitmap_128, (this.instance_9.parent = this).instance_9.setTransform(204.1, 75.75, .4008, .4008), this.instance_10 = new T.CachedTexturedBitmap_127, (this.instance_10.parent = this).instance_10.setTransform(222.25, 67.1, .4008, .4008), this.instance_11 = new T.CachedTexturedBitmap_126, (this.instance_11.parent = this).instance_11.setTransform(219.65, 96.45, .4008, .4008), this.instance_12 = new T.CachedTexturedBitmap_125, (this.instance_12.parent = this).instance_12.setTransform(266.55, 65.15, .4008, .4008), this.instance_13 = new T.CachedTexturedBitmap_124, (this.instance_13.parent = this).instance_13.setTransform(249.35, 159.35, .4008, .4008), this.instance_14 = new T.CachedTexturedBitmap_123, (this.instance_14.parent = this).instance_14.setTransform(233.55, 159.35, .4008, .4008), this.instance_15 = new T.CachedTexturedBitmap_124, (this.instance_15.parent = this).instance_15.setTransform(184.25, 159.35, .4008, .4008), this.instance_16 = new T.CachedTexturedBitmap_121, (this.instance_16.parent = this).instance_16.setTransform(200.2, 159.1, .4008, .4008), this.instance_17 = new T.CachedTexturedBitmap_123, (this.instance_17.parent = this).instance_17.setTransform(216.6, 159.35, .4008, .4008), this.instance_18 = new T.CachedTexturedBitmap_124, (this.instance_18.parent = this).instance_18.setTransform(168.3, 159.35, .4008, .4008), this.instance_19 = new T.CachedTexturedBitmap_121, (this.instance_19.parent = this).instance_19.setTransform(265.2, 159.1, .4008, .4008), this.instance_20 = new T.CachedTexturedBitmap_117, (this.instance_20.parent = this).instance_20.setTransform(163.55, 157.2, .4008, .4008), this.instance_21 = new T.CachedTexturedBitmap_116, (this.instance_21.parent = this).instance_21.setTransform(0, 0, .4008, .4008), this.instance_22 = new T.CachedTexturedBitmap_115, (this.instance_22.parent = this).instance_22.setTransform(129.7, 121.4, .4008, .4008), this.instance_23 = new T.CachedTexturedBitmap_114, (this.instance_23.parent = this).instance_23.setTransform(157.2, 94.35, .4008, .4008), this.instance_24 = new T.CachedTexturedBitmap_113, (this.instance_24.parent = this).instance_24.setTransform(157.1, 57.7, .4008, .4008), this.instance_25 = new T.CachedTexturedBitmap_112, (this.instance_25.parent = this).instance_25.setTransform(129.55, 33.9, .4008, .4008), this.instance_26 = new T.CompoundPath_5, (this.instance_26.parent = this).instance_26.setTransform(151.3, 84.15, 1, 1, 0, 0, 0, 40.4, 71.7), this.instance_26.alpha = .6289, this.instance_27 = new T.CachedTexturedBitmap_111, (this.instance_27.parent = this).instance_27.setTransform(269.45, 180.05, .4008, .4008), this.instance_28 = new T.CachedTexturedBitmap_110, (this.instance_28.parent = this).instance_28.setTransform(253.65, 180.05, .4008, .4008), this.instance_29 = new T.CachedTexturedBitmap_111, (this.instance_29.parent = this).instance_29.setTransform(204.35, 180.05, .4008, .4008), this.instance_30 = new T.CachedTexturedBitmap_121, (this.instance_30.parent = this).instance_30.setTransform(220.3, 179.85, .4008, .4008), this.instance_31 = new T.CachedTexturedBitmap_107, (this.instance_31.parent = this).instance_31.setTransform(236.65, 180.05, .4008, .4008), this.instance_32 = new T.CachedTexturedBitmap_111, (this.instance_32.parent = this).instance_32.setTransform(188.4, 180.05, .4008, .4008), this.instance_33 = new T.CachedTexturedBitmap_121, (this.instance_33.parent = this).instance_33.setTransform(285.25, 179.85, .4008, .4008), this.instance_34 = new T.CachedTexturedBitmap_104, (this.instance_34.parent = this).instance_34.setTransform(183.65, 177.9, .4008, .4008), this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_34
            }, {
                t: this.instance_33
            }, {
                t: this.instance_32
            }, {
                t: this.instance_31
            }, {
                t: this.instance_30
            }, {
                t: this.instance_29
            }, {
                t: this.instance_28
            }, {
                t: this.instance_27
            }, {
                t: this.instance_26
            }, {
                t: this.instance_25
            }, {
                t: this.instance_24
            }, {
                t: this.instance_23
            }, {
                t: this.instance_22
            }, {
                t: this.instance_21
            }, {
                t: this.instance_20
            }, {
                t: this.instance_19
            }, {
                t: this.instance_18
            }, {
                t: this.instance_17
            }, {
                t: this.instance_16
            }, {
                t: this.instance_15
            }, {
                t: this.instance_14
            }, {
                t: this.instance_13
            }, {
                t: this.instance_12
            }, {
                t: this.instance_11
            }, {
                t: this.instance_10
            }, {
                t: this.instance_9
            }, {
                t: this.instance_8
            }, {
                t: this.instance_7
            }, {
                t: this.instance_6
            }, {
                t: this.instance_5
            }, {
                t: this.instance_4
            }, {
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1))
    }).prototype = h(T.Group_16, new a.Rectangle(0, 0, 324.7, 226.1), null), (T.sallypaynehome = function(t, e, i) {
        this.initialize(t, e, i, {}), this.instance = new T.Symbol6, (this.instance.parent = this).instance.setTransform(782.35, 77.8), this.instance_1 = new T.CachedTexturedBitmap_1, (this.instance_1.parent = this).instance_1.setTransform(756.4, 49.5, .5, .5), this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1)), this.instance_2 = new T.CachedTexturedBitmap_34, (this.instance_2.parent = this).instance_2.setTransform(855.7, 355.85, .5, .5), this.instance_3 = new T.CachedTexturedBitmap_33, (this.instance_3.parent = this).instance_3.setTransform(861.1, 368.3, .5, .5), this.instance_4 = new T.CachedTexturedBitmap_32, (this.instance_4.parent = this).instance_4.setTransform(864.6, 350.3, .5, .5), this.instance_5 = new T.CachedTexturedBitmap_31, (this.instance_5.parent = this).instance_5.setTransform(845.95, 347.7, .5, .5), this.instance_6 = new T.CachedTexturedBitmap_30, (this.instance_6.parent = this).instance_6.setTransform(890.95, 380.8, .5, .5), this.instance_7 = new T.CachedTexturedBitmap_29, (this.instance_7.parent = this).instance_7.setTransform(848.4, 367.6, .5, .5), this.instance_8 = new T.CachedTexturedBitmap_28, (this.instance_8.parent = this).instance_8.setTransform(878, 359.3, .5, .5), this.instance_9 = new T.CachedTexturedBitmap_27, (this.instance_9.parent = this).instance_9.setTransform(825.2, 359.95, .5, .5), this.instance_10 = new T.CachedTexturedBitmap_26, (this.instance_10.parent = this).instance_10.setTransform(851.1, 393.35, .5, .5), this.instance_11 = new T.CachedTexturedBitmap_25, (this.instance_11.parent = this).instance_11.setTransform(849.35, 382.65, .5, .5), this.instance_12 = new T.CachedTexturedBitmap_24, (this.instance_12.parent = this).instance_12.setTransform(1005.7, 460.85, .5, .5), this.instance_13 = new T.CachedTexturedBitmap_23, (this.instance_13.parent = this).instance_13.setTransform(908.4, 419.25, .5, .5), this.instance_14 = new T.CachedTexturedBitmap_22, (this.instance_14.parent = this).instance_14.setTransform(933.6, 372.25, .5, .5), this.instance_15 = new T.CachedTexturedBitmap_21, (this.instance_15.parent = this).instance_15.setTransform(970.75, 408, .5, .5), this.instance_16 = new T.CachedTexturedBitmap_20, (this.instance_16.parent = this).instance_16.setTransform(953.7, 388.3, .5, .5), this.instance_17 = new T.CachedTexturedBitmap_20, (this.instance_17.parent = this).instance_17.setTransform(986.75, 477.5, .5, .5), this.instance_18 = new T.CachedTexturedBitmap_21, (this.instance_18.parent = this).instance_18.setTransform(996.95, 378.5, .5, .5), this.instance_19 = new T.CachedTexturedBitmap_17, (this.instance_19.parent = this).instance_19.setTransform(910.25, 475.25, .5, .5), this.instance_20 = new T.CachedTexturedBitmap_17, (this.instance_20.parent = this).instance_20.setTransform(881.25, 467.1, .5, .5), this.instance_21 = new T.CachedTexturedBitmap_15, (this.instance_21.parent = this).instance_21.setTransform(920.8, 401.8, .5, .5), this.instance_22 = new T.CachedTexturedBitmap_14, (this.instance_22.parent = this).instance_22.setTransform(995.7, 303.75, .5, .5), this.instance_23 = new T.CachedTexturedBitmap_13, (this.instance_23.parent = this).instance_23.setTransform(1003.45, 361.45, .5, .5), this.instance_24 = new T.CachedTexturedBitmap_12, (this.instance_24.parent = this).instance_24.setTransform(984.15, 432.2, .5, .5), this.instance_25 = new T.CachedTexturedBitmap_13, (this.instance_25.parent = this).instance_25.setTransform(907.8, 448, .5, .5), this.instance_26 = new T.CachedTexturedBitmap_10, (this.instance_26.parent = this).instance_26.setTransform(969.45, 382.75, .5, .5), this.instance_27 = new T.CachedTexturedBitmap_9, (this.instance_27.parent = this).instance_27.setTransform(960, 429, .5, .5), this.instance_28 = new T.CachedTexturedBitmap_8, (this.instance_28.parent = this).instance_28.setTransform(881.2, 433.8, .5, .5), this.instance_29 = new T.CachedTexturedBitmap_7, (this.instance_29.parent = this).instance_29.setTransform(1006.6, 325.05, .5, .5), this.instance_30 = new T.CachedTexturedBitmap_6, (this.instance_30.parent = this).instance_30.setTransform(996.75, 405.85, .5, .5), this.instance_31 = new T.CachedTexturedBitmap_5, (this.instance_31.parent = this).instance_31.setTransform(941.3, 411.8, .5, .5), this.instance_32 = new T.CachedTexturedBitmap_4, (this.instance_32.parent = this).instance_32.setTransform(893.95, 395.4, .5, .5), this.instance_33 = new T.CachedTexturedBitmap_15, (this.instance_33.parent = this).instance_33.setTransform(914.25, 374.45, .5, .5), this.instance_34 = new T.CachedTexturedBitmap_2, (this.instance_34.parent = this).instance_34.setTransform(821.8, 287.05, .5, .5), this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_34
            }, {
                t: this.instance_33
            }, {
                t: this.instance_32
            }, {
                t: this.instance_31
            }, {
                t: this.instance_30
            }, {
                t: this.instance_29
            }, {
                t: this.instance_28
            }, {
                t: this.instance_27
            }, {
                t: this.instance_26
            }, {
                t: this.instance_25
            }, {
                t: this.instance_24
            }, {
                t: this.instance_23
            }, {
                t: this.instance_22
            }, {
                t: this.instance_21
            }, {
                t: this.instance_20
            }, {
                t: this.instance_19
            }, {
                t: this.instance_18
            }, {
                t: this.instance_17
            }, {
                t: this.instance_16
            }, {
                t: this.instance_15
            }, {
                t: this.instance_14
            }, {
                t: this.instance_13
            }, {
                t: this.instance_12
            }, {
                t: this.instance_11
            }, {
                t: this.instance_10
            }, {
                t: this.instance_9
            }, {
                t: this.instance_8
            }, {
                t: this.instance_7
            }, {
                t: this.instance_6
            }, {
                t: this.instance_5
            }, {
                t: this.instance_4
            }, {
                t: this.instance_3
            }, {
                t: this.instance_2
            }]
        }).wait(1)), this.instance_35 = new T.Symbol14, (this.instance_35.parent = this).instance_35.setTransform(492.9, 168.7), this.instance_36 = new T.Symbol12, (this.instance_36.parent = this).instance_36.setTransform(92, 214.8), this.instance_37 = new T.Symbol11, (this.instance_37.parent = this).instance_37.setTransform(176.6, 68.8), this.instance_38 = new T.Symbol8, (this.instance_38.parent = this).instance_38.setTransform(919.15, 137.3), this.instance_39 = new T.Symbol4, (this.instance_39.parent = this).instance_39.setTransform(797.45, 216.05), this.instance_40 = new T.Symbol1, (this.instance_40.parent = this).instance_40.setTransform(94.35, 408.3), this.instance_41 = new T.CachedTexturedBitmap_97, (this.instance_41.parent = this).instance_41.setTransform(534.7, 60.15, .5, .5), this.instance_42 = new T.CachedTexturedBitmap_96, (this.instance_42.parent = this).instance_42.setTransform(565.55, 67.05, .5, .5), this.instance_43 = new T.CachedTexturedBitmap_95, (this.instance_43.parent = this).instance_43.setTransform(515.4, 64.6, .5, .5), this.instance_44 = new T.CachedTexturedBitmap_94, (this.instance_44.parent = this).instance_44.setTransform(547.8, 48.15, .5, .5), this.instance_45 = new T.CachedTexturedBitmap_93, (this.instance_45.parent = this).instance_45.setTransform(502.8, 39.2, .5, .5), this.instance_46 = new T.CachedTexturedBitmap_92, (this.instance_46.parent = this).instance_46.setTransform(485.85, 66.85, .5, .5), this.instance_47 = new T.CachedTexturedBitmap_91, (this.instance_47.parent = this).instance_47.setTransform(463.2, 7.25, .5, .5), this.instance_48 = new T.CachedTexturedBitmap_90, (this.instance_48.parent = this).instance_48.setTransform(522.7, 28.55, .5, .5), this.instance_49 = new T.CachedTexturedBitmap_89, (this.instance_49.parent = this).instance_49.setTransform(332.95, 63.4, .5, .5), this.instance_50 = new T.Path_1_0, (this.instance_50.parent = this).instance_50.setTransform(255.5, 157.4, 1.2474, 1.2474, 0, 0, 0, 68.4, 67.7), this.instance_50.alpha = .1719, this.instance_51 = new T.Path_2, (this.instance_51.parent = this).instance_51.setTransform(428.25, 159.7, 1.2474, 1.2474, 0, 0, 0, 68.8, 69.4), this.instance_51.alpha = .2617, this.instance_52 = new T.CachedTexturedBitmap_88, (this.instance_52.parent = this).instance_52.setTransform(169.95, 73.05, .5, .5), this.instance_53 = new T.CachedTexturedBitmap_87, (this.instance_53.parent = this).instance_53.setTransform(299.6, 73.05, .5, .5), this.instance_54 = new T.Path_5, (this.instance_54.parent = this).instance_54.setTransform(427.15, 159.5, 1.2474, 1.2474, 0, 0, 0, 68.8, 69.4), this.instance_54.alpha = .6992, this.instance_55 = new T.CachedTexturedBitmap_86, (this.instance_55.parent = this).instance_55.setTransform(314.55, 354.6, .5, .5), this.instance_56 = new T.CachedTexturedBitmap_85, (this.instance_56.parent = this).instance_56.setTransform(339.35, 183.3, .5, .5), this.instance_57 = new T.CachedTexturedBitmap_84, (this.instance_57.parent = this).instance_57.setTransform(228.3, 240.7, .5, .5), this.instance_58 = new T.CachedTexturedBitmap_83, (this.instance_58.parent = this).instance_58.setTransform(245.45, 243.3, .5, .5), this.instance_59 = new T.CachedTexturedBitmap_82, (this.instance_59.parent = this).instance_59.setTransform(245.55, 230.85, .5, .5), this.instance_60 = new T.CachedTexturedBitmap_81, (this.instance_60.parent = this).instance_60.setTransform(287.15, 411.15, .5, .5), this.instance_61 = new T.CachedTexturedBitmap_80, (this.instance_61.parent = this).instance_61.setTransform(270.85, 429.6, .5, .5), this.instance_62 = new T.CachedTexturedBitmap_79, (this.instance_62.parent = this).instance_62.setTransform(228.8, 376.35, .5, .5), this.instance_63 = new T.CachedTexturedBitmap_78, (this.instance_63.parent = this).instance_63.setTransform(224.25, 427.65, .5, .5), this.instance_64 = new T.CachedTexturedBitmap_77, (this.instance_64.parent = this).instance_64.setTransform(214.85, 407.25, .5, .5), this.instance_65 = new T.CachedTexturedBitmap_76, (this.instance_65.parent = this).instance_65.setTransform(230.55, 394.2, .5, .5), this.instance_66 = new T.CachedTexturedBitmap_75, (this.instance_66.parent = this).instance_66.setTransform(214.7, 386.6, .5, .5), this.instance_67 = new T.CachedTexturedBitmap_74, (this.instance_67.parent = this).instance_67.setTransform(232.2, 413.95, .5, .5), this.instance_68 = new T.CachedTexturedBitmap_73, (this.instance_68.parent = this).instance_68.setTransform(250.4, 423.4, .5, .5), this.instance_69 = new T.CachedTexturedBitmap_72, (this.instance_69.parent = this).instance_69.setTransform(269.35, 411.25, .5, .5), this.instance_70 = new T.CachedTexturedBitmap_71, (this.instance_70.parent = this).instance_70.setTransform(251.25, 399, .5, .5), this.instance_71 = new T.CachedTexturedBitmap_70, (this.instance_71.parent = this).instance_71.setTransform(247.75, 371.55, .5, .5), this.instance_72 = new T.CachedTexturedBitmap_69, (this.instance_72.parent = this).instance_72.setTransform(265.5, 380.3, .5, .5), this.instance_73 = new T.CachedTexturedBitmap_68, (this.instance_73.parent = this).instance_73.setTransform(282, 389.8, .5, .5), this.instance_74 = new T.CachedTexturedBitmap_67, (this.instance_74.parent = this).instance_74.setTransform(281.9, 260.35, .5, .5), this.instance_75 = new T.CachedTexturedBitmap_66, (this.instance_75.parent = this).instance_75.setTransform(224.7, 260.1, .5, .5), this.instance_76 = new T.CachedTexturedBitmap_65, (this.instance_76.parent = this).instance_76.setTransform(284.55, 328.75, .5, .5), this.instance_77 = new T.CachedTexturedBitmap_64, (this.instance_77.parent = this).instance_77.setTransform(165.05, 320.9, .5, .5), this.instance_78 = new T.CachedTexturedBitmap_63, (this.instance_78.parent = this).instance_78.setTransform(247.75, 277.3, .5, .5), this.instance_79 = new T.CachedTexturedBitmap_62, (this.instance_79.parent = this).instance_79.setTransform(231.35, 267.65, .5, .5), this.instance_80 = new T.CachedTexturedBitmap_61, (this.instance_80.parent = this).instance_80.setTransform(193.2, 240.45, .5, .5), this.instance_81 = new T.Layer7Image, (this.instance_81.parent = this).instance_81.setTransform(377.45, 361.05, .0675, .0675, -46.6026), this.instance_82 = new T.CachedTexturedBitmap_60, (this.instance_82.parent = this).instance_82.setTransform(400.25, 392.4, .5, .5), this.instance_83 = new T.CachedTexturedBitmap_59, (this.instance_83.parent = this).instance_83.setTransform(406.9, 393.15, .5, .5), this.instance_84 = new T.CachedTexturedBitmap_58, (this.instance_84.parent = this).instance_84.setTransform(384.95, 317.85, .5, .5), this.instance_85 = new T.CachedTexturedBitmap_57, (this.instance_85.parent = this).instance_85.setTransform(371.1, 316.5, .5, .5), this.instance_86 = new T.CachedTexturedBitmap_56, (this.instance_86.parent = this).instance_86.setTransform(379.55, 313, .5, .5), this.instance_87 = new T.CachedTexturedBitmap_55, (this.instance_87.parent = this).instance_87.setTransform(323.5, 447, .5, .5), this.instance_88 = new T.CachedTexturedBitmap_54, (this.instance_88.parent = this).instance_88.setTransform(333.75, 447.9, .5, .5), this.instance_89 = new T.CachedTexturedBitmap_53, (this.instance_89.parent = this).instance_89.setTransform(333.75, 441, .5, .5), this.instance_90 = new T.CachedTexturedBitmap_52, (this.instance_90.parent = this).instance_90.setTransform(340.85, 478.1, .5, .5), this.instance_91 = new T.Layer2Image, (this.instance_91.parent = this).instance_91.setTransform(396.1, 467.65, .0395, .0378), this.instance_92 = new T.Layer2Image_1, (this.instance_92.parent = this).instance_92.setTransform(372.2, 424.1, .0395, .0378), this.instance_93 = new T.Layer2Image_2, (this.instance_93.parent = this).instance_93.setTransform(413.85, 447.65, .0395, .0378), this.instance_94 = new T.CachedTexturedBitmap_51, (this.instance_94.parent = this).instance_94.setTransform(344.85, 458.3, .5, .5), this.instance_95 = new T.CachedTexturedBitmap_50, (this.instance_95.parent = this).instance_95.setTransform(330.5, 458.45, .5, .5), this.instance_96 = new T.Layer10copyImage, (this.instance_96.parent = this).instance_96.setTransform(357.85, 419.6, .15, .15), this.instance_97 = new T.CachedTexturedBitmap_49, (this.instance_97.parent = this).instance_97.setTransform(326.85, 447.4, .5, .5), this.instance_98 = new T.CachedTexturedBitmap_48, (this.instance_98.parent = this).instance_98.setTransform(366.55, 482.75, .5, .5), this.instance_99 = new T.CachedTexturedBitmap_47, (this.instance_99.parent = this).instance_99.setTransform(423.55, 482.25, .5, .5), this.instance_100 = new T.CachedTexturedBitmap_46, (this.instance_100.parent = this).instance_100.setTransform(429.05, 482.2, .5, .5), this.instance_101 = new T.CachedTexturedBitmap_45, (this.instance_101.parent = this).instance_101.setTransform(358.85, 482.75, .5, .5), this.instance_102 = new T.CachedTexturedBitmap_44, (this.instance_102.parent = this).instance_102.setTransform(420.65, 279.65, .5, .5), this.instance_103 = new T.CachedTexturedBitmap_43, (this.instance_103.parent = this).instance_103.setTransform(450.95, 250, .5, .5), this.instance_104 = new T.CachedTexturedBitmap_42, (this.instance_104.parent = this).instance_104.setTransform(472.95, 244.45, .5, .5), this.instance_105 = new T.CachedTexturedBitmap_41, (this.instance_105.parent = this).instance_105.setTransform(496.75, 278.7, .5, .5), this.instance_106 = new T.CachedTexturedBitmap_40, (this.instance_106.parent = this).instance_106.setTransform(385.95, 258.45, .5, .5), this.instance_107 = new T.CachedTexturedBitmap_39, (this.instance_107.parent = this).instance_107.setTransform(550.75, 446.75, .5, .5), this.instance_108 = new T.CachedTexturedBitmap_38, (this.instance_108.parent = this).instance_108.setTransform(556.15, 120.55, .5, .5), this.instance_109 = new T.CachedTexturedBitmap_37, (this.instance_109.parent = this).instance_109.setTransform(602.05, 175.45, .5, .5), this.instance_110 = new T.Path_1, (this.instance_110.parent = this).instance_110.setTransform(638.75, 190.1, 1.2474, 1.2474, 0, 0, 0, 49.2, 33.6), this.instance_110.alpha = .6016, this.instance_111 = new T.CachedTexturedBitmap_36, (this.instance_111.parent = this).instance_111.setTransform(535.75, 97.95, .5, .5), this.instance_112 = new T.CachedTexturedBitmap_35, (this.instance_112.parent = this).instance_112.setTransform(554.05, 121.45, .5, .5), this.instance_113 = new T.Group_12, (this.instance_113.parent = this).instance_113.setTransform(489.2, 474, 1.2474, 1.2474, 0, 0, 0, 35.2, 19.8), this.instance_113.alpha = .2617, this.instance_114 = new T.Group_16, (this.instance_114.parent = this).instance_114.setTransform(667.55, 354.6, 1.2474, 1.2474, 0, 0, 0, 162.3, 113), this.instance_114.alpha = .7188, this.instance_115 = new T.Image, (this.instance_115.parent = this).instance_115.setTransform(739.35, 322.3, 1.2474, 1.2474, 0, 0, 0, 65.2, 65.5), this.instance_115.alpha = .1289, this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_115
            }, {
                t: this.instance_114
            }, {
                t: this.instance_113
            }, {
                t: this.instance_112
            }, {
                t: this.instance_111
            }, {
                t: this.instance_110
            }, {
                t: this.instance_109
            }, {
                t: this.instance_108
            }, {
                t: this.instance_107
            }, {
                t: this.instance_106
            }, {
                t: this.instance_105
            }, {
                t: this.instance_104
            }, {
                t: this.instance_103
            }, {
                t: this.instance_102
            }, {
                t: this.instance_101
            }, {
                t: this.instance_100
            }, {
                t: this.instance_99
            }, {
                t: this.instance_98
            }, {
                t: this.instance_97
            }, {
                t: this.instance_96
            }, {
                t: this.instance_95
            }, {
                t: this.instance_94
            }, {
                t: this.instance_93
            }, {
                t: this.instance_92
            }, {
                t: this.instance_91
            }, {
                t: this.instance_90
            }, {
                t: this.instance_89
            }, {
                t: this.instance_88
            }, {
                t: this.instance_87
            }, {
                t: this.instance_86
            }, {
                t: this.instance_85
            }, {
                t: this.instance_84
            }, {
                t: this.instance_83
            }, {
                t: this.instance_82
            }, {
                t: this.instance_81
            }, {
                t: this.instance_80
            }, {
                t: this.instance_79
            }, {
                t: this.instance_78
            }, {
                t: this.instance_77
            }, {
                t: this.instance_76
            }, {
                t: this.instance_75
            }, {
                t: this.instance_74
            }, {
                t: this.instance_73
            }, {
                t: this.instance_72
            }, {
                t: this.instance_71
            }, {
                t: this.instance_70
            }, {
                t: this.instance_69
            }, {
                t: this.instance_68
            }, {
                t: this.instance_67
            }, {
                t: this.instance_66
            }, {
                t: this.instance_65
            }, {
                t: this.instance_64
            }, {
                t: this.instance_63
            }, {
                t: this.instance_62
            }, {
                t: this.instance_61
            }, {
                t: this.instance_60
            }, {
                t: this.instance_59
            }, {
                t: this.instance_58
            }, {
                t: this.instance_57
            }, {
                t: this.instance_56
            }, {
                t: this.instance_55
            }, {
                t: this.instance_54
            }, {
                t: this.instance_53
            }, {
                t: this.instance_52
            }, {
                t: this.instance_51
            }, {
                t: this.instance_50
            }, {
                t: this.instance_49
            }, {
                t: this.instance_48
            }, {
                t: this.instance_47
            }, {
                t: this.instance_46
            }, {
                t: this.instance_45
            }, {
                t: this.instance_44
            }, {
                t: this.instance_43
            }, {
                t: this.instance_42
            }, {
                t: this.instance_41
            }, {
                t: this.instance_40
            }, {
                t: this.instance_39
            }, {
                t: this.instance_38
            }, {
                t: this.instance_37
            }, {
                t: this.instance_36
            }, {
                t: this.instance_35
            }]
        }).wait(1))
    }).prototype = t = new a.MovieClip, t.nominalBounds = new a.Rectangle(519.8, 269.8, 585.3, 248.2), T.properties = {
        id: "D33F63EE717D4ACA80A8937A2ECC103C",
        width: 1024,
        height: 525,
        fps: 24,
        color: "#FFFFFF",
        opacity: 1,
        manifest: [{
            src: "images/sallypayne_atlas_.png",
            id: "sallypayne_atlas_"
        }, {
            src: "images/sallypayne_atlas_2.png",
            id: "sallypayne_atlas_2"
        }],
        preloads: []
    }, (T.Stage = function(t) {
        createjs.Stage.call(this, t)
    }).prototype = t = new createjs.Stage, t.setAutoPlay = function(t) {
        this.tickEnabled = t
    }, t.play = function() {
        this.tickEnabled = !0, this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    }, t.stop = function(t) {
        t && this.seek(t), this.tickEnabled = !1
    }, t.seek = function(t) {
        this.tickEnabled = !0, this.getChildAt(0).gotoAndStop(T.properties.fps * t / 1e3)
    }, t.getDuration = function() {
        return this.getChildAt(0).totalFrames / T.properties.fps * 1e3
    }, t.getTimelinePosition = function() {
        return this.getChildAt(0).currentFrame / T.properties.fps * 1e3
    }, i.bootcompsLoaded = i.bootcompsLoaded || [], i.bootstrapListeners || (i.bootstrapListeners = []), i.bootstrapCallback = function(t) {
        if (i.bootstrapListeners.push(t), 0 < i.bootcompsLoaded.length)
            for (var e = 0; e < i.bootcompsLoaded.length; ++e) t(i.bootcompsLoaded[e])
    }, i.compositions = i.compositions || {}, i.compositions.D33F63EE717D4ACA80A8937A2ECC103C = {
        getStage: function() {
            return exportRoot.getStage()
        },
        getLibrary: function() {
            return T
        },
        getSpriteSheet: function() {
            return e
        },
        getImages: function() {
            return n
        }
    }, i.compositionLoaded = function(t) {
        i.bootcompsLoaded.push(t);
        for (var e = 0; e < i.bootstrapListeners.length; e++) i.bootstrapListeners[e](t)
    }, i.getComposition = function(t) {
        return i.compositions[t]
    }, i.makeResponsive = function(o, _, c, r, d) {
        var l, m, y = 1;

        function t() {
            var e = T.properties.width,
                i = T.properties.height,
                t = window.innerWidth,
                n = window.innerHeight,
                a = window.devicePixelRatio || 1,
                s = t / e,
                h = n / i,
                p = 1;
            o && ("width" == _ && l == t || "height" == _ && m == n ? p = y : c ? 1 == r ? p = Math.min(s, h) : 2 == r && (p = Math.max(s, h)) : (t < e || n < i) && (p = Math.min(s, h))), d[0].width = e * a * p, d[0].height = i * a * p, d.forEach(function(t) {
                t.style.width = e * p + "px", t.style.height = i * p + "px"
            }), stage.scaleX = a * p, stage.scaleY = a * p, l = t, m = n, y = p, stage.tickOnUpdate = !1, stage.update(), stage.tickOnUpdate = !0
        }
        window.addEventListener("resize", t), t()
    }
}(createjs = createjs || {}, AdobeAn = AdobeAn || {});