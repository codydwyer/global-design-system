import { ICommunity } from '../types';
import { ensure } from './utils';

const communities: ICommunity[] = [
  {
    id: 'highborne',
    name: 'Highborne',
    description: `Being part of a Highborne community means you were born into a life of elegance, opulence, and prestige within the upper echelons of society. Traditionally, members of a Highborne community possess incredible material wealth. While this takes a variety of forms depending on the community: gold and other minerals, land, controlling the means of production, etc. it always comes with incredible power and influence. Highborne highly value titles and possessions, and there is very little social mobility within their ranks. It’s not uncommon for members of a Highborne community to control the political and economic status of the areas in which they live based on their ability to influence the individuals and the economy with their substantial wealth. The health and safety of the less affluent people who live in these locations often hinges on the ability of this Highborne ruling class to prioritize the well-being of their subjects over profit.`,
    characteristics: `Highborne individuals are often: amiable, candid, conniving, enterprising, ostentatious, unflappable.`,
    features: [
      {
        name: 'Inheritance',
        description: `You have advantage on any rolls you make when consorting with nobles, negotiating prices, or leveraging your reputation to get what you want. Take an extra handful of gold at character creation.`,
      },
    ],
  },
  {
    id: 'loreborne',
    name: 'Loreborne',
    description: `Being part of a Loreborne community means you were brought up in a place that favored strong academic or political prowess. Loreborne communities highly value knowledge, frequently in the form of the preservation of history, advancement of politics, study of science, honing of skill, or collecting of mythology. Because of this, many Loreborne communities are not closely tied to the landscape. Very often, this collective will highly value structures designed to protect physical books and records, and they will only engage with nature and the physical world in a particularly intellectual way. While some Loreborne societies are isolationist, others use their knowledge to make deft political maneuvers in a larger governmental landscape. Some Loreborne communities, such as those surrounding a college or attached to a guild, are smaller enclaves within wider societies and they may operate with a separate and unique ethos.`,
    characteristics: `Loreborne individuals are often: direct, eloquent, inquisitive, patient, rhapsodic, witty.`,
    features: [
      {
        name: 'Well-Read',
        description: `You have advantage on any rolls you make that deal with the history, culture, or politics of a prominent person or place.`,
      },
    ],
  },
  {
    id: 'orderborne',
    name: 'Orderborne',
    description: `Being part of an Orderborne community means you were raised in a place of great discipline or faith, and uphold a set of principles that reflect your experience there. Orderborne are frequently some of the most powerful among the surrounding communities. By aligning the members of their society around a common value or goal, such as a god, doctrine, ethos, or even shared business or trade; the ruling bodies of these enclaves are able to mobilize larger populations with less effort. While Orderborne communities may take a variety of forms, some even profoundly pacifistic, perhaps the most feared are those that structure themselves around military prowess. In this case, it is not uncommon for Orderborne to provide soldiers for hire for other cities or countries.`,
    characteristics: `Orderborne individuals are often: ambitious, benevolent, pensive, prudent, sardonic, stoic.`,
    features: [
      {
        name: 'Dedicated',
        description: `Record three sayings or values your upbringing instilled in you. Once per short rest, when you describe how you’re embodying one of these principles through your current action, you may roll with a d20 as your Hope Die instead of a d12.`,
      },
    ],
  },
  {
    id: 'ridgeborne',
    name: 'Ridgeborne',
    description: `Being part of a Ridgeborne community means you call the rocky peaks and sharp cliffs of the mountainside home. Those who’ve grown up in the mountains often consider themselves hardier than most–likely because they’ve lived among the most dangerous terrain many continents have to offer. Those who are Ridgeborne grow up scrambling and climbing, making them particularly sure-footed and sure of will. Ridgeborne communities appear in a variety of forms, some cities carve out cliffs, others construct castles of stone, and still more live in small homes on wind-blown peaks.`,
    characteristics: `Ridgeborne individuals are often: bold, hardy, indomitable, loyal, reserved, stubborn.`,
    features: [
      {
        name: 'Steady',
        description: `You have advantage on traversing dangerous cliffs and ledges, navigating harsh environments, and survival knowledge. Also gain +1 to your Armor Score.`,
      },
    ],
  },
  {
    id: 'seaborne',
    name: 'Seaborne',
    description: `Being part of a Seaborne community means you grew up on or near a large body of water. Seaborne communities are built, both physically and culturally, around the specific waters they call home—some of these groups live along the shore, constructing ports for locals and travelers alike. These harbors may function as both centers of commerce, tourist attractions, or even just a safe place to lay down one’s head after weeks of travel. Other Seaborne live on the water in small boats or large ships, with the idea of “home” meaning a ship and its crew, rather than any one landmass. No matter their exact location, Seaborne communities are closely tied to the ocean tides and the creatures that inhabit them. Seaborne learn to fish at a young age, and will train from birth to be able to hold their breath and swim in even the most tumultuous waters. Individuals from these groups are highly sought after for sailing abilities, and many will become captains of vessels, either within their own community, working for another, or even at the helm of a powerful naval operation.`,
    characteristics: `Seaborne individuals are often: candid, cooperative, exuberant, fierce, resolute, weathered.`,
    features: [
      {
        name: 'Safe Harbor',
        description: `Once per session, when you take a short or long rest, you may take one additional downtime action.`,
      },
    ],
  },
  {
    id: 'slyborne',
    name: 'Slyborne',
    description: `Being part of a Slyborne community means growing up in the underbelly of society, surrounded by criminals and con artists. Members of Slyborne communities are brought together by their position in society; they operate outside the law. Commonly, these communities are comprised of those with a array of skills: forging, thievery, smuggling, and violence. Among the Slyborne there are a variety of social classes, including those who have garnered vast wealth and influence, and others without a coin to their name. To the outside eye, the Slyborne may seem like ruffians with no loyalty, but these communities possess some of the strictest codes of honor which, when broken, may result in a terrifying end for the perpetrator.`,
    characteristics: `Slyborne individuals are often: clever, formidable, menacing, unflinching, shrewd, tenacious.`,
    features: [
      {
        name: 'Scoundrel',
        description: `You have advantage on any rolls where you’re negotiating with criminals, detecting lies, or finding a safe place to hide.`,
      },
    ],
  },
  {
    id: 'underborne',
    name: 'Underborne',
    description: `Being part of an Underborne community means that you’re from a subterranean society. Many Underborne live right beneath the cities and villages of other groups, and others live much deeper; and these communities range from small family groups in burrows, to massive metropolises in caverns of stone. Among many groups, Underborne are recognized for their incredible boldness and skill, acknowledging this community as highly capable of feats of architecture and engineering. Members of this community are regularly hired for their bravery, as even the least daring Underborne citizen is likely to encounter a number of underground beasts in their daily lives, and learning to dispatch such creatures is common practice amongst these societies. Because of the danger of their environment, many Underborne communities develop non-verbal languages that may prove equally useful on the surface.`,
    characteristics: `Underborne individuals are often: composed, elusive, indomitable, innovative, unpretentious, resourceful.`,
    features: [
      {
        name: 'Low Light Living',
        description: `When you are in an area with low light or heavy shadow, you have advantage on rolls to hide, investigate, or perceive details within that area.`,
      },
    ],
  },
  {
    id: 'wanderborne',
    name: 'Wanderborne',
    description: `Being part of a Wanderborne community means that you were raised as a nomad, not having a permanent home but experiencing a wide variety of cultures. Unlike many communities that are defined by their locale, Wanderborne are defined by their peripatetic lifestyle. Because of their frequent migration, Wanderborne are likely to put less value on the accumulation of material possessions in favor of acquiring information, skills and connections. While some Wanderborne are allied by a common ethos, such as a religion or set of political or economic values, others come together after shared tragedy, such as the loss of their home or lands. No matter the reason, the dangers posed by life on the road mean that Wanderborne are known for their unwavering loyalty.`,
    characteristics: `Wanderborne individuals are often: magnanimous, mirthful, inscrutable, reliable, savvy, unorthodox.`,
    features: [
      {
        name: 'Nomadic Pack',
        description: `Add a Nomadic Pack to your inventory. Once per session, you may spend a Hope to reach into this pack and pull out a common item that is useful in this situation. Work with the GM to figure out what this item is.`,
      },
    ],
  },
  {
    id: 'wildborne',
    name: 'Wildborne',
    description: `Being part of a Wildborne community means you were raised by a clan deep within the forest. While some construct their lodging high in the branches of trees themselves, still others establish their homes on the ground beneath the canopies. Wildborne are defined by their dedication to the conservation of their homelands, and many such communities have strong religious and cultural ties to the plants that thrive among them. It is a hallmark of Wildborne groups to disturb the natural environment as little as possible when constructing their villages or cities, and it's not uncommon for them to remain fairly reclusive and hidden within their woodland homes.`,
    characteristics: `Wildborne individuals are often: hardy, loyal, nurturing, reclusive, sagacious, vibrant.`,
    features: [
      {
        name: 'Lightfoot',
        description: `Your movement is naturally silent. Take advantage on any action rolls you make to move without being heard. Spend a Hope to also grant this ability to an ally in very close range of you.`,
      },
    ],
  },
];

export const getCommunity = (communityId: string) => {
  return ensure(communities.find((community) => community.id === communityId));
};

export default communities;
