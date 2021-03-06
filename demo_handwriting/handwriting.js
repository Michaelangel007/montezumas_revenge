"use strict";

var gbIsFixed = false; // false=bug true=fixed
var gbIsDebug = false; // false=b&w true=debug

// Montezuma's "Revenge"
function handwriting( color, debug )
{
    var i = 0, n = Points.length;

// Debug Colors to find "R" bug
    var aDebugColors =
    [
        [255,  0,  0,255],
        [255,255,  0,255],
        [  0,255,  0,255],
        [  0,255,255,255],
        [  0,  0,255,255],
        [255,  0,255,255]
    ];

    for( ; i < n; i += 2 )
    {
        if( debug )
            color = aDebugColors[ ((i / 100) % 6)|0 ];

        putpixel( 2*Points[i+0]+0, Points[i+1], color )
        putpixel( 2*Points[i+0]+1, Points[i+1], color )
    }
}

function onBug()
{
    Points[ 325 ] = 37;
    gbIsFixed = false;

    redraw();
}

// ========================================================================

function onFix()
{
    Points[ 325 ] = 53;
    gbIsFixed = true;

    redraw();
}

function onBnW()
{
    gbIsDebug = false

    redraw();
}

function onRGB()
{
    gbIsDebug = true;

    redraw();
}

function redraw()
{
    canvas_get();

    // White on Black
    canvas_grid( [0,0,0,255], 1, 1 );
    handwriting( [255,255,255,255], gbIsDebug );

    // Black on White
    //handwriting( [0,0,0,255], 1 );

    canvas_put();
}

// ========================================================================
function main()
{
    document.body.style.overflow = 'hidden';
    canvas_init( 320, 200 );
    canvas_clear();

    onBug();
}

// R = 0, 124
// e = 384
// v =
// e = 596
// n =
// g =
// e =
//  122 Last of 1st stroke "R"
//  124 Start of 2nd stroke "R"
//  160 Why check @ $0F41 ???
//  382 Last stroke of "R" evenge
//  384 First stroke of R "e" venge
//  596 Reven "e" nge
//  710 'e' tail of Rev "e" nge
// 1270 '!'

