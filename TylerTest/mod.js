


//   ShrineDurations X 3
const shrinesFilename = 'global\\excel\\shrines.txt';
const shrines = D2RMM.readTsv(shrinesFilename);

shrines.rows.forEach((row) => {

    if (row['Duration in frames'] > 0 && row['*Shrine Type'] === 'Booster') {
        row['Duration in frames'] = Math.floor(row['Duration in frames'] * 3);
    }

});
D2RMM.writeTsv(shrinesFilename, shrines);

// 词缀颜色
const itemModifiersFilename = 'local\\lng\\strings\\item-modifiers.json';
const itemModifiers = D2RMM.readJson(itemModifiersFilename);
itemModifiers.forEach((item) => {
    const itemKey = item.Key;

    if (itemKey === 'ModStr3k') {
        item.zhTW = 'ÿc3ÿc4%+d 所有技能ÿc3';
    }
    else if (itemKey === 'strModAllResistances') {
        item.zhTW = 'ÿc3ÿc4所有抵抗力加 %+dÿc3';
    }
    else if (itemKey === 'ModStr1k') {
        item.zhTW = 'ÿc3ÿcT抗寒(CR) %+d%%ÿc3';
    }
    else if (itemKey === 'ModStr1j') {
        item.zhTW = 'ÿc3ÿc1抗火 (FR) %+d%%ÿc3';
    }
    else if (itemKey === 'ModStr1l') {
        item.zhTW = 'ÿc3ÿc9抗電 (LR) %+d%%ÿc3';
    }
    else if (itemKey === 'ModStr1m') {
        item.zhTW = 'ÿc3ÿc7抗魔 (MR) %+d%%ÿc3';
    }
    else if (itemKey === 'ModStr1n') {
        item.zhTW = 'ÿc3ÿc2抗毒 (PR) %+d%%ÿc3';
    }
    else if (itemKey === 'ModStr2g') {
        item.zhTW = 'ÿc3ÿc1生命上限提高 %d%% ÿc3';
    }
    else if (itemKey === 'ModStr2h') {
        item.zhTW = 'ÿc3ÿc1法力上限提高 %d%% ÿc3';
    }
    else if (itemKey === 'ModitemdamFiresk') {
        item.zhTW = 'ÿc3ÿc1%+d%% 火焰技能的傷害(FD)ÿc3';
    }
    else if (itemKey === 'ModitemdamLtngsk') {
        item.zhTW = 'ÿc3ÿc9%+d%% 雷電技能的傷害(LD)ÿc3';
    }
    else if (itemKey === 'ModitemdamColdsk') {
        item.zhTW = 'ÿc3ÿcT%+d%% 冰凍技能的傷害(CD)ÿc3';
    }
    else if (itemKey === 'ModitemdamPoissk') {
        item.zhTW = 'ÿc3ÿc2%+d%% 毒素技能的傷害(PD)ÿc3';
    }
    else if (itemKey === 'ModStr1x') {
        item.zhTW = 'ÿc3ÿcA%d%% 更佳的機會取得魔法裝備(MF)ÿc3';
    }

});
D2RMM.writeJson(itemModifiersFilename, itemModifiers);


// D2R colors runes as orange by default, but it seems to be based on item type
// rather than localization strings so it does not apply to the stacked versions
// we update the localization file to manually color the names of runes here
// so that it will also apply to the stacked versions of the runes
const itemRunesFilename = 'local\\lng\\strings\\item-runes.json';
const itemRunes = D2RMM.readJson(itemRunesFilename);
itemRunes.forEach((item) => {
    const itemtype = item.Key;
    if (itemtype.match(/^r[0-9]{2}$/) != null) {

        const runeNumber = itemtype.substring(1, 3);
        // update all localizations
        for (const key in item) {
            if (key !== 'id' && key !== 'Key') {
                if (runeNumber <= 8)
                    item[key] = `ÿc0${item[key]}`;
                if (runeNumber >= 9 && runeNumber <= 16)
                    item[key] = `ÿc3${item[key]}`;
                if (runeNumber >= 16 && runeNumber <= 24)
                    item[key] = `ÿc8${item[key]}`;
                if (runeNumber >= 25 && runeNumber <= 30)
                    item[key] = `ÿcQ${item[key]}`;
                if (runeNumber >= 30)
                    item[key] = `ÿc;${item[key]}`;
            }
        }
    }
});

/////////////////////////////////////////////////////////
////符文之语参数备注

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
    'local', // <mod folder>\Local
    'local', // <diablo 2 folder>\mods\<modname>\<modname>.mpq\data\local
    true // overwrite any conflicts
);


// D2RMM.copyFile(
//     '../../../mods/D2RMM/D2RMM.mpq/', // <mod folder>\Local
//     '../../../../D2RMM 1.3/mods/Package/D2RMM.mpq/', // <diablo 2 folder>\mods\<modname>\<modname>.mpq\data\local
//     true // overwrite any conflicts
// );
