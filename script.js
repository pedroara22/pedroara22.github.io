var projects = [
  {
    nomeDoProjeto: "Aplicativo de Tarefas",
    tecnologias: ["react-Btn", "node-Btn", "javascript-Btn"],
    descricao:
      "Um aplicativo simples onde os usuários podem criar, ler, atualizar e deletar tarefas. O frontend em React se comunicaria com uma API RESTful em Node.js para manipular os dados armazenados no MongoDB.",
    coverImage: "./public/images/projects/task_manager.png",
    github: "https://github.com/pedroara22/task-manager",
    link: "https://github.com/pedroara22/task-manager"
  },
  {
    nomeDoProjeto: "E-commerce",
    tecnologias: ["Next-Btn", "node-Btn", "javascript-Btn", "mongodb-Btn"],
    descricao:
      "Um site de comércio eletrônico feito com Next.js completo com páginas de produtos, carrinho de compras, checkout, gerenciamento de inventário e autenticação de usuário. Pode incluir um painel administrativo para gerenciar produtos e pedidos.",
    coverImage: "./public/images/projects/ecommerce.png",
    github: "https://github.com/pedroara22/next-ecommerce",
    link: "https://github.com/pedroara22/next-ecommerce"
  },
  {
    nomeDoProjeto: "Chat em Tempo Real",
    tecnologias: [
      "react-Btn",
      "node-Btn",
      "javascript-Btn",
      "Socket.io",
      "mongodb-Btn",
      "Postgresql"
    ],
    descricao:
      "Um aplicativo de chat em tempo real onde os usuários podem criar contas, adicionar amigos e conversar em tempo real. Utilizar WebSockets (Socket.io) para comunicação em tempo real e MongoDB para armazenar mensagens e informações de usuários.",
    coverImage: "./public/images/projects/chat_app.png",
    github: "https://github.com/pedroara22/realtime-chat",
    link: "https://github.com/pedroara22/realtime-chat"
  },
  {
    nomeDoProjeto: "Aplicativo de Receitas",
    tecnologias: ["react-Btn", "node-Btn", "javascript-Btn", "mongodb-Btn"],
    descricao:
      "Um aplicativo onde os usuários podem compartilhar receitas, pesquisar por ingredientes, salvar receitas favoritas e deixar avaliações. Pode incluir categorias e filtros para facilitar a navegação.",
    coverImage: "./public/images/projects/recipe_app.png",
    github: "https://github.com/pedroara22/recipe-app",
    link: "https://github.com/pedroara22/recipe-app"
  },
];

const tagLabels = {
  "react-Btn": "React",
  "node-Btn": "Node.js",
  "javascript-Btn": "JavaScript",
  "mongodb-Btn": "MongoDB",
  "Next-Btn": "Next.js",
  "Socket.io": "Socket.io"
};

var selected = "";

function renderProjects(projectsList) {
  const area = document.getElementById("projectsArea");
  if (!area) return;
  area.innerHTML = "";
  
  projectsList.forEach((project, index) => {
    // Generate styled badges
    const tagsHTML = project.tecnologias.map(t => {
      const label = tagLabels[t] || t.replace('-Btn', '');
      const cleanTag = t.replace('-Btn', '').toLowerCase();
      return `<span class="project-tag tag-${cleanTag}">${label}</span>`;
    }).join('');

    area.innerHTML += `
      <div class="project-card" style="animation-delay: ${index * 80}ms">
        <div class="project-cover-container">
          <img class="project-cover" src="${project.coverImage}" alt="${project.nomeDoProjeto}" loading="lazy">
        </div>
        <div class="project-body">
          <h3 class="project-title">${project.nomeDoProjeto}</h3>
          <p class="project-desc">${project.descricao}</p>
          <div class="project-tags">
            ${tagsHTML}
          </div>
        </div>
        <div class="project-footer">
          <a class="project-link github-link" href="${project.github}" target="_blank">
            <svg class="icon-svg" viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
            GitHub
          </a>
          <a class="project-link demo-link" href="${project.link}" target="_blank">
            <svg class="icon-svg" viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
            Demo
          </a>
        </div>
      </div>
    `;
  });
}

function selectProjects(filter) {
  var proy = document.getElementById("projectsDiv").offsetTop - 80;
  window.scrollTo(0, proy);
  if (selected == "") selected = "all-Btn";
  if (selected == filter) return;

  if (filter != "all-Btn") {
    if (filter == "javascript-Btn") {
      document.getElementById("javascript-Btn").className = "js";
    } else if (filter == "react-Btn") {
      document.getElementById("react-Btn").className = "react";
    } else if (filter == "node-Btn") {
      document.getElementById("node-Btn").className = "node";
    } else if (filter == "mongodb-Btn") {
      document.getElementById("mongodb-Btn").className = "mongo";
    }
    document.getElementById(selected).className = "";
    selected = filter;
    projectsByFilter = projects.filter((project) =>
      project.tecnologias.includes(filter)
    );
  } else {
    projectsByFilter = projects;
    document.getElementById("all-Btn").className = "all-Btn";
    document.getElementById(selected).className = "";
    selected = filter;
  }
  
  renderProjects(projectsByFilter);
}

setTimeout(() => {
  projectsByFilter = projects;
  renderProjects(projectsByFilter);
}, 1);

const canvas = document.getElementById("animation-canvas");
const ctx = canvas.getContext('2d');

let mouse = {
  x: null,
  y: null,
  radius: 220,
  currentRadius: 0
};

let nodes = [];
let grid = [];
let time = 0;

const spacing = 55; // Distance between grid lines
const springK = 0.035;
const damping = 0.85;