// There is a typo/bug in the original data !
//   36,37,  // [ 324] @ $4F4D: 24 25 
//   <-- BUG: 0x25 (37) should be 0x35 (53)
// This causes the "R" bottom right leg to look "clunky"
var Points = [
    42,31,  // [   0] @ $4E09: 2A 1F
    41,32,  // [   2] @ $4E0B: 29 20
    40,33,  // [   4] @ $4E0D: 28 21
    39,34,  // [   6] @ $4E0F: 27 22
    39,35,  // [   8] @ $4E11: 27 23
    38,35,  // [  10] @ $4E13: 26 23
    38,36,  // [  12] @ $4E15: 26 24
    37,36,  // [  14] @ $4E17: 25 24
    37,37,  // [  16] @ $4E19: 25 25
    36,37,  // [  18] @ $4E1B: 24 25
    36,38,  // [  20] @ $4E1D: 24 26
    35,38,  // [  22] @ $4E1F: 23 26
    36,39,  // [  24] @ $4E21: 24 27
    35,39,  // [  26] @ $4E23: 23 27
    35,40,  // [  28] @ $4E25: 23 28
    34,40,  // [  30] @ $4E27: 22 28
    34,41,  // [  32] @ $4E29: 22 29
    34,42,  // [  34] @ $4E2B: 22 2A
    33,42,  // [  36] @ $4E2D: 21 2A
    33,43,  // [  38] @ $4E2F: 21 2B
    33,44,  // [  40] @ $4E31: 21 2C
    32,44,  // [  42] @ $4E33: 20 2C
    32,45,  // [  44] @ $4E35: 20 2D
    31,45,  // [  46] @ $4E37: 1F 2D
    31,46,  // [  48] @ $4E39: 1F 2E
    30,46,  // [  50] @ $4E3B: 1E 2E
    30,47,  // [  52] @ $4E3D: 1E 2F
    29,47,  // [  54] @ $4E3F: 1D 2F
    30,48,  // [  56] @ $4E41: 1E 30
    29,48,  // [  58] @ $4E43: 1D 30
    29,49,  // [  60] @ $4E45: 1D 31
    28,49,  // [  62] @ $4E47: 1C 31
    29,50,  // [  64] @ $4E49: 1D 32
    28,50,  // [  66] @ $4E4B: 1C 32
    28,51,  // [  68] @ $4E4D: 1C 33
    27,51,  // [  70] @ $4E4F: 1B 33
    28,52,  // [  72] @ $4E51: 1C 34
    27,52,  // [  74] @ $4E53: 1B 34
    26,52,  // [  76] @ $4E55: 1A 34
    27,53,  // [  78] @ $4E57: 1B 35
    26,53,  // [  80] @ $4E59: 1A 35
    27,54,  // [  82] @ $4E5B: 1B 36
    26,54,  // [  84] @ $4E5D: 1A 36
    26,55,  // [  86] @ $4E5F: 1A 37
    25,55,  // [  88] @ $4E61: 19 37
    25,56,  // [  90] @ $4E63: 19 38
    24,56,  // [  92] @ $4E65: 18 38
    25,57,  // [  94] @ $4E67: 19 39
    24,57,  // [  96] @ $4E69: 18 39
    24,58,  // [  98] @ $4E6B: 18 3A
    23,58,  // [ 100] @ $4E6D: 17 3A
    24,59,  // [ 102] @ $4E6F: 18 3B
    23,59,  // [ 104] @ $4E71: 17 3B
    22,59,  // [ 106] @ $4E73: 16 3B
    23,60,  // [ 108] @ $4E75: 17 3C
    22,60,  // [ 110] @ $4E77: 16 3C
    23,61,  // [ 112] @ $4E79: 17 3D
    22,61,  // [ 114] @ $4E7B: 16 3D
    23,62,  // [ 116] @ $4E7D: 17 3E
    22,62,  // [ 118] @ $4E7F: 16 3E
    22,63,  // [ 120] @ $4E81: 16 3F
    28,32,  // [ 122] @ $4E83: 1C 20
    29,31,  // [ 124] @ $4E85: 1D 1F
    30,30,  // [ 126] @ $4E87: 1E 1E
    31,30,  // [ 128] @ $4E89: 1F 1E
    32,29,  // [ 130] @ $4E8B: 20 1D
    33,29,  // [ 132] @ $4E8D: 21 1D
    34,28,  // [ 134] @ $4E8F: 22 1C
    35,28,  // [ 136] @ $4E91: 23 1C
    36,28,  // [ 138] @ $4E93: 24 1C
    37,27,  // [ 140] @ $4E95: 25 1B
    38,27,  // [ 142] @ $4E97: 26 1B
    39,27,  // [ 144] @ $4E99: 27 1B
    39,26,  // [ 146] @ $4E9B: 27 1A
    40,26,  // [ 148] @ $4E9D: 28 1A
    41,26,  // [ 150] @ $4E9F: 29 1A
    42,26,  // [ 152] @ $4EA1: 2A 1A
    43,26,  // [ 154] @ $4EA3: 2B 1A
    44,26,  // [ 156] @ $4EA5: 2C 1A
    45,26,  // [ 158] @ $4EA7: 2D 1A
    46,26,  // [ 160] @ $4EA9: 2E 1A
    47,26,  // [ 162] @ $4EAB: 2F 1A
    45,27,  // [ 164] @ $4EAD: 2D 1B
    46,27,  // [ 166] @ $4EAF: 2E 1B
    47,27,  // [ 168] @ $4EB1: 2F 1B
    48,27,  // [ 170] @ $4EB3: 30 1B
    49,27,  // [ 172] @ $4EB5: 31 1B
    48,28,  // [ 174] @ $4EB7: 30 1C
    49,28,  // [ 176] @ $4EB9: 31 1C
    50,28,  // [ 178] @ $4EBB: 32 1C
    49,29,  // [ 180] @ $4EBD: 31 1D
    50,29,  // [ 182] @ $4EBF: 32 1D
    51,29,  // [ 184] @ $4EC1: 33 1D
    50,30,  // [ 186] @ $4EC3: 32 1E
    51,30,  // [ 188] @ $4EC5: 33 1E
    52,30,  // [ 190] @ $4EC7: 34 1E
    50,31,  // [ 192] @ $4EC9: 32 1F
    51,31,  // [ 194] @ $4ECB: 33 1F
    52,31,  // [ 196] @ $4ECD: 34 1F
    50,32,  // [ 198] @ $4ECF: 32 20
    51,32,  // [ 200] @ $4ED1: 33 20
    52,32,  // [ 202] @ $4ED3: 34 20
    50,33,  // [ 204] @ $4ED5: 32 21
    51,33,  // [ 206] @ $4ED7: 33 21
    52,33,  // [ 208] @ $4ED9: 34 21
    50,34,  // [ 210] @ $4EDB: 32 22
    51,34,  // [ 212] @ $4EDD: 33 22
    49,35,  // [ 214] @ $4EDF: 31 23
    50,35,  // [ 216] @ $4EE1: 32 23
    51,35,  // [ 218] @ $4EE3: 33 23
    49,36,  // [ 220] @ $4EE5: 31 24
    50,36,  // [ 222] @ $4EE7: 32 24
    48,37,  // [ 224] @ $4EE9: 30 25
    49,37,  // [ 226] @ $4EEB: 31 25
    47,38,  // [ 228] @ $4EED: 2F 26
    48,38,  // [ 230] @ $4EEF: 30 26
    47,39,  // [ 232] @ $4EF1: 2F 27
    46,39,  // [ 234] @ $4EF3: 2E 27
    45,39,  // [ 236] @ $4EF5: 2D 27
    46,40,  // [ 238] @ $4EF7: 2E 28
    45,40,  // [ 240] @ $4EF9: 2D 28
    44,40,  // [ 242] @ $4EFB: 2C 28
    43,40,  // [ 244] @ $4EFD: 2B 28
    44,41,  // [ 246] @ $4EFF: 2C 29
    43,41,  // [ 248] @ $4F01: 2B 29
    42,41,  // [ 250] @ $4F03: 2A 29
    41,41,  // [ 252] @ $4F05: 29 29
    42,42,  // [ 254] @ $4F07: 2A 2A
    41,42,  // [ 256] @ $4F09: 29 2A
    40,42,  // [ 258] @ $4F0B: 28 2A
    40,43,  // [ 260] @ $4F0D: 28 2B
    39,43,  // [ 262] @ $4F0F: 27 2B
    38,44,  // [ 264] @ $4F11: 26 2C
    37,44,  // [ 266] @ $4F13: 25 2C
    36,44,  // [ 268] @ $4F15: 24 2C
    35,45,  // [ 270] @ $4F17: 23 2D
    34,45,  // [ 272] @ $4F19: 22 2D
    33,45,  // [ 274] @ $4F1B: 21 2D
    32,45,  // [ 276] @ $4F1D: 20 2D
    31,45,  // [ 278] @ $4F1F: 1F 2D
    30,46,  // [ 280] @ $4F21: 1E 2E
    29,46,  // [ 282] @ $4F23: 1D 2E
    28,46,  // [ 284] @ $4F25: 1C 2E
    27,46,  // [ 286] @ $4F27: 1B 2E
    26,46,  // [ 288] @ $4F29: 1A 2E
    25,45,  // [ 290] @ $4F2B: 19 2D
    26,44,  // [ 292] @ $4F2D: 1A 2C
    27,44,  // [ 294] @ $4F2F: 1B 2C
    28,44,  // [ 296] @ $4F31: 1C 2C
    29,45,  // [ 298] @ $4F33: 1D 2D
    30,46,  // [ 300] @ $4F35: 1E 2E
    31,46,  // [ 302] @ $4F37: 1F 2E
    32,47,  // [ 304] @ $4F39: 20 2F
    32,48,  // [ 306] @ $4F3B: 20 30
    33,48,  // [ 308] @ $4F3D: 21 30
    33,49,  // [ 310] @ $4F3F: 21 31
    34,49,  // [ 312] @ $4F41: 22 31
    34,50,  // [ 314] @ $4F43: 22 32
    35,50,  // [ 316] @ $4F45: 23 32
    35,51,  // [ 318] @ $4F47: 23 33
    35,52,  // [ 320] @ $4F49: 23 34
    36,52,  // [ 322] @ $4F4B: 24 34
    36,37,  // [ 324] @ $4F4D: 24 25 <-- 0x25 (37) = BUG, should be 35!
    37,53,  // [ 326] @ $4F4F: 25 35
    37,54,  // [ 328] @ $4F51: 25 36
    38,54,  // [ 330] @ $4F53: 26 36
    38,55,  // [ 332] @ $4F55: 26 37
    38,56,  // [ 334] @ $4F57: 26 38
    39,56,  // [ 336] @ $4F59: 27 38
    39,57,  // [ 338] @ $4F5B: 27 39
    39,58,  // [ 340] @ $4F5D: 27 3A
    40,57,  // [ 342] @ $4F5F: 28 39
    40,58,  // [ 344] @ $4F61: 28 3A
    40,59,  // [ 346] @ $4F63: 28 3B
    41,58,  // [ 348] @ $4F65: 29 3A
    41,59,  // [ 350] @ $4F67: 29 3B
    41,60,  // [ 352] @ $4F69: 29 3C
    42,59,  // [ 354] @ $4F6B: 2A 3B
    42,60,  // [ 356] @ $4F6D: 2A 3C
    42,61,  // [ 358] @ $4F6F: 2A 3D
    43,60,  // [ 360] @ $4F71: 2B 3C
    43,61,  // [ 362] @ $4F73: 2B 3D
    43,62,  // [ 364] @ $4F75: 2B 3E
    44,61,  // [ 366] @ $4F77: 2C 3D
    44,62,  // [ 368] @ $4F79: 2C 3E
    45,62,  // [ 370] @ $4F7B: 2D 3E
    45,63,  // [ 372] @ $4F7D: 2D 3F
    46,63,  // [ 374] @ $4F7F: 2E 3F
    47,63,  // [ 376] @ $4F81: 2F 3F
    48,63,  // [ 378] @ $4F83: 30 3F
    49,63,  // [ 380] @ $4F85: 31 3F
    47,47,  // [ 382] @ $4F87: 2F 2F
    46,47,  // [ 384] @ $4F89: 2E 2F
    46,48,  // [ 386] @ $4F8B: 2E 30
    47,48,  // [ 388] @ $4F8D: 2F 30
    48,48,  // [ 390] @ $4F8F: 30 30
    49,48,  // [ 392] @ $4F91: 31 30
    50,47,  // [ 394] @ $4F93: 32 2F
    51,46,  // [ 396] @ $4F95: 33 2E
    52,45,  // [ 398] @ $4F97: 34 2D
    52,44,  // [ 400] @ $4F99: 34 2C
    53,44,  // [ 402] @ $4F9B: 35 2C
    53,43,  // [ 404] @ $4F9D: 35 2B
    53,42,  // [ 406] @ $4F9F: 35 2A
    54,42,  // [ 408] @ $4FA1: 36 2A
    54,41,  // [ 410] @ $4FA3: 36 29
    53,41,  // [ 412] @ $4FA5: 35 29
    53,40,  // [ 414] @ $4FA7: 35 28
    52,40,  // [ 416] @ $4FA9: 34 28
    51,40,  // [ 418] @ $4FAB: 33 28
    50,41,  // [ 420] @ $4FAD: 32 29
    49,42,  // [ 422] @ $4FAF: 31 2A
    48,43,  // [ 424] @ $4FB1: 30 2B
    48,44,  // [ 426] @ $4FB3: 30 2C
    47,44,  // [ 428] @ $4FB5: 2F 2C
    47,45,  // [ 430] @ $4FB7: 2F 2D
    46,45,  // [ 432] @ $4FB9: 2E 2D
    46,46,  // [ 434] @ $4FBB: 2E 2E
    46,47,  // [ 436] @ $4FBD: 2E 2F
    46,48,  // [ 438] @ $4FBF: 2E 30
    45,48,  // [ 440] @ $4FC1: 2D 30
    46,49,  // [ 442] @ $4FC3: 2E 31
    45,49,  // [ 444] @ $4FC5: 2D 31
    46,50,  // [ 446] @ $4FC7: 2E 32
    45,50,  // [ 448] @ $4FC9: 2D 32
    46,51,  // [ 450] @ $4FCB: 2E 33
    45,51,  // [ 452] @ $4FCD: 2D 33
    46,52,  // [ 454] @ $4FCF: 2E 34
    47,52,  // [ 456] @ $4FD1: 2F 34
    47,53,  // [ 458] @ $4FD3: 2F 35
    48,53,  // [ 460] @ $4FD5: 30 35
    49,53,  // [ 462] @ $4FD7: 31 35
    50,52,  // [ 464] @ $4FD9: 32 34
    51,51,  // [ 466] @ $4FDB: 33 33
    51,50,  // [ 468] @ $4FDD: 33 32
    52,49,  // [ 470] @ $4FDF: 34 31
    53,48,  // [ 472] @ $4FE1: 35 30
    54,47,  // [ 474] @ $4FE3: 36 2F
    55,46,  // [ 476] @ $4FE5: 37 2E
    56,45,  // [ 478] @ $4FE7: 38 2D
    57,44,  // [ 480] @ $4FE9: 39 2C
    58,43,  // [ 482] @ $4FEB: 3A 2B
    58,42,  // [ 484] @ $4FED: 3A 2A
    59,41,  // [ 486] @ $4FEF: 3B 29
    60,40,  // [ 488] @ $4FF1: 3C 28
    61,39,  // [ 490] @ $4FF3: 3D 27
    62,38,  // [ 492] @ $4FF5: 3E 26
    63,38,  // [ 494] @ $4FF7: 3F 26
    63,39,  // [ 496] @ $4FF9: 3F 27
    64,39,  // [ 498] @ $4FFB: 40 27
    64,40,  // [ 500] @ $4FFD: 40 28
    64,41,  // [ 502] @ $4FFF: 40 29
    63,41,  // [ 504] @ $5001: 3F 29
    64,42,  // [ 506] @ $5003: 40 2A
    63,42,  // [ 508] @ $5005: 3F 2A
    63,43,  // [ 510] @ $5007: 3F 2B
    62,43,  // [ 512] @ $5009: 3E 2B
    62,44,  // [ 514] @ $500B: 3E 2C
    62,45,  // [ 516] @ $500D: 3E 2D
    61,44,  // [ 518] @ $500F: 3D 2C
    61,45,  // [ 520] @ $5011: 3D 2D
    61,46,  // [ 522] @ $5013: 3D 2E
    60,46,  // [ 524] @ $5015: 3C 2E
    60,47,  // [ 526] @ $5017: 3C 2F
    59,47,  // [ 528] @ $5019: 3B 2F
    59,48,  // [ 530] @ $501B: 3B 30
    60,48,  // [ 532] @ $501D: 3C 30
    59,49,  // [ 534] @ $501F: 3B 31
    60,49,  // [ 536] @ $5021: 3C 31
    60,50,  // [ 538] @ $5023: 3C 32
    61,50,  // [ 540] @ $5025: 3D 32
    61,49,  // [ 542] @ $5027: 3D 31
    62,49,  // [ 544] @ $5029: 3E 31
    63,48,  // [ 546] @ $502B: 3F 30
    64,47,  // [ 548] @ $502D: 40 2F
    65,46,  // [ 550] @ $502F: 41 2E
    66,45,  // [ 552] @ $5031: 42 2D
    67,44,  // [ 554] @ $5033: 43 2C
    68,43,  // [ 556] @ $5035: 44 2B
    69,42,  // [ 558] @ $5037: 45 2A
    69,41,  // [ 560] @ $5039: 45 29
    70,40,  // [ 562] @ $503B: 46 28
    70,39,  // [ 564] @ $503D: 46 27
    71,39,  // [ 566] @ $503F: 47 27
    71,38,  // [ 568] @ $5041: 47 26
    71,37,  // [ 570] @ $5043: 47 25
    70,36,  // [ 572] @ $5045: 46 24
    69,36,  // [ 574] @ $5047: 45 24
    68,37,  // [ 576] @ $5049: 44 25
    68,38,  // [ 578] @ $504B: 44 26
    68,39,  // [ 580] @ $504D: 44 27
    68,40,  // [ 582] @ $504F: 44 28
    69,40,  // [ 584] @ $5051: 45 28
    70,40,  // [ 586] @ $5053: 46 28
    71,41,  // [ 588] @ $5055: 47 29
    72,41,  // [ 590] @ $5057: 48 29
    73,40,  // [ 592] @ $5059: 49 28
    74,40,  // [ 594] @ $505B: 4A 28
    75,40,  // [ 596] @ $505D: 4B 28
    75,41,  // [ 598] @ $505F: 4B 29
    76,41,  // [ 600] @ $5061: 4C 29
    76,42,  // [ 602] @ $5063: 4C 2A
    77,42,  // [ 604] @ $5065: 4D 2A
    78,42,  // [ 606] @ $5067: 4E 2A
    79,41,  // [ 608] @ $5069: 4F 29
    80,41,  // [ 610] @ $506B: 50 29
    80,40,  // [ 612] @ $506D: 50 28
    81,40,  // [ 614] @ $506F: 51 28
    81,39,  // [ 616] @ $5071: 51 27
    82,39,  // [ 618] @ $5073: 52 27
    82,38,  // [ 620] @ $5075: 52 26
    83,38,  // [ 622] @ $5077: 53 26
    83,37,  // [ 624] @ $5079: 53 25
    84,37,  // [ 626] @ $507B: 54 25
    84,36,  // [ 628] @ $507D: 54 24
    83,36,  // [ 630] @ $507F: 53 24
    83,35,  // [ 632] @ $5081: 53 23
    82,35,  // [ 634] @ $5083: 52 23
    81,35,  // [ 636] @ $5085: 51 23
    80,36,  // [ 638] @ $5087: 50 24
    79,36,  // [ 640] @ $5089: 4F 24
    79,37,  // [ 642] @ $508B: 4F 25
    78,37,  // [ 644] @ $508D: 4E 25
    78,38,  // [ 646] @ $508F: 4E 26
    77,38,  // [ 648] @ $5091: 4D 26
    77,39,  // [ 650] @ $5093: 4D 27
    76,39,  // [ 652] @ $5095: 4C 27
    77,40,  // [ 654] @ $5097: 4D 28
    76,40,  // [ 656] @ $5099: 4C 28
    76,41,  // [ 658] @ $509B: 4C 29
    75,41,  // [ 660] @ $509D: 4B 29
    74,42,  // [ 662] @ $509F: 4A 2A
    75,42,  // [ 664] @ $50A1: 4B 2A
    76,42,  // [ 666] @ $50A3: 4C 2A
    74,43,  // [ 668] @ $50A5: 4A 2B
    75,43,  // [ 670] @ $50A7: 4B 2B
    76,43,  // [ 672] @ $50A9: 4C 2B
    74,44,  // [ 674] @ $50AB: 4A 2C
    75,44,  // [ 676] @ $50AD: 4B 2C
    76,44,  // [ 678] @ $50AF: 4C 2C
    74,45,  // [ 680] @ $50B1: 4A 2D
    75,45,  // [ 682] @ $50B3: 4B 2D
    76,45,  // [ 684] @ $50B5: 4C 2D
    75,46,  // [ 686] @ $50B7: 4B 2E
    76,46,  // [ 688] @ $50B9: 4C 2E
    77,46,  // [ 690] @ $50BB: 4D 2E
    75,47,  // [ 692] @ $50BD: 4B 2F
    76,47,  // [ 694] @ $50BF: 4C 2F
    77,47,  // [ 696] @ $50C1: 4D 2F
    78,47,  // [ 698] @ $50C3: 4E 2F
    79,46,  // [ 700] @ $50C5: 4F 2E
    80,46,  // [ 702] @ $50C7: 50 2E
    81,45,  // [ 704] @ $50C9: 51 2D
    82,44,  // [ 706] @ $50CB: 52 2C
    83,43,  // [ 708] @ $50CD: 53 2B
    84,43,  // [ 710] @ $50CF: 54 2B
    85,42,  // [ 712] @ $50D1: 55 2A
    86,41,  // [ 714] @ $50D3: 56 29
    87,40,  // [ 716] @ $50D5: 57 28
    88,39,  // [ 718] @ $50D7: 58 27
    89,38,  // [ 720] @ $50D9: 59 26
    90,37,  // [ 722] @ $50DB: 5A 25
    91,36,  // [ 724] @ $50DD: 5B 24
    92,35,  // [ 726] @ $50DF: 5C 23
    93,35,  // [ 728] @ $50E1: 5D 23
    94,36,  // [ 730] @ $50E3: 5E 24
    94,37,  // [ 732] @ $50E5: 5E 25
    93,38,  // [ 734] @ $50E7: 5D 26
    92,39,  // [ 736] @ $50E9: 5C 27
    91,40,  // [ 738] @ $50EB: 5B 28
    90,41,  // [ 740] @ $50ED: 5A 29
    89,42,  // [ 742] @ $50EF: 59 2A
    88,43,  // [ 744] @ $50F1: 58 2B
    87,44,  // [ 746] @ $50F3: 57 2C
    86,45,  // [ 748] @ $50F5: 56 2D
    86,46,  // [ 750] @ $50F7: 56 2E
    87,46,  // [ 752] @ $50F9: 57 2E
    87,45,  // [ 754] @ $50FB: 57 2D
    88,44,  // [ 756] @ $50FD: 58 2C
    89,43,  // [ 758] @ $50FF: 59 2B
    90,42,  // [ 760] @ $5101: 5A 2A
    91,41,  // [ 762] @ $5103: 5B 29
    92,40,  // [ 764] @ $5105: 5C 28
    93,39,  // [ 766] @ $5107: 5D 27
    94,38,  // [ 768] @ $5109: 5E 26
    95,37,  // [ 770] @ $510B: 5F 25
    96,36,  // [ 772] @ $510D: 60 24
    97,35,  // [ 774] @ $510F: 61 23
    98,35,  // [ 776] @ $5111: 62 23
    99,35,  // [ 778] @ $5113: 63 23
   100,36,  // [ 780] @ $5115: 64 24
   100,37,  // [ 782] @ $5117: 64 25
    99,37,  // [ 784] @ $5119: 63 25
    99,38,  // [ 786] @ $511B: 63 26
    98,38,  // [ 788] @ $511D: 62 26
    98,39,  // [ 790] @ $511F: 62 27
    97,39,  // [ 792] @ $5121: 61 27
    97,40,  // [ 794] @ $5123: 61 28
    96,40,  // [ 796] @ $5125: 60 28
    96,41,  // [ 798] @ $5127: 60 29
    95,41,  // [ 800] @ $5129: 5F 29
    95,42,  // [ 802] @ $512B: 5F 2A
    95,43,  // [ 804] @ $512D: 5F 2B
    94,43,  // [ 806] @ $512F: 5E 2B
    94,44,  // [ 808] @ $5131: 5E 2C
    94,45,  // [ 810] @ $5133: 5E 2D
    93,45,  // [ 812] @ $5135: 5D 2D
    93,46,  // [ 814] @ $5137: 5D 2E
    94,46,  // [ 816] @ $5139: 5E 2E
    93,47,  // [ 818] @ $513B: 5D 2F
    94,47,  // [ 820] @ $513D: 5E 2F
    94,48,  // [ 822] @ $513F: 5E 30
    95,48,  // [ 824] @ $5141: 5F 30
    95,47,  // [ 826] @ $5143: 5F 2F
    96,47,  // [ 828] @ $5145: 60 2F
    97,47,  // [ 830] @ $5147: 61 2F
    98,46,  // [ 832] @ $5149: 62 2E
    99,45,  // [ 834] @ $514B: 63 2D
   100,44,  // [ 836] @ $514D: 64 2C
   101,43,  // [ 838] @ $514F: 65 2B
   102,42,  // [ 840] @ $5151: 66 2A
   103,41,  // [ 842] @ $5153: 67 29
   104,40,  // [ 844] @ $5155: 68 28
   105,39,  // [ 846] @ $5157: 69 27
   106,39,  // [ 848] @ $5159: 6A 27
   107,38,  // [ 850] @ $515B: 6B 26
   108,38,  // [ 852] @ $515D: 6C 26
   109,37,  // [ 854] @ $515F: 6D 25
   110,37,  // [ 856] @ $5161: 6E 25
   111,37,  // [ 858] @ $5163: 6F 25
   112,38,  // [ 860] @ $5165: 70 26
   112,39,  // [ 862] @ $5167: 70 27
   112,40,  // [ 864] @ $5169: 70 28
   112,39,  // [ 866] @ $516B: 70 27
   112,38,  // [ 868] @ $516D: 70 26
   111,37,  // [ 870] @ $516F: 6F 25
   110,37,  // [ 872] @ $5171: 6E 25
   109,37,  // [ 874] @ $5173: 6D 25
   108,38,  // [ 876] @ $5175: 6C 26
   107,38,  // [ 878] @ $5177: 6B 26
   106,39,  // [ 880] @ $5179: 6A 27
   105,40,  // [ 882] @ $517B: 69 28
   104,41,  // [ 884] @ $517D: 68 29
   103,42,  // [ 886] @ $517F: 67 2A
   102,43,  // [ 888] @ $5181: 66 2B
   102,44,  // [ 890] @ $5183: 66 2C
   101,44,  // [ 892] @ $5185: 65 2C
   101,45,  // [ 894] @ $5187: 65 2D
   100,45,  // [ 896] @ $5189: 64 2D
   100,46,  // [ 898] @ $518B: 64 2E
   101,46,  // [ 900] @ $518D: 65 2E
   100,47,  // [ 902] @ $518F: 64 2F
   101,47,  // [ 904] @ $5191: 65 2F
   102,47,  // [ 906] @ $5193: 66 2F
   101,48,  // [ 908] @ $5195: 65 30
   102,48,  // [ 910] @ $5197: 66 30
   103,48,  // [ 912] @ $5199: 67 30
   104,47,  // [ 914] @ $519B: 68 2F
   105,47,  // [ 916] @ $519D: 69 2F
   106,47,  // [ 918] @ $519F: 6A 2F
   107,47,  // [ 920] @ $51A1: 6B 2F
   107,46,  // [ 922] @ $51A3: 6B 2E
   108,46,  // [ 924] @ $51A5: 6C 2E
   108,45,  // [ 926] @ $51A7: 6C 2D
   109,45,  // [ 928] @ $51A9: 6D 2D
   109,44,  // [ 930] @ $51AB: 6D 2C
   110,43,  // [ 932] @ $51AD: 6E 2B
   111,42,  // [ 934] @ $51AF: 6F 2A
   112,41,  // [ 936] @ $51B1: 70 29
   113,40,  // [ 938] @ $51B3: 71 28
   114,40,  // [ 940] @ $51B5: 72 28
   115,39,  // [ 942] @ $51B7: 73 27
   114,40,  // [ 944] @ $51B9: 72 28
   113,40,  // [ 946] @ $51BB: 71 28
   112,41,  // [ 948] @ $51BD: 70 29
   111,42,  // [ 950] @ $51BF: 6F 2A
   110,43,  // [ 952] @ $51C1: 6E 2B
   109,44,  // [ 954] @ $51C3: 6D 2C
   109,45,  // [ 956] @ $51C5: 6D 2D
   108,46,  // [ 958] @ $51C7: 6C 2E
   107,47,  // [ 960] @ $51C9: 6B 2F
   106,48,  // [ 962] @ $51CB: 6A 30
   105,49,  // [ 964] @ $51CD: 69 31
   104,50,  // [ 966] @ $51CF: 68 32
   103,51,  // [ 968] @ $51D1: 67 33
   103,52,  // [ 970] @ $51D3: 67 34
   102,52,  // [ 972] @ $51D5: 66 34
   102,53,  // [ 974] @ $51D7: 66 35
   101,53,  // [ 976] @ $51D9: 65 35
   101,54,  // [ 978] @ $51DB: 65 36
   101,55,  // [ 980] @ $51DD: 65 37
   100,55,  // [ 982] @ $51DF: 64 37
   100,56,  // [ 984] @ $51E1: 64 38
   100,57,  // [ 986] @ $51E3: 64 39
    99,56,  // [ 988] @ $51E5: 63 38
    99,57,  // [ 990] @ $51E7: 63 39
    99,58,  // [ 992] @ $51E9: 63 3A
    98,58,  // [ 994] @ $51EB: 62 3A
    98,59,  // [ 996] @ $51ED: 62 3B
    97,59,  // [ 998] @ $51EF: 61 3B
    97,60,  // [1000] @ $51F1: 61 3C
    96,60,  // [1002] @ $51F3: 60 3C
    96,61,  // [1004] @ $51F5: 60 3D
    95,61,  // [1006] @ $51F7: 5F 3D
    95,62,  // [1008] @ $51F9: 5F 3E
    94,62,  // [1010] @ $51FB: 5E 3E
    94,63,  // [1012] @ $51FD: 5E 3F
    93,62,  // [1014] @ $51FF: 5D 3E
    93,63,  // [1016] @ $5201: 5D 3F
    93,64,  // [1018] @ $5203: 5D 40
    92,63,  // [1020] @ $5205: 5C 3F
    92,64,  // [1022] @ $5207: 5C 40
    92,65,  // [1024] @ $5209: 5C 41
    91,64,  // [1026] @ $520B: 5B 40
    91,65,  // [1028] @ $520D: 5B 41
    90,64,  // [1030] @ $520F: 5A 40
    90,65,  // [1032] @ $5211: 5A 41
    90,66,  // [1034] @ $5213: 5A 42
    89,65,  // [1036] @ $5215: 59 41
    89,66,  // [1038] @ $5217: 59 42
    88,65,  // [1040] @ $5219: 58 41
    88,66,  // [1042] @ $521B: 58 42
    87,65,  // [1044] @ $521D: 57 41
    87,66,  // [1046] @ $521F: 57 42
    86,65,  // [1048] @ $5221: 56 41
    86,66,  // [1050] @ $5223: 56 42
    85,65,  // [1052] @ $5225: 55 41
    85,66,  // [1054] @ $5227: 55 42
    84,64,  // [1056] @ $5229: 54 40
    84,65,  // [1058] @ $522B: 54 41
    84,66,  // [1060] @ $522D: 54 42
    83,65,  // [1062] @ $522F: 53 41
    83,64,  // [1064] @ $5231: 53 40
    83,63,  // [1066] @ $5233: 53 3F
    82,64,  // [1068] @ $5235: 52 40
    82,63,  // [1070] @ $5237: 52 3F
    81,63,  // [1072] @ $5239: 51 3F
    81,62,  // [1074] @ $523B: 51 3E
    80,61,  // [1076] @ $523D: 50 3D
    80,60,  // [1078] @ $523F: 50 3C
    80,59,  // [1080] @ $5241: 50 3B
    81,58,  // [1082] @ $5243: 51 3A
    81,57,  // [1084] @ $5245: 51 39
    82,57,  // [1086] @ $5247: 52 39
    82,56,  // [1088] @ $5249: 52 38
    83,55,  // [1090] @ $524B: 53 37
    84,54,  // [1092] @ $524D: 54 36
    85,54,  // [1094] @ $524F: 55 36
    86,53,  // [1096] @ $5251: 56 35
    87,53,  // [1098] @ $5253: 57 35
    88,53,  // [1100] @ $5255: 58 35
    89,52,  // [1102] @ $5257: 59 34
    90,52,  // [1104] @ $5259: 5A 34
    91,52,  // [1106] @ $525B: 5B 34
    92,52,  // [1108] @ $525D: 5C 34
    93,52,  // [1110] @ $525F: 5D 34
    94,52,  // [1112] @ $5261: 5E 34
    95,52,  // [1114] @ $5263: 5F 34
    96,52,  // [1116] @ $5265: 60 34
    97,52,  // [1118] @ $5267: 61 34
    98,52,  // [1120] @ $5269: 62 34
    99,52,  // [1122] @ $526B: 63 34
   100,52,  // [1124] @ $526D: 64 34
   101,51,  // [1126] @ $526F: 65 33
   102,51,  // [1128] @ $5271: 66 33
   103,51,  // [1130] @ $5273: 67 33
   104,51,  // [1132] @ $5275: 68 33
   105,50,  // [1134] @ $5277: 69 32
   106,50,  // [1136] @ $5279: 6A 32
   106,49,  // [1138] @ $527B: 6A 31
   107,48,  // [1140] @ $527D: 6B 30
   108,49,  // [1142] @ $527F: 6C 31
   109,48,  // [1144] @ $5281: 6D 30
   110,48,  // [1146] @ $5283: 6E 30
   111,47,  // [1148] @ $5285: 6F 2F
   112,47,  // [1150] @ $5287: 70 2F
   113,47,  // [1152] @ $5289: 71 2F
   114,47,  // [1154] @ $528B: 72 2F
   115,47,  // [1156] @ $528D: 73 2F
   115,48,  // [1158] @ $528F: 73 30
   116,48,  // [1160] @ $5291: 74 30
   117,48,  // [1162] @ $5293: 75 30
   118,48,  // [1164] @ $5295: 76 30
   119,47,  // [1166] @ $5297: 77 2F
   120,47,  // [1168] @ $5299: 78 2F
   121,47,  // [1170] @ $529B: 79 2F
   121,46,  // [1172] @ $529D: 79 2E
   122,46,  // [1174] @ $529F: 7A 2E
   122,45,  // [1176] @ $52A1: 7A 2D
   123,45,  // [1178] @ $52A3: 7B 2D
   123,44,  // [1180] @ $52A5: 7B 2C
   124,44,  // [1182] @ $52A7: 7C 2C
   123,43,  // [1184] @ $52A9: 7B 2B
   124,43,  // [1186] @ $52AB: 7C 2B
   124,42,  // [1188] @ $52AD: 7C 2A
   123,41,  // [1190] @ $52AF: 7B 29
   122,41,  // [1192] @ $52B1: 7A 29
   121,41,  // [1194] @ $52B3: 79 29
   120,42,  // [1196] @ $52B5: 78 2A
   119,42,  // [1198] @ $52B7: 77 2A
   118,43,  // [1200] @ $52B9: 76 2B
   117,43,  // [1202] @ $52BB: 75 2B
   117,44,  // [1204] @ $52BD: 75 2C
   116,44,  // [1206] @ $52BF: 74 2C
   116,45,  // [1208] @ $52C1: 74 2D
   115,45,  // [1210] @ $52C3: 73 2D
   116,46,  // [1212] @ $52C5: 74 2E
   115,46,  // [1214] @ $52C7: 73 2E
   114,46,  // [1216] @ $52C9: 72 2E
   113,47,  // [1218] @ $52CB: 71 2F
   114,47,  // [1220] @ $52CD: 72 2F
   115,47,  // [1222] @ $52CF: 73 2F
   113,48,  // [1224] @ $52D1: 71 30
   114,48,  // [1226] @ $52D3: 72 30
   115,48,  // [1228] @ $52D5: 73 30
   112,49,  // [1230] @ $52D7: 70 31
   113,49,  // [1232] @ $52D9: 71 31
   114,49,  // [1234] @ $52DB: 72 31
   112,50,  // [1236] @ $52DD: 70 32
   113,50,  // [1238] @ $52DF: 71 32
   114,50,  // [1240] @ $52E1: 72 32
   112,51,  // [1242] @ $52E3: 70 33
   113,51,  // [1244] @ $52E5: 71 33
   114,51,  // [1246] @ $52E7: 72 33
   113,52,  // [1248] @ $52E9: 71 34
   114,52,  // [1250] @ $52EB: 72 34
   115,52,  // [1252] @ $52ED: 73 34
   114,53,  // [1254] @ $52EF: 72 35
   115,53,  // [1256] @ $52F1: 73 35
   116,53,  // [1258] @ $52F3: 74 35
   117,53,  // [1260] @ $52F5: 75 35
   118,53,  // [1262] @ $52F7: 76 35
   119,52,  // [1264] @ $52F9: 77 34
   120,52,  // [1266] @ $52FB: 78 34
   121,51,  // [1268] @ $52FD: 79 33

   140,26,  // [1270] @ $52FF: 8C 1A
   139,26,  // [1272] @ $5301: 8B 1A
   140,27,  // [1274] @ $5303: 8C 1B
   139,27,  // [1276] @ $5305: 8B 1B
   140,28,  // [1278] @ $5307: 8C 1C
   139,28,  // [1280] @ $5309: 8B 1C
   138,28,  // [1282] @ $530B: 8A 1C
   140,29,  // [1284] @ $530D: 8C 1D
   139,29,  // [1286] @ $530F: 8B 1D
   138,29,  // [1288] @ $5311: 8A 1D
   137,29,  // [1290] @ $5313: 89 1D
   139,30,  // [1292] @ $5315: 8B 1E
   138,30,  // [1294] @ $5317: 8A 1E
   137,30,  // [1296] @ $5319: 89 1E
   139,31,  // [1298] @ $531B: 8B 1F
   138,31,  // [1300] @ $531D: 8A 1F
   137,31,  // [1302] @ $531F: 89 1F
   138,32,  // [1304] @ $5321: 8A 20
   137,32,  // [1306] @ $5323: 89 20
   136,32,  // [1308] @ $5325: 88 20
   138,33,  // [1310] @ $5327: 8A 21
   137,33,  // [1312] @ $5329: 89 21
   136,33,  // [1314] @ $532B: 88 21
   135,33,  // [1316] @ $532D: 87 21
   137,34,  // [1318] @ $532F: 89 22
   136,34,  // [1320] @ $5331: 88 22
   135,34,  // [1322] @ $5333: 87 22
   137,35,  // [1324] @ $5335: 89 23
   136,35,  // [1326] @ $5337: 88 23
   135,35,  // [1328] @ $5339: 87 23
   134,35,  // [1330] @ $533B: 86 23
   136,36,  // [1332] @ $533D: 88 24
   135,36,  // [1334] @ $533F: 87 24
   134,36,  // [1336] @ $5341: 86 24
   136,37,  // [1338] @ $5343: 88 25
   135,37,  // [1340] @ $5345: 87 25
   134,37,  // [1342] @ $5347: 86 25
   135,38,  // [1344] @ $5349: 87 26
   134,38,  // [1346] @ $534B: 86 26
   133,38,  // [1348] @ $534D: 85 26
   135,39,  // [1350] @ $534F: 87 27
   134,39,  // [1352] @ $5351: 86 27
   133,39,  // [1354] @ $5353: 85 27
   134,40,  // [1356] @ $5355: 86 28
   133,40,  // [1358] @ $5357: 85 28
   132,40,  // [1360] @ $5359: 84 28
   134,41,  // [1362] @ $535B: 86 29
   133,41,  // [1364] @ $535D: 85 29
   132,41,  // [1366] @ $535F: 84 29
   133,42,  // [1368] @ $5361: 85 2A
   132,42,  // [1370] @ $5363: 84 2A
   131,42,  // [1372] @ $5365: 83 2A
   133,43,  // [1374] @ $5367: 85 2B
   132,43,  // [1376] @ $5369: 84 2B
   131,43,  // [1378] @ $536B: 83 2B
   132,44,  // [1380] @ $536D: 84 2C
   131,44,  // [1382] @ $536F: 83 2C
   130,44,  // [1384] @ $5371: 82 2C
   132,45,  // [1386] @ $5373: 84 2D
   131,45,  // [1388] @ $5375: 83 2D
   130,45,  // [1390] @ $5377: 82 2D
   131,46,  // [1392] @ $5379: 83 2E
   130,46,  // [1394] @ $537B: 82 2E
   129,46,  // [1396] @ $537D: 81 2E
   130,47,  // [1398] @ $537F: 82 2F
   129,47,  // [1400] @ $5381: 81 2F
   130,48,  // [1402] @ $5383: 82 30
   129,48,  // [1404] @ $5385: 81 30
   129,49,  // [1406] @ $5387: 81 31
   128,49,  // [1408] @ $5389: 80 31
   128,50,  // [1410] @ $538B: 80 32
   127,51,  // [1412] @ $538D: 7F 33
   127,52,  // [1414] @ $538F: 7F 34
   126,53,  // [1416] @ $5391: 7E 35
   126,54,  // [1418] @ $5393: 7E 36
   125,55,  // [1420] @ $5395: 7D 37
   125,56,  // [1422] @ $5397: 7D 38
   124,57,  // [1424] @ $5399: 7C 39
   123,61,  // [1426] @ $539B: 7B 3D
   122,61,  // [1428] @ $539D: 7A 3D
   123,62,  // [1430] @ $539F: 7B 3E
   122,62,  // [1432] @ $53A1: 7A 3E
   121,62,  // [1434] @ $53A3: 79 3E
   122,63,  // [1436] @ $53A5: 7A 3F
   121,63,  // [1438] @ $53A7: 79 3F
];
