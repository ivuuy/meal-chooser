const recipes = [
  {
    name: "番茄鸡蛋盖饭",
    cost: 14,
    time: 16,
    level: "很容易",
    taste: ["light", "comfort", "any"],
    ingredients: ["番茄", "西红柿", "鸡蛋", "米饭", "葱"],
    core: ["番茄", "鸡蛋", "米饭"],
    summary: "酸甜下饭，适合预算紧和时间短的时候。",
    photo: "https://picsum.photos/seed/tomato-egg-rice-bowl/760/520",
    steps: ["番茄切块，鸡蛋打散。", "先炒鸡蛋盛出，再炒番茄出汁。", "鸡蛋回锅调味，浇在热米饭上。"]
  },
  {
    name: "青菜豆腐汤面",
    cost: 12,
    time: 14,
    level: "很容易",
    taste: ["light", "any"],
    ingredients: ["青菜", "豆腐", "面条", "鸡蛋", "葱"],
    core: ["青菜", "豆腐", "面条"],
    summary: "清爽热乎，适合不想洗太多锅的晚上。",
    photo: "https://picsum.photos/seed/greens-tofu-noodle-soup/760/520",
    steps: ["烧水下面条，青菜洗净切段。", "放入豆腐和青菜煮到断生。", "用盐、生抽和香油收尾。"]
  },
  {
    name: "鸡胸肉蔬菜碗",
    cost: 28,
    time: 24,
    level: "简单",
    taste: ["light", "comfort", "any"],
    ingredients: ["鸡胸肉", "米饭", "西兰花", "胡萝卜", "玉米"],
    core: ["鸡胸肉", "米饭", "蔬菜"],
    summary: "蛋白质够，搭配灵活，冰箱边角料也能用上。",
    photo: "https://picsum.photos/seed/chicken-vegetable-bowl/760/520",
    steps: ["鸡胸肉切片，用生抽和黑胡椒抓匀。", "蔬菜焯水或煎熟。", "鸡肉煎到两面微焦，和米饭装碗。"]
  },
  {
    name: "辣白菜豆腐锅",
    cost: 24,
    time: 22,
    level: "简单",
    taste: ["spicy", "comfort", "any"],
    ingredients: ["辣白菜", "豆腐", "鸡蛋", "午餐肉", "金针菇"],
    core: ["辣白菜", "豆腐", "鸡蛋"],
    summary: "微辣开胃，一口锅就能吃得满足。",
    photo: "https://picsum.photos/seed/kimchi-tofu-pot/760/520",
    steps: ["辣白菜下锅炒香，加水煮开。", "放豆腐和配菜，小火煮 8 分钟。", "最后打入鸡蛋，按口味加盐。"]
  },
  {
    name: "牛肉洋葱炒饭",
    cost: 36,
    time: 20,
    level: "简单",
    taste: ["comfort", "any"],
    ingredients: ["牛肉", "洋葱", "米饭", "鸡蛋", "胡萝卜"],
    core: ["牛肉", "洋葱", "米饭"],
    summary: "适合有剩饭的时候，香气足，饱腹感强。",
    photo: "https://picsum.photos/seed/beef-onion-fried-rice/760/520",
    steps: ["牛肉切薄片，洋葱切丝。", "先炒蛋和牛肉，再下洋葱。", "加入米饭炒散，用生抽调味。"]
  },
  {
    name: "虾仁芦笋意面",
    cost: 46,
    time: 28,
    level: "中等",
    taste: ["light", "any"],
    ingredients: ["虾仁", "芦笋", "意面", "蒜", "黄油"],
    core: ["虾仁", "芦笋", "意面"],
    summary: "想吃得清爽一点时很合适，口感轻但不寡淡。",
    photo: "https://picsum.photos/seed/shrimp-asparagus-pasta/760/520",
    steps: ["意面煮到八成熟，留一小碗面汤。", "蒜片煎香，放虾仁和芦笋。", "加入意面和少量面汤拌匀。"]
  },
  {
    name: "土豆胡萝卜咖喱饭",
    cost: 22,
    time: 35,
    level: "简单",
    taste: ["comfort", "any"],
    ingredients: ["土豆", "胡萝卜", "洋葱", "咖喱", "米饭"],
    core: ["土豆", "胡萝卜", "咖喱"],
    summary: "预算友好，适合一次多做一点留到明天。",
    photo: "https://picsum.photos/seed/potato-carrot-curry-rice/760/520",
    steps: ["土豆、胡萝卜和洋葱切块。", "炒香洋葱后加水炖软。", "关小火放咖喱块，煮到浓稠后配饭。"]
  },
  {
    name: "香菇青菜鸡蛋面",
    cost: 18,
    time: 18,
    level: "很容易",
    taste: ["light", "any"],
    ingredients: ["香菇", "青菜", "鸡蛋", "面条", "葱"],
    core: ["香菇", "青菜", "鸡蛋", "面条"],
    summary: "食材常见，汤底鲜，适合临时解决一餐。",
    photo: "https://picsum.photos/seed/mushroom-egg-noodles/760/520",
    steps: ["香菇切片煎香，加水煮开。", "下面条和青菜，煮到面条变软。", "卧一个鸡蛋，调入盐和生抽。"]
  },
  {
    name: "蒜香三文鱼饭",
    cost: 68,
    time: 26,
    level: "中等",
    taste: ["light", "comfort", "any"],
    ingredients: ["三文鱼", "米饭", "西兰花", "蒜", "柠檬"],
    core: ["三文鱼", "米饭", "西兰花"],
    summary: "预算高一点时选它，步骤少，吃起来很完整。",
    photo: "https://picsum.photos/seed/garlic-salmon-rice/760/520",
    steps: ["三文鱼擦干，撒盐和黑胡椒。", "小火煎到表面焦香，加入蒜片。", "搭配米饭和焯熟的西兰花。"]
  }
];