class Node {
  constructor(c, r, homeX, homeY) {
    this.c = c;
    this.r = r;
    this.homeX = homeX;
    this.homeY = homeY;
    this.x = homeX;
    this.y = homeY;
    this.vx = 0;
    this.vy = 0;
    this.activeRatio = 0;
  }

  update() {
    const waveSpeed = 0.018;
    const waveX = Math.sin(time * waveSpeed + this.homeY * 0.007) * 9;
    const waveY = Math.cos(time * waveSpeed + this.homeX * 0.007) * 9;
    
    let targetX = this.homeX + waveX;
    let targetY = this.homeY + waveY;

    if (mouse.x !== null && mouse.y !== null) {
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < mouse.currentRadius) {
        const force = (mouse.currentRadius - dist) / mouse.currentRadius;
        const angle = Math.atan2(dy, dx);
        
        const push = force * 60;
        targetX += Math.cos(angle) * push;
        targetY += Math.sin(angle) * push;
        
        this.activeRatio = Math.max(this.activeRatio, force);
      }
    }
    this.activeRatio *= 0.94;
    if (this.activeRatio < 0.001) this.activeRatio = 0;

    const ax = (targetX - this.x) * springK;
    const ay = (targetY - this.y) * springK;

    this.vx = (this.vx + ax) * damping;
    this.vy = (this.vy + ay) * damping;

    this.x += this.vx;
    this.y += this.vy;
  }
}

function init() {
  nodes = [];
  grid = [];

  const container = document.getElementById("bottom-animation");
  const displayWidth = container ? container.clientWidth : window.innerWidth;
  const displayHeight = container ? container.clientHeight : window.innerHeight;

  canvas.width = displayWidth || window.innerWidth;
  canvas.height = displayHeight || 1000;

  const cols = Math.ceil(canvas.width / spacing) + 2;
  const rows = Math.ceil(canvas.height / spacing) + 2;

  const offsetX = -spacing / 2;
  const offsetY = -spacing / 2;

  for (let r = 0; r < rows; r++) {
    grid[r] = [];
    for (let c = 0; c < cols; c++) {
      const homeX = offsetX + c * spacing;
      const homeY = offsetY + r * spacing;
      const node = new Node(c, r, homeX, homeY);
      grid[r][c] = node;
      nodes.push(node);
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 1. Draw connecting mesh lines (highly optimized O(N) neighbor draw)
  ctx.shadowBlur = 0;
  const rows = grid.length;
  
  for (let r = 0; r < rows; r++) {
    const cols = grid[r].length;
    for (let c = 0; c < cols; c++) {
      const node = grid[r][c];
      if (c < cols - 1) {
        drawMeshLine(node, grid[r][c + 1]);
      }
      if (r < rows - 1) {
        drawMeshLine(node, grid[r + 1][c]);
      }
    }
  }

  nodes.forEach(node => {
    const hue = (245 + node.activeRatio * 65) % 360;
    const saturation = 40 + node.activeRatio * 40;
    const lightness = 56 - node.activeRatio * 13;  
    const alpha = 0.28 + node.activeRatio * 0.62; 
    
    ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
    
    const size = 2.0 + node.activeRatio * 3.5;

    if (node.activeRatio > 0.15) {
      ctx.shadowBlur = node.activeRatio * 14;
      ctx.shadowColor = `hsla(${hue}, ${saturation}%, 65%, 0.55)`;
    } else {
      ctx.shadowBlur = 0;
    }

    ctx.beginPath();
    ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawMeshLine(node1, node2) {
  const dx = node1.x - node2.x;
  const dy = node1.y - node2.y;
  const dist = Math.sqrt(dx * dx + dy * dy);

  const maxStretch = spacing * 2.1;
  if (dist > maxStretch) return;

  const stretchRatio = 1 - dist / maxStretch;

  const maxActive = Math.max(node1.activeRatio, node2.activeRatio);
  const opacity = (0.11 + maxActive * 0.34) * stretchRatio;

  if (opacity <= 0.005) return;

  const hue = (245 + maxActive * 50) % 360;
  const saturation = 28 + maxActive * 47;
  const lightness = 62 - maxActive * 16;

  ctx.strokeStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`;
  ctx.lineWidth = (0.7 + maxActive * 1.3) * stretchRatio;
  
  ctx.beginPath();
  ctx.moveTo(node1.x, node1.y);
  ctx.lineTo(node2.x, node2.y);
  ctx.stroke();
}

function animate() {
  time += 1;

  // Eased expansion and retraction of mouse radius
  if (mouse.x !== null && mouse.y !== null) {
    mouse.currentRadius += (mouse.radius - mouse.currentRadius) * 0.1;
  } else {
    mouse.currentRadius += (0 - mouse.currentRadius) * 0.08;
  }

  // Update position physics
  nodes.forEach(node => node.update());

  // Redraw
  draw();

  requestAnimationFrame(animate);
}

// Window event handlers
window.addEventListener("mousemove", (event) => {
  const rect = canvas.getBoundingClientRect();
  mouse.x = event.clientX - rect.left;
  mouse.y = event.clientY - rect.top;
});

window.addEventListener("mouseleave", () => {
  mouse.x = null;
  mouse.y = null;
});

// Mobile/Touch compatibility
window.addEventListener("touchmove", (event) => {
  if (event.touches.length > 0) {
    const rect = canvas.getBoundingClientRect();
    mouse.x = event.touches[0].clientX - rect.left;
    mouse.y = event.touches[0].clientY - rect.top;
  }
}, { passive: true });

window.addEventListener("touchend", () => {
  mouse.x = null;
  mouse.y = null;
});

// Handle resize events smoothly
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    init();
  }, 100);
});

// Start the animation
init();
animate();

// Ensure initialization is run once DOM is loaded and stylesheets are applied
window.addEventListener("DOMContentLoaded", init);
window.addEventListener("load", init);