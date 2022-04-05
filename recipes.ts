export type Item =
    null
    | "cobblestone"
    | "coal"
    | "redstone dust"
    | "iron bar"
    | "stick"
    | "stone"
    | "haybale"
    | "redstone torch"
    | "quartz"
    | "log"
    | "chest"
    | "tripwire hook"
    | "furnace"
    | "minecart"
    | "wood slab"
    | "slimeball"
    | "glowstone dust"
    | "wool"
    | "snowball"
    | "brick"
    | "sand"
    | "sandstone"
    | "tnt"
    | "hopper"
    | "diamond"
    | "glass"
    | "glowstone block"
    | "stone pressure plate"
    | "gold"
    | "bow"
    | "piston"
    | "leather"
    | "book"
    | "lapis"
    | "emerald"
    | "string"
    | "clay ball"
    | "gunpowder"
    | "pumpkin"
    | "torch"
    | "blaze powder"
    | "stone bricks"
    | "bricks"
    | "spider eye"
    | "brown mushroom" 
    | "sugar"
    | "blaze rod"
    | "gold nug"
    | "melon"
    | "wood plank";
export type CraftingTable = [Item?, Item?, Item?, Item?, Item?, Item?, Item?, Item?, Item?]
export class Recipe {
    type: "anyorder" | "rigid";
    data: CraftingTable | Item[];
}

export enum Feedback {
    Green,
    Yellow,
    Red
}

function fourByFour(item: Item): Recipe {
    this.type = "rigid";
    this.data = [
        item, item, null,
        item, item, null,
        null, null, null,
    ];

    return this;
}
function flip(recipe: Recipe): Recipe {
    this.type = "rigid";
    this.data = [
        recipe.data[2], recipe.data[1], recipe.data[0],
        recipe.data[5], recipe.data[4], recipe.data[3],
        recipe.data[8], recipe.data[7], recipe.data[6],
    ];

    return this;
}
function stairs(item: Item): Recipe {
    this.type = "rigid";
    this.data = [
        null, null, item,
        null, item, item,
        item, item, item,
    ];

    return this;
}
function helm(item: Item): Recipe {
    this.type = "rigid";
    this.data = [
        item, item, item,
        item, null, item,
        null, null, null,
    ];

    return this;
}
function boots(item: Item): Recipe {
    this.type = "rigid";
    this.data = [
        item, null, item,
        item, null, item,
        null, null, null,
    ];

    return this;
}
function pick(item: Item): Recipe {
    this.type = "rigid";
    this.data = [
        item, item, item,
        null, st, null,
        null, st, null,
    ];

    return this;
}
function axe(item: Item): Recipe {
    this.type = "rigid";
    this.data = [
        item, item, null,
        item, st, null,
        null, st, null,
    ];

    return this;
}
function hoe(item: Item): Recipe {
    this.type = "rigid";
    this.data = [
        item, item, null,
        null, st, null,
        null, st, null,
    ];

    return this;
}
function shov(item: Item): Recipe {
    this.type = "rigid";
    this.data = [
        item, item, null,
        null, st, null,
        null, st, null,
    ];

    return this;
}
function sword(item: Item): Recipe {
    this.type = "rigid";
    this.data = [
        null, item, null,
        null, item, null,
        null, st, null,
    ];

    return this;
}
function legs(item: Item): Recipe {
    this.type = "rigid";
    this.data = [
        item, item, item,
        item, null, item,
        item, null, item,
    ];

    return this;
}
function chest(item: Item): Recipe {
    this.type = "rigid";
    this.data = [
        item, null, item,
        item, item, item,
        item, item, item,
    ];

    return this;
}
function nineByNine(item: Item): Recipe {
    this.type = "rigid";
    this.data = [
        item, item, item,
        item, item, item,
        item, item, item,
    ];

    return this;
}

function rigid(items: CraftingTable): Recipe {
    this.type = "rigid";
    this.data = items;

    return this;
}