const form = document.querySelector("#meal-form");
const budgetInput = document.querySelector("#budget");
const timeInput = document.querySelector("#time");
const timeOutput = document.querySelector("#time-output");
const ingredientsInput = document.querySelector("#ingredients");
const errorMessage = document.querySelector("#form-error");
const emptyState = document.querySelector("#empty-state");
const loadingState = document.querySelector("#loading-state");
const recommendation = document.querySelector("#recommendation");
const surpriseButton = document.querySelector("#surprise-button");
const anotherButton = document.querySelector("#another-button");

let currentMatches = [];
let currentIndex = 0;

function normalizeIngredient(value) {
  return value.trim().toLowerCase();
}

function parseIngredients(value) {
  return value
    .split(/[\s,，、;；\n]+/)
    .map(normalizeIngredient)
    .filter(Boolean);
}

function getTaste() {
  return new FormData(form).get("taste") || "any";
}

function scoreRecipe(recipe, ownedIngredients, budget, minutes, taste) {
  const ownedHits = recipe.ingredients.filter((item) =>
    ownedIngredients.some((owned) => item.includes(owned) || owned.includes(item))
  );
  const coreHits = recipe.core.filter((item) =>
    ownedIngredients.some((owned) => item.includes(owned) || owned.includes(item))
  );
  const budgetPenalty = Math.max(0, recipe.cost - budget) * 1.8;
  const timePenalty = Math.max(0, recipe.time - minutes) * 2.2;
  const tasteBonus = recipe.taste.includes(taste) || taste === "any" ? 14 : -8;
  const ingredientScore = ownedHits.length * 14 + coreHits.length * 18;
  const practicalScore = Math.max(0, 35 - Math.abs(recipe.cost - budget) - Math.abs(recipe.time - minutes));

  return {
    recipe,
    score: ingredientScore + practicalScore + tasteBonus - budgetPenalty - timePenalty,
    ownedHits,
    coreHits
  };
}

