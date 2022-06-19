

// 词缀颜色
// ÿc0 - white
// ÿc1 - red
// ÿc2 - green
// ÿc3 - blue
// ÿc4 - gold
// ÿc5 - gray
// ÿc6 - black
// ÿc7 - tan
// ÿc8 - orange
// ÿc9 - yellow
// ÿc; - purple
// ÿc= - white1
// ÿcK - gray1
// ÿcI - gray2
// ÿcM - black1
// ÿcE - lightred
// ÿcU - red1
// ÿcS - darkred
// ÿc@ - orange1
// ÿcJ - orange2
// ÿcL - orange3
// ÿcH - lightgold1
// ÿcD - gold1
// ÿcR - yellow1
// ÿcQ - green1
// ÿcC - green2
// ÿc< - green3
// ÿcA - darkgreen1
// ÿc: - darkgreen2
// ÿcN - turquoise
// ÿcT - skyblue
// ÿcF - lightblue1
// ÿcP - lightblue2
// ÿcB - blue1
// ÿcG - lightpink
// ÿcO - pink
const itemModifiersFilename = 'local\\lng\\strings\\item-modifiers.json';
const itemModifiers = D2RMM.readJson(itemModifiersFilename);

const RESISTENCE_LIMIT = ['ModStr5u', 'ModStr5v', 'ModStr5w', 'ModStr5x', 'ModStr5y'];
const ADD_CHAR_SKILL = ['ModStr3a', 'ModStr3b', 'ModStr3c', 'ModStr3d', 'ModStr3e', 'ModStre8b', 'ModStre8a'];
const FIRE_MODI = ['ModStr1j', 'ModitemdamFiresk', 'ModStr5u', 'Moditemenresfiresk', 'strModFireDamage', 'strModFireDamageRange', 'ModStre9j', 'ModStre9o', 'ModStr5g', 'ModStr5h'];
const COLD_MODI = ['ModStr1k', 'ModitemdamColdsk', 'ModStr5v', 'Moditemenrescoldsk', 'strModColdDamage', 'strModColdDamageRange', 'ModStre9k', 'ModStre9p', 'ModStr5m', 'ModStr5n'];
const LTNG_MODI = ['ModStr1l', 'ModitemdamLtngsk', 'ModStr5w', 'Moditemenresltngsk', 'strModLightningDamage', 'strModLightningDamageRange', 'ModStre9l', 'ModStre9q', 'ModStr5i', 'ModStr5j'];
const POIS_MODI = ['ModStr1n', 'ModitemdamPoissk', 'ModStr5y', 'Moditemenrespoissk', 'strModPoisonDamage', 'strModPoisonDamageRange', 'ModStre9m', 'ModStre9r'];
const MR_MODI = ['ModStr1m', 'ModStr5x', 'strModMagicDamage', 'strModMagicDamageRange', 'ModStre9n', 'ModStr5k', 'ModStr5l'];
//攻擊 紅色 ModStr2j ModStr2k strModEnhancedDamage
const DAM_ED_MODI = ['strModEnhancedDamage', 'strModMinDamage', 'strModMinDamageRange', 'ModStr1f', 'ModStr2j', 'ModStr1g', 'ModStr2k', 'ModStr5b'];
const DR_MR_MODI = ['ModStr2uPercent', 'ModStr2t', 'ModStr2u'];
const EK_MODI = ['ModitemHPaK', 'ModStr5f'];
// ModStr1a 力量
const LIFE_MODI = ['ModStr1a', 'ModStr2g', 'ModStr2l', 'ModStr2p', 'ModStr2w', 'ModStr2z', 'ModStr1u'];
// ModStr4o ModStr4p ModStr4q 打擊恢復
// ModStr4x ModStr4y ModStr4z 格擋速度
// ModStr1b 敏捷
const DEX_MODI = ['ModStr1b', 'ModStr4x', 'ModStr4y', 'ModStr4z', 'ModStr4o', 'ModStr4p', 'ModStr4q'];
// ModStr1c 体能
const STAM_MODI = ['ModStr1c', 'ModStr3v', 'ModStr5d', 'ModStr6e'];
// ModStr1d 能量
const MANA_MODI = ['ModStr1d', 'ModStr2h', 'ModStr2m', 'ModStr2s', 'ModStr2x', 'ModStr2y', 'ModStr3w', 'ModStr4g', 'ModStr1e'];
// Moditem2ExpG Moditem2ExpG
const EXP_MODI = ['Moditem2ExpG', 'Moditem2ExpG'];