let wp: Item = "wood plank";
let cl: Item = "coal";
let au: Item = "gold";
let cb: Item = "cobblestone";
let rsd: Item = "redstone dust";
let st: Item = "stick";
let fe: Item = "iron bar";
export let recipes: Set<Recipe> = new Set([
    
    fourByFour("glowstone dust"), // glowstone
    fourByFour("snowball"), // snowball
    fourByFour(st), // stone brick
    fourByFour("brick"), // bricks
    fourByFour("sand"), // sandstone
    fourByFour("sandstone"), // smooth sandstone
    fourByFour(wp), // crafting bench
    fourByFour("clay ball"), // clay
    fourByFour("string"), // wool

    nineByNine(au), // gold block
    nineByNine("diamond"), // diamond block
    nineByNine(fe), // iron block
    nineByNine("lapis"), // lapis lazuli block
    nineByNine("emerald"), // lapis lazuli block
    nineByNine(cl), // coal block

    helm("leather"),
    helm(fe),
    helm(au),
    helm("diamond"),

    legs("leather"),
    legs(fe),
    legs(au),
    legs("diamond"),

    chest("leather"),
    chest(fe),
    chest(au),
    chest("diamond"),

    boots("leather"),
    boots(fe),
    boots(au),
    boots("diamond"),
    
    sword(wp),
    sword(cb),
    sword(au),
    sword(fe),
    sword("diamond"),

    shov(wp),
    shov(cb),
    shov(au),
    shov(fe),
    shov("diamond"),

    hoe(wp),
    hoe(cb),
    hoe(au),
    hoe(fe),
    hoe("diamond"),

    pick(wp),
    pick(cb),
    pick(au),
    pick(fe),
    pick("diamond"),

    axe(wp),
    flip(axe(wp)),
    axe(cb),
    flip(axe(cb)),
    axe(fe),
    flip(axe(fe)),
    axe(au),
    flip(axe(au)),
    axe("diamond"),
    flip(axe("diamond")),
    
	stairs(wp),
	flip(stairs(wp)),
	stairs(cb),
	flip(stairs(cb)),
	stairs("quartz"),
	flip(stairs("quartz")),
	stairs("bricks"),
	flip(stairs("bricks")),
	stairs("stone bricks"),
	flip(stairs("stone bricks")),

    rigid([
        wp, wp, wp,
        "book", "book", "book",
        wp, wp, wp,
	]), // bookshelf
	rigid([
        "pumpkin", null, null,
        "torch", null, null,
        null, null, null,
	]), // jack o' lantern
	rigid([
        "gunpowder", "sand", "gunpowder",
        "sand", "gunpowder", "sand",
        "gunpowder", "sand", "gunpowder",
	]), // TNT
    rigid([
        "log", null, null,
        null, null, null,
        null, null, null,
	]), // wooden plank
	rigid([
        wp, null, null,
        wp, null, null,
        null, null, null,
	]), // stick
	rigid([
        cl, null, null,
        wp, null, null,
        null, null, null,
	]), // torch
	rigid([
        wp, wp, wp,
        wp, null, wp,
        wp, wp, wp,
	]), // chest
	rigid([
        cl, cl, cl,
        cl, null, cl,
        cl, cl, cl,
	]), // furnace
	rigid([
        st, null, st,
        st, st, st,
        st, null, st,
	]), // ladder
	rigid([
        wp, st, wp,
        wp, st, wp,
        null, null, null,
	]), // fence
	rigid([
        wp, null, wp,
        wp, wp, wp,
        null, null, null,
	]), // boat
	rigid([
        wp, wp, wp,
        null, null, null,
        null, null, null,
	]), // wood slab
	rigid([
        "stone", "stone", "stone",
        null, null, null,
        null, null, null,
	]), // stone slab
	rigid([
        wp, wp, wp,
        wp, wp, wp,
        null, st, null,
	]), // sign
	rigid([
        wp, wp, null,
        wp, wp, null,
        wp, wp, null,
	]), // door
	rigid([
        st, st, st,
        st, "wool", st,
        st, st, st,
	]), // painting
	rigid([
        "wool", "wool", "wool",
        wp, wp, wp,
        null, null, null,
	]), // bed
	rigid([
        st, st, st,
        st, st, st,
        null, null, null,
	]), // stone wall
	rigid([
        null, rsd, null,
        rsd, "haybale", rsd,
        null, rsd, null,
	]), // target
	rigid([
        cb, cb, cb,
        rsd, rsd, "quartz",
        cb, cb, cb,
	]), // observer
	rigid([
        null, null, null,
        fe, fe, null,
        fe, fe, null,
	]), // iron trapdoor
	rigid([
        null, null, null,
        "tripwire hook", "chest", null,
        null, null, null
	]), // trapped chest
	rigid([
        null, "redstone torch", null,
        "redstone torch", "quartz", "redstone torch",
        "stone", "stone", "stone"
	]), // redstone comparator
	rigid([
        null, null, null,
        null, "tnt", null,
        null, "minecart", null
	]), // minecart with tnt
	rigid([
        null, null, null,
        null, "hopper", null,
        null, "minecart", null
	]), // minecart with hopper
	rigid([
        null, null, null,
        null, "furnace", null,
        null, "minecart", null
	]), // minecart with furnace
	rigid([
        fe, null, fe,
        fe, "chest", fe,
        null, fe, null,
	]), // hopper
	rigid([
        cb, cb, cb,
        cb, null, cb,
        cb, rsd, cb,
	]), // dropper
	rigid([
        "glass", "glass", "glass",
        "quartz", "quartz", "quartz",
        "wood slab", "wood slab", "wood slab",
	]), // daylight sensor
	rigid([
        null, fe, null,
        null, st, null,
        null, wp, null,
	]), // trip wire hook
	rigid([
        null, rsd, null,
        rsd, "glowstone block", rsd,
        null, rsd, null,
	]), // redstone lamp
	rigid([
        null, null, null,
        null, rsd, null,
        null, st, null,
	]), // redstone torch
	rigid([
        fe, st, fe,
        fe, "redstone torch", fe,
        fe, st, fe,
	]), // activator rail
	rigid([
        fe, null, fe,
        fe, "stone pressure plate", fe,
        fe, rsd, fe,
	]), // detector rail
	rigid([
        fe, null, fe,
        fe, st, fe,
        fe, null, fe,
	]), // rail
	rigid([
        au, null, au,
        au, st, au,
        au, rsd, au,
	]), // powered rail
	rigid([
        null, null, null,
        null, "chest", null,
        null, "minecart", null
	]), // minecart with chest
	rigid([
        null, null, null,
        fe, null, fe,
        fe, fe, fe,
	]), // minecart
	rigid([
        wp, wp, wp,
        wp, "diamond", wp,
        wp, wp, wp,
	]), // jukebox
	rigid([
        wp, wp, wp,
        wp, rsd, wp,
        wp, wp, wp,
	]), // note block
	rigid([
        cb, cb, cb,
        cb, "bow", cb,
        cb, rsd, cb,
	]), // dispenser
	rigid([
        null, null, null,
        "redstone torch", rsd, "redstone torch",
        "stone", "stone", "stone",
	]), // repeater
	rigid([
        null, null, null,
        st, wp, st,
        st, wp, st,
	]), // fence gate
	rigid([
        null, null, null,
        null, "slimeball", null,
        null, "piston", null,
	]), // sticky piston
	rigid([
        wp, wp, wp,
        cb, fe, cb,
        cb, rsd, cb,
	]), // piston
	rigid([
        null, null, null,
        wp, wp, wp,
        wp, wp, wp,
	]), // trapdoor
	rigid([
        null, null, null,
        null, wp, null,
        null, null, null,
	]), // wood button
	rigid([
        null, null, null,
        null, "stone", null,
        null, null, null,
	]), // stone button
	rigid([
        null, null, null,
        null, st, null,
        null, cb, null,
	]), // lever
	rigid([
        null, null, null,
        null, null, null,
        fe, fe, null,
	]), // pressure plate light
	rigid([
        null, null, null,
        null, null, null,
        au, au, null,
	]), // pressure plate heavy
	rigid([
        null, null, null,
        null, null, null,
        wp, wp, null,
	]), // pressure plate wood
	rigid([
        null, null, null,
        null, null, null,
        "stone", "stone", null,
	]), // pressure plate stone
	rigid([
        null, null, null,
        null, "slimeball", null,
        null, "blaze powder", null,
	]), // magma cream
	rigid([
        "spider eye", "brown mushroom", "sugar",
        null, null, null,
        null, null, null,
	]), // fermented spider eye
	rigid([
        null, null, null,
        null, "blaze rod", null,
        null, null, null,
	]), // blaze powder
	rigid([
        null, null, null,
        null, "blaze rod", null,
        cb, cb, cb,
	]), // brewing stand
	rigid([
        "gold nug", "gold nug", "gold nug",
        "gold nug", "melon", "gold nug",
        "gold nug", "gold nug", "gold nug",
	]), // glistening melon
	rigid([
        fe, null, fe,
        fe, null, fe,
        fe, fe, fe,
	]), // cauldron
	rigid([
        null, null, null,
        "glass", null, "glass",
        null, "glass", null,
	]), // glass bottle
	rigid([
        null, null, null,
        null, null, null,
        null, null, null,
	]), // item
    rigid([
        null, null, null,
        null, null, null,
        null, null, null,
	]), // item
	rigid([
        null, null, null,
        null, null, null,
        null, null, null,
	]), // item
	rigid([
        null, null, null,
        null, null, null,
        null, null, null,
	]), // item
	rigid([
        null, null, null,
        null, null, null,
        null, null, null,
	]), // item
	rigid([
        null, null, null,
        null, null, null,
        null, null, null,
	]), // item
	rigid([
        null, null, null,
        null, null, null,
        null, null, null,
	]), // item
	rigid([
        null, null, null,
        null, null, null,
        null, null, null,
	]), // item
	rigid([
        null, null, null,
        null, null, null,
        null, null, null,
	]), // item

])