function getMissingItems(recipe, ownedIngredients) {
  return recipe.core.filter(
    (item) => !ownedIngredients.some((owned) => item.includes(owned) || owned.includes(item))
  );
}

function setState(state) {
  emptyState.classList.toggle("is-hidden", state !== "empty");
  loadingState.classList.toggle("is-hidden", state !== "loading");
  loadingState.setAttribute("aria-hidden", state === "loading" ? "false" : "true");
  recommendation.classList.toggle("is-hidden", state !== "result");
}

function renderList(targetId, items, fallback) {
  const target = document.querySelector(targetId);
  target.innerHTML = "";
  const listItems = items.length ? items : [fallback];

  listItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    target.append(li);
  });
}

function renderRecipe(match, ownedIngredients, budget, minutes) {
  const { recipe, ownedHits, score } = match;
  const missingItems = getMissingItems(recipe, ownedIngredients);
  const overBudget = recipe.cost > budget;
  const overTime = recipe.time > minutes;
  const fitText = overBudget || overTime ? "接近条件" : "很适合今天";

  document.querySelector("#dish-photo").src = recipe.photo;
  document.querySelector("#dish-photo").alt = recipe.name;
  document.querySelector("#match-label").textContent = `${fitText}，匹配分 ${Math.max(0, Math.round(score))}`;
  document.querySelector("#result-title").textContent = recipe.name;
  document.querySelector("#result-summary").textContent = recipe.summary;
  document.querySelector("#result-cost").textContent = `约 ¥${recipe.cost}`;
  document.querySelector("#result-time").textContent = `${recipe.time} 分钟`;
  document.querySelector("#result-level").textContent = recipe.level;

  renderList("#owned-list", ownedHits, "没有明显命中，但这道菜补齐成本低。");
  renderList("#shopping-list", missingItems, "基本不用再买。");

  const stepsList = document.querySelector("#steps-list");
  stepsList.innerHTML = "";
  recipe.steps.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    stepsList.append(li);
  });
}

function recommend(options = {}) {
  const budget = Number(budgetInput.value);
  const minutes = Number(timeInput.value);
  const ownedIngredients = parseIngredients(ingredientsInput.value);
  const taste = getTaste();

  errorMessage.textContent = "";

  if (!Number.isFinite(budget) || budget < 8 || budget > 300) {
    errorMessage.textContent = "预算请填 8 到 300 之间的数字。";
    setState("empty");
    return;
  }

  if (!options.surprise && ownedIngredients.length === 0) {
    errorMessage.textContent = "先写一点现有食材，比如鸡蛋、米饭或青菜。";
    setState("empty");
    return;
  }

  setState("loading");

  window.setTimeout(() => {
    const scored = recipes
      .map((recipe) => scoreRecipe(recipe, ownedIngredients, budget, minutes, taste))
      .sort((a, b) => b.score - a.score);

    currentMatches = scored.slice(0, 5);
    currentIndex = options.next ? (currentIndex + 1) % currentMatches.length : 0;

    if (options.surprise) {
      currentIndex = Math.floor(Math.random() * currentMatches.length);
    }

    renderRecipe(currentMatches[currentIndex], ownedIngredients, budget, minutes);
    setState("result");
  }, 380);
}

timeInput.addEventListener("input", () => {
  timeOutput.textContent = `${timeInput.value} 分钟`;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  recommend();
});

surpriseButton.addEventListener("click", () => {
  if (!ingredientsInput.value.trim()) {
    const seeds = ["鸡蛋 米饭 青菜", "番茄 鸡蛋 面条", "豆腐 青菜 香菇"];
    ingredientsInput.value = seeds[Math.floor(Math.random() * seeds.length)];
  }

  recommend({ surprise: true });
});

anotherButton.addEventListener("click", () => {
  recommend({ next: true });
});