itemModifiers.forEach((item) => {
    const itemKey = item.Key;
    if (itemKey === 'strModAllResistances') {
        item.zhTW = 'ÿc3ÿc4所有抵抗力加 %+dÿc3';
    }
    else if (itemKey === 'ModStr4m') {
        item.zhTW = 'ÿc3ÿcJ攻擊速度 %+d%%ÿc3';
    }
    else if (itemKey === 'ModStr4v') {
        item.zhTW = 'ÿc3ÿcL%+d%% 施法速度ÿc3';
    }
    //元素抗性和元素抗性上限;
    else if (FIRE_MODI.includes(itemKey)) {
        item.zhTW = `ÿc3ÿc1${item.zhTW}ÿc3`;
    }
    else if (COLD_MODI.includes(itemKey)) {
        item.zhTW = `ÿc3ÿcT${item.zhTW}ÿc3`;
    }
    else if (LTNG_MODI.includes(itemKey)) {
        item.zhTW = `ÿc3ÿc9${item.zhTW}ÿc3`;
    }
    else if (POIS_MODI.includes(itemKey)) {
        item.zhTW = `ÿc3ÿc2${item.zhTW}ÿc3`;
    }
    else if (MR_MODI.includes(itemKey)) {
        item.zhTW = `ÿc3ÿcP${item.zhTW}ÿc3`;
    }
    //
    else if (DAM_ED_MODI.includes(itemKey)) {
        item.zhTW = `ÿc3ÿcU${item.zhTW}ÿc3`;
    }
    else if (DR_MR_MODI.includes(itemKey)) {
        item.zhTW = `ÿc3ÿcO${item.zhTW}ÿc3`;
    }
    else if (itemKey === 'ModStr1x') {
        item.zhTW = 'ÿc3ÿcA%d%% 更佳的機會取得魔法裝備(MF)ÿc3';
    }
    else if (itemKey === 'strethereal') {
        item.zhTW = 'ÿc3ÿc2無形（無法修復）ÿc3';
    }
    else if (itemKey === 'strItemModEtherealSocketed') {
        item.zhTW = 'ÿc3ÿc2無形（無法修復），鑲孔ÿc4（%i）ÿc3';
    }
    // +角色技能词缀加颜色。gold色。
    else if (itemKey === 'ModStr3k') {
        // item.zhTW = 'ÿc3ÿc4%+d 所有技能ÿc3';
        item.zhTW = `ÿc3ÿcD${item.zhTW}ÿc3`;
    }
    else if (itemKey === 'Moditem2allattrib') {
        item.zhTW = `ÿc3ÿc4${item.zhTW}ÿc3`;
    }
    //生命 力量 红色
    else if (LIFE_MODI.includes(itemKey)) {
        item.zhTW = `ÿc3ÿc1${item.zhTW}ÿc3`;
    }
    //法力 能量 青色 turquoise
    else if (MANA_MODI.includes(itemKey)) {
        item.zhTW = `ÿc3ÿcN${item.zhTW}ÿc3`;
    }
    //体能 活力 黄色
    else if (STAM_MODI.includes(itemKey)) {
        item.zhTW = `ÿc3ÿcR${item.zhTW}ÿc3`;
    }
    //敏捷 格擋 打擊恢復 淺綠
    else if (DEX_MODI.includes(itemKey)) {
        item.zhTW = `ÿc3ÿc<${item.zhTW}ÿc3`;
    }
    //經驗值 紫色
    else if (EXP_MODI.includes(itemKey)) {
        item.zhTW = `ÿc3ÿc;${item.zhTW}ÿc3`;
    }
    //角色技能 橙色
    else if (ADD_CHAR_SKILL.includes(itemKey)) {
        item.zhTW = `ÿc3ÿcL${item.zhTW}ÿc3`;
    }
    // SkillTab技能词缀加颜色。橙色
    else if (itemKey != null && itemKey.substring(0, 13) === 'StrSklTabItem') {
        item.zhTW = `ÿc3ÿc8${item.zhTW}ÿc3`;
    }

    //EK 浅蓝 重置前面的颜色设置
    if (EK_MODI.includes(itemKey)) {
        item.zhTW = `ÿc3ÿcN${item.zhTW}ÿc3`;
    }

});

itemModifiers.push({
    id: D2RMM.getNextStringID(),
    Key: 'innernumdesc',
    enUS: '%+d innernum',
    zhTW: '%+d innernum'
});

D2RMM.writeJson(itemModifiersFilename, itemModifiers);



/////////////////////////////////////////////////////////
////符文之语参数备注
const itemRunesFilename = 'local\\lng\\strings\\item-runes.json';
const itemRunes = D2RMM.readJson(itemRunesFilename);

