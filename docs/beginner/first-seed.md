# Setting Up Your First Seed

There are a lot of resources for how to actually generate a seed to play. For a video tutorial you can follow [Trez's guide](https://www.youtube.com/watch?v=7X0Le98C5Yc), and for a written tutorial you can follow the [Setup](https://wiki.ootrandomizer.com/index.php?title=Setup) page on the OoTR Wiki.

The rest of this article is primarily about the settings that I recommend for your first seed. There are so many things you can randomize in OoTR, and a lot of these can be overwhelming.

> **Note:** The following instructions are for the v9.1 generator, but should be general enough to work for any version. You can find the current version in the dropdown box just above the generator.

I recommend starting with a variation of the Easy Mode preset. On the ROM options tab, under Settings Preset, select Easy Mode and click Load. Also make sure at the top that "Create Spoiler Log" is checked on. This generates a file that you can use to look up where all the items are, in case you get stuck and need to look up where certain items are.

> If you're using v9.1, the settings string for the following settings is `BSAWDNCAX2TB2XCHGABSL62ANAEAAAAAJAAAASAA8AAYAAABAKCBBALAAYLAHCWWSVCRLAYU2LAASAAAASWAAUMAAANS8WBBEA9DACGJQSUA67WDJAJSA3JGE`
>
>You can copy this into the Settings String box at the bottom and hit Import to import all the settings in automatically instead of manually changing every setting yourself. If you do, you can skip to [Generate the Seed](#generate-the-seed).

## Main Rules Tab
- In the Open column, select Closed Deku
- In the Shuffle column, under "Shuffle Adult Trade Sequence Items", uncheck everything except Claim Check.
- In the Shuffle column, enable the Shuffle Kokiri Sword option.

## Detailed Logic Tab
- (optional) Aiming in first person can feel awkward at first, so if you don't want to get caught up on minigames that require aiming, you can disable these.
    - In Exclude Location, look for GF HBA 1000 Points, Market Shooting Gallery Reward, and/or Kak Shooting Gallery Reward.
    - Click on these options and then click Add to move them into the right column. These are checks that will be disabled. You can still do them if you want, but they will be guaranteed to not contain anything useful.
- In Enable Tricks, click on Hidden Grottos without Stone of Agony and click Add to move it into the right column. In practice this won't affect how you play since if you need to find grottos you can reference [Grotto Locations](https://wiki.ootrandomizer.com/index.php?title=Grottos) in the Wiki, but if you are using a check tracker, it can tell you when grottos are available without having Stone of Agony.

## Starting Inventory Tab
- Under Starting Equipment, click Deku Shield and Hylian Shield and click Add to move them into the right column.
- Under Starting Items, click and add Ocarina and Zelda's Letter. You'll notice there are two ocarinas, but only one needs to be added.

Note in the bottom right under Other that you will also start with consumables, i.e. sticks and nuts, as well as a full wallet.

## Other Tab
- (optional) In Misc Hints, uncheck Dampe’s Diary, House of Skulltula 10 and 20, and Frogs Ocarina Game.
- Change Chest Appearance Matches Contents to Both Size And Texture
- (optional) In Minor items in Big/Gold chests, check all the options. This makes it so that you can find bombchus, shields, and capacity upgrades in big chests, and makes it so that small brown chests will never have anything particularly useful
- In Gameplay Changes, check Blue Fire Arrows. This replaces Ice Arrows, a generally useless item, with Blue Fire Arrows, which is an alternative way to melt red ice. This has recently been a popular option to turn on for both casual play and high level play.

## Cosmetics
- Pick your preferred Default Targeting Option. If you're unsure, stick with Hold.
- I like to uncheck Item Model Colors Match Cosmetics so that it’s easier to identify items that I spot in the overworld, but this is up to you.

Feel free to modify the remaining cosmetics how you wish.

## Generate the Seed
Clicking `Generate Seed` at the bottom will bring you to a new page where you can patch the seed. You can also share this link so that others can view or play the same seed.

On this page, you can still make final tweaks to cosmetics or SFX if you'd like.

In `ROM Generation`, make sure you select the correct output type based on your platform, and then supply the necessary base ROM and/or WAD file.

## Settings Overview
I've listed below the highlights of these settings, as well as point out things that are true in the randomizer that you might not expect if you're only familiar with the vanilla game.

- Collecting 6 medallions will open the rainbow bridge to Ganon's castle. **This is your win condition.**

- Reading the pedastal at the Temple of Time will tell you which dungeons have those medallions. You will be awarded the medallion when you complete the dungeon and step through the blue warp.

- Chests are textured to indicate their contents. Only big gilded chests will contain major items that can affect the progression of the game. You can get away with never opening any other kind of chest, but you can still do so when learning the game; they might still contain things that are handy.

- Closed Deku - Getting into Deku requires talking to Mido at the entrance while you have a Kokiri Sword and Deku shield equipped, just like in the vanilla game. The rest of Kokiri Forest is open though, so you can leave without having completed the Deku Tree.

- The Door of Time is open, you can freely change age at the Temple of Time.

- In Gerudo's Fortress, you only need to save one carpenter instead of all four. You will get the Gerudo Card after that.

- Songs are shuffled, but only amongst themselves. For example, speaking to Malon in Lon Lon Ranch will normally get you Epona's Song, but in the randomizer, you will learn a random song. This also means if you're looking for a particular song, it can only be in so many locations.

- You will start with a free song. This is because you don't need to do the check where you go to Zelda and then learn Zelda's Lullaby from Impa; this song is given to you at the start.

- You start with a free scarecrow song. Normally this requires talking to Bonooru twice, once as child and again as adult, and setting up a song. With Free Scarecrow, pulling out your ocarina in any spot where you can summon Pierre will automatically summon him without playing a song.

- When collecting Anju's cuccos, you only need to put one cucco in the pen instead of all seven.

- When collecting big poes, you only need to show one to the poe buyer instead of all 10.

- To be more beginner friendly, the following checks are junked, meaning that rewards for doing these will not get you anything that you need to complete the seed.
    - Collecting 40 and 50 gold skulltula tokens
    - Getting 1500 points in horseback archery in Gerudo Fortress. Note that getting 1000 points is still enabled and may have something.
    - Wearing the Mask of Truth in the Deku Theater. Note that wearing the Skull Mask is still enabled and may have something.

- Talking to the skulltulas in the skulltula house in Kakariko will tell you what the rewards are for collecting certain number of skulltulas. There are no hints for the reward for collecting 10 and 20 skulls, but there is a hint for collecting 30 skulls.

- Ice arrows are not in the game, and are instead replaced by Blue Fire Arrows. This has the same properties as the blue fire you store in bottles and can be used to melt red ice.

- If you reach the end of the game without light arrows, you can enter the Ganondorf boss room and he will tell you where you can find them. You can save and reset the game afterwards so that you can continue playing and find the light arrows.