itemRunes.forEach((item) => {
    const runeKey = item.Key;
    if (runeKey === 'Runeword4') {
        item.zhTW = '[MAX:270ED/40STR]\n野獸';
    }
    else if (runeKey === 'Runeword8') {
        item.zhTW = '[MAX:150Mana]\n骸骨';
    }
    else if (runeKey === 'Runeword9') {
        item.zhTW = '[MAX:21荊棘/50PD]\n刺藤';
    }
    else if (runeKey === 'Runeword10') {
        item.zhTW = '[MAX:340ED/330DTD]\n烙印';
    }
    else if (runeKey === 'Runeword11') {
        item.zhTW = '[MAX:400ED/15LL]\n死亡呼吸';
    }
    else if (runeKey === 'Runeword13') {
        item.zhTW = '[MAX:290ED/6/6/4]\n戰爭召喚';
    }
    else if (runeKey === 'Runeword16') {
        item.zhTW = '[MAX:340ED]\n混沌';
    }
    else if (runeKey === 'Runeword17') {
        item.zhTW = '[MAX:220ED/11MA]\n新月';
    }
    else if (runeKey === 'Runeword20') {
        item.zhTW = '[MAX:385ED]\n死神';
    }
    else if (runeKey === 'Runeword26') {
        item.zhTW = '[MAX:370ED/-60CR]\n末日';
    }
    else if (runeKey === 'Runeword27') {
        item.zhTW = '[MAX:5ATTR]\n飛龍';
    }
    else if (runeKey === 'Runeword29') {
        item.zhTW = '[MAX:30FHR/220DEF/20RES/25MF]\n夢境';
    }
    else if (runeKey === 'Runeword30') {
        item.zhTW = '[MAX:20EDmg/200EDef]\n強制';
    }
    else if (runeKey === 'Runeword31') {
        item.zhTW = '[MAX:380DTD/10ATTR]\n邊緣';
    }
    else if (runeKey === 'Runeword33') {
        item.zhTW = '[MAX:775DEF]\n謎團';
    }
    else if (runeKey === 'Runeword36') {
        item.zhTW = '[MAX:310ED]\n永恆';
    }
    else if (runeKey === 'Runeword39') {
        item.zhTW = '[MAX:370ED]\n饑荒';
    }
    else if (runeKey === 'Runeword37') {
        item.zhTW = '[MAX:16反抗/260ED]\n流亡';
    }
    else if (runeKey === 'Runeword26') {
        item.zhTW = '[MAX:370ED/-60CR]\n末日';
    }
    else if (runeKey === 'Runeword38') {
        item.zhTW = '[MAX:15狂熱/2Skill]\n信心';
    }
    else if (runeKey === 'Runeword40') {
        item.zhTW = '"[MAX:8抗火/-15FR/75Mana]\n閃爍火焰';
    }
    else if (runeKey === 'Runeword41') {
        item.zhTW = '[MAX:1.5Life(LV)/30RES]\n剛毅';
    }
    else if (runeKey === 'Runeword45') {
        item.zhTW = '[MAX:260ED]\n幽暗';
    }
    else if (runeKey === 'Runeword47') {
        item.zhTW = '[MAX:40IAS/400DMG/-25PR/15LK]\n悔恨';
    }
    else if (runeKey === 'Runeword48') {
        item.zhTW = '[MAX:330ED]\n正義之手';
    }
    else if (runeKey === 'Runeword49') {
        item.zhTW = '[MAX:275ED/6女武神]\n和諧';
    }
    else if (runeKey === 'Runeword51') {
        item.zhTW = '[MAX:40RES]\n橡樹之心';
    }
    else if (runeKey === 'Runeword60') {
        item.zhTW = '[MAX:325ED/-55LR]\n無限';
    }
    else if (runeKey === 'Runeword62') {
        item.zhTW = '[MAX:17冥想/260ED/250AR/6致命攻勢]\n靈光';
    }
    else if (runeKey === 'Runeword69') {
        item.zhTW = '[MAX:375ED/70CB]\n最後遺願';
    }
    else if (runeKey === 'Runeword84') {
        item.zhTW = '[MAX:12專注/375ED]\n迷霧';
    }
    else if (runeKey === 'Runeword91') {
        item.zhTW = '[MAX:340ED/15MA]\n誓約';
    }
    else if (runeKey === 'Runeword92') {
        item.zhTW = '[MAX:300DEF/30RES]\n遵從';
    }
    else if (runeKey === 'Runeword103') {
        item.zhTW = '[MAX:15救贖/400ED/400遠程防禦/21FA]\n鳳凰';
    }
    else if (runeKey === 'Runeword106') {
        item.zhTW = '[MAX:17淨化/2Skill/320ED]\n瘟疫';
    }
    else if (runeKey === 'Runeword109') {
        item.zhTW = '[MAX:20專注/300AR]\n驕傲';
    }
    else if (runeKey === 'Runeword112') {
        item.zhTW = '[MAX:170ED/35RES]\n謹慎';
    }
    else if (runeKey === 'Runeword130') {
        item.zhTW = '[MAX:35FCR/112Mana/8MA]\n精神';
    }
    else if (runeKey === 'Runeword137') {
        item.zhTW = '[MAX:290ED]\n石塊';
    }
    else if (runeKey === 'Runeword151') {
        item.zhTW = '[MAX:30IAS/350ED/10LL]\n不屈意志';
    }
});
D2RMM.writeJson(itemRunesFilename, itemRunes);

D2RMM.copyFile(
    'global', // <mod folder>\Local
    'global', // <diablo 2 folder>\mods\<modname>\<modname>.mpq\data\local
    true // overwrite any conflicts
);

D2RMM.copyFile(
    'Local', // <mod folder>\Local
    'local', // <diablo 2 folder>\mods\<modname>\<modname>.mpq\data\local
    true // overwrite any conflicts
);

// D2RMM.copyFile(
//     '../../../mods/D2RMM/D2RMM.mpq/', // <mod folder>\Local
//     '../../../../D2RMM 1.3/mods/Package/D2RMM.mpq/', // <diablo 2 folder>\mods\<modname>\<modname>.mpq\data\local
//     true // overwrite any conflicts
// );
