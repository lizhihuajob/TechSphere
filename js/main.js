// 演讲者数据
const speakersData = [
    {
        id: 1,
        name: "张明远",
        title: "AI 研究总监",
        company: "未来科技集团",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        bio: "张明远博士拥有20年人工智能研究经验，曾在多家顶级科技公司担任要职。他的研究领域涵盖深度学习、自然语言处理和计算机视觉。在加入未来科技集团之前，他曾在Google Brain担任高级研究员，主导了多个重要的AI项目。",
        topics: ["人工智能", "深度学习", "NLP", "计算机视觉"],
        social: {
            linkedin: "#",
            twitter: "#"
        }
    },
    {
        id: 2,
        name: "李晓华",
        title: "云计算架构师",
        company: "云端科技有限公司",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        bio: "李晓华是云计算领域的资深专家，专注于大规模分布式系统设计和微服务架构。她曾主导多个超大型云平台的架构设计，帮助企业实现数字化转型。她是Kubernetes和Docker的早期贡献者之一。",
        topics: ["云计算", "微服务", "Kubernetes", "容器化"],
        social: {
            linkedin: "#",
            twitter: "#"
        }
    },
    {
        id: 3,
        name: "王建国",
        title: "区块链技术专家",
        company: "链信科技",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        bio: "王建国是区块链和分布式账本技术的先驱者，拥有超过10年的相关经验。他参与了多个国家级区块链项目的设计和实施，同时也是多个开源区块链项目的核心贡献者。他的研究兴趣包括共识机制、智能合约安全和DeFi应用。",
        topics: ["区块链", "智能合约", "DeFi", "Web3.0"],
        social: {
            linkedin: "#",
            twitter: "#"
        }
    },
    {
        id: 4,
        name: "陈雨萱",
        title: "量子计算研究员",
        company: "量子科技研究院",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        bio: "陈雨萱博士是量子计算领域的青年科学家，专注于量子算法和量子机器学习的研究。她曾在MIT和IBM量子计算中心从事研究工作，发表了多篇高质量学术论文。她目前致力于探索量子计算在实际问题中的应用。",
        topics: ["量子计算", "量子算法", "量子机器学习", "QML"],
        social: {
            linkedin: "#",
            twitter: "#"
        }
    },
    {
        id: 5,
        name: "刘志强",
        title: "边缘计算专家",
        company: "智联科技",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        bio: "刘志强在物联网和边缘计算领域拥有15年以上的经验。他专注于低功耗设备和实时数据处理系统的设计，曾主导多个大型物联网项目的实施。他是边缘计算标准制定的积极参与者。",
        topics: ["边缘计算", "物联网", "实时处理", "5G应用"],
        social: {
            linkedin: "#",
            twitter: "#"
        }
    },
    {
        id: 6,
        name: "赵雅琳",
        title: "数据科学家",
        company: "数据洞察科技",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        bio: "赵雅琳是一位经验丰富的数据科学家，擅长将复杂的数据转化为有价值的商业洞察。她曾为多家财富500强企业提供数据分析咨询服务，帮助他们建立数据驱动的决策机制。她的专长包括预测分析、用户行为分析和数据可视化。",
        topics: ["数据科学", "机器学习", "数据可视化", "预测分析"],
        social: {
            linkedin: "#",
            twitter: "#"
        }
    },
    {
        id: 7,
        name: "孙浩然",
        title: "安全技术总监",
        company: "安全卫士科技",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        bio: "孙浩然是网络安全领域的资深专家，拥有超过20年的从业经验。他曾在政府和企业担任安全顾问，专注于威胁检测、渗透测试和安全架构设计。他是多个国际安全会议的常客，分享前沿的安全研究成果。",
        topics: ["网络安全", "威胁检测", "渗透测试", "零信任"],
        social: {
            linkedin: "#",
            twitter: "#"
        }
    },
    {
        id: 8,
        name: "周美玲",
        title: "产品创新总监",
        company: "创新工场",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        bio: "周美玲是一位成功的产品经理和创新领导者，曾主导多个从0到1的产品创新项目。她擅长将技术趋势转化为用户价值，拥有敏锐的市场洞察力。她经常在各大产品和创业活动中分享产品思维和创新方法论。",
        topics: ["产品创新", "用户体验", "设计思维", "创业"],
        social: {
            linkedin: "#",
            twitter: "#"
        }
    }
];

// 议程数据
const agendaData = {
    day1: {
        date: "9月15日",
        theme: "AI 与机器学习",
        items: [
            {
                time: "08:30 - 09:00",
                title: "签到与交流",
                type: "general",
                description: "领取会议资料，与参会者自由交流"
            },
            {
                time: "09:00 - 10:00",
                title: "开幕致辞与大会主题分享",
                type: "keynote",
                speaker: {
                    name: "张明远",
                    title: "AI 研究总监",
                    company: "未来科技集团"
                },
                description: "探讨人工智能的未来发展趋势和行业应用前景"
            },
            {
                time: "10:15 - 11:15",
                title: "大语言模型的实践与挑战",
                type: "keynote",
                speaker: {
                    name: "赵雅琳",
                    title: "数据科学家",
                    company: "数据洞察科技"
                },
                description: "深入解析大语言模型的技术原理、训练方法和实际应用中的挑战"
            },
            {
                time: "11:30 - 12:30",
                title: "工作坊：从零开始构建机器学习模型",
                type: "workshop",
                speaker: {
                    name: "赵雅琳",
                    title: "数据科学家",
                    company: "数据洞察科技"
                },
                description: "实操工作坊，带领参与者从数据准备到模型部署完整体验机器学习流程"
            },
            {
                time: "12:30 - 14:00",
                title: "午餐与社交",
                type: "general",
                description: "享用午餐，与演讲者和参会者深入交流"
            },
            {
                time: "14:00 - 15:00",
                title: "计算机视觉的最新进展",
                type: "keynote",
                speaker: {
                    name: "张明远",
                    title: "AI 研究总监",
                    company: "未来科技集团"
                },
                description: "介绍计算机视觉领域的最新研究成果，包括图像生成、目标检测等方向"
            },
            {
                time: "15:15 - 16:15",
                title: "圆桌讨论：AI 伦理与社会影响",
                type: "general",
                speakers: [
                    { name: "张明远", company: "未来科技集团" },
                    { name: "赵雅琳", company: "数据洞察科技" },
                    { name: "周美玲", company: "创新工场" }
                ],
                description: "探讨人工智能发展中的伦理问题和社会影响"
            },
            {
                time: "16:30 - 17:30",
                title: "工作坊：NLP 应用实战",
                type: "workshop",
                speaker: {
                    name: "张明远",
                    title: "AI 研究总监",
                    company: "未来科技集团"
                },
                description: "动手实践自然语言处理的经典任务和最新技术"
            }
        ]
    },
    day2: {
        date: "9月16日",
        theme: "云计算与边缘计算",
        items: [
            {
                time: "09:00 - 10:00",
                title: "云原生架构最佳实践",
                type: "keynote",
                speaker: {
                    name: "李晓华",
                    title: "云计算架构师",
                    company: "云端科技有限公司"
                },
                description: "分享大规模云原生应用的架构设计和运维经验"
            },
            {
                time: "10:15 - 11:15",
                title: "Kubernetes 深度解析",
                type: "keynote",
                speaker: {
                    name: "李晓华",
                    title: "云计算架构师",
                    company: "云端科技有限公司"
                },
                description: "深入理解 Kubernetes 的核心概念、设计原理和高级特性"
            },
            {
                time: "11:30 - 12:30",
                title: "工作坊：Kubernetes 集群部署与管理",
                type: "workshop",
                speaker: {
                    name: "李晓华",
                    title: "云计算架构师",
                    company: "云端科技有限公司"
                },
                description: "实操工作坊，学习如何部署、配置和管理 Kubernetes 集群"
            },
            {
                time: "12:30 - 14:00",
                title: "午餐与社交",
                type: "general",
                description: "享用午餐，与演讲者和参会者深入交流"
            },
            {
                time: "14:00 - 15:00",
                title: "边缘计算架构设计",
                type: "keynote",
                speaker: {
                    name: "刘志强",
                    title: "边缘计算专家",
                    company: "智联科技"
                },
                description: "探讨边缘计算的架构模式、技术选型和实际案例"
            },
            {
                time: "15:15 - 16:15",
                title: "5G 与边缘计算的融合应用",
                type: "keynote",
                speaker: {
                    name: "刘志强",
                    title: "边缘计算专家",
                    company: "智联科技"
                },
                description: "分享 5G 技术与边缘计算结合的创新应用场景"
            },
            {
                time: "16:30 - 17:30",
                title: "圆桌讨论：云边协同的未来",
                type: "general",
                speakers: [
                    { name: "李晓华", company: "云端科技有限公司" },
                    { name: "刘志强", company: "智联科技" },
                    { name: "孙浩然", company: "安全卫士科技" }
                ],
                description: "探讨云计算与边缘计算如何协同工作，构建更高效的分布式系统"
            }
        ]
    },
    day3: {
        date: "9月17日",
        theme: "区块链与量子计算",
        items: [
            {
                time: "09:00 - 10:00",
                title: "Web3.0 与去中心化应用",
                type: "keynote",
                speaker: {
                    name: "王建国",
                    title: "区块链技术专家",
                    company: "链信科技"
                },
                description: "深入理解 Web3.0 的核心理念、技术栈和应用前景"
            },
            {
                time: "10:15 - 11:15",
                title: "智能合约安全与最佳实践",
                type: "keynote",
                speaker: {
                    name: "王建国",
                    title: "区块链技术专家",
                    company: "链信科技"
                },
                description: "分享智能合约开发中的安全漏洞和防护策略"
            },
            {
                time: "11:30 - 12:30",
                title: "工作坊：智能合约开发入门",
                type: "workshop",
                speaker: {
                    name: "王建国",
                    title: "区块链技术专家",
                    company: "链信科技"
                },
                description: "从零开始学习 Solidity 编程，开发第一个智能合约"
            },
            {
                time: "12:30 - 14:00",
                title: "午餐与社交",
                type: "general",
                description: "享用午餐，与演讲者和参会者深入交流"
            },
            {
                time: "14:00 - 15:00",
                title: "量子计算入门与应用前景",
                type: "keynote",
                speaker: {
                    name: "陈雨萱",
                    title: "量子计算研究员",
                    company: "量子科技研究院"
                },
                description: "用通俗易懂的方式介绍量子计算的基本概念和潜在应用"
            },
            {
                time: "15:15 - 16:15",
                title: "量子算法与密码学",
                type: "keynote",
                speaker: {
                    name: "陈雨萱",
                    title: "量子计算研究员",
                    company: "量子科技研究院"
                },
                description: "探讨量子计算对传统密码学的挑战和后量子密码学的发展"
            },
            {
                time: "16:30 - 17:30",
                title: "闭幕演讲与未来展望",
                type: "keynote",
                speaker: {
                    name: "周美玲",
                    title: "产品创新总监",
                    company: "创新工场"
                },
                description: "总结三天的精彩内容，展望科技发展的未来方向"
            },
            {
                time: "17:30 - 18:00",
                title: "闭幕仪式",
                type: "general",
                description: "抽奖环节、感谢致辞、闭幕"
            }
        ]
    }
};

// DOM 元素
const navbar = document.getElementById('navbar');
const navbarToggle = document.getElementById('navbarToggle');
const navbarMenu = document.getElementById('navbarMenu');
const navLinks = document.querySelectorAll('.nav-link');
const backToTop = document.getElementById('backToTop');
const speakersGrid = document.getElementById('speakersGrid');
const speakerModal = document.getElementById('speakerModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const agendaTabs = document.getElementById('agendaTabs');
const agendaContent = document.getElementById('agendaContent');
const registerForm = document.getElementById('registerForm');
const ticketCards = document.querySelectorAll('.ticket-card');
const ticketTypeSelect = document.getElementById('ticketType');
const particlesContainer = document.getElementById('particles');

// 全局变量
let currentDay = 'day1';

// 初始化函数
function init() {
    createParticles();
    renderSpeakers();
    renderAgenda(currentDay);
    setupEventListeners();
    setupScrollAnimations();
    animateStats();
}

// 创建粒子效果
function createParticles() {
    if (!particlesContainer) return;
    
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // 随机位置
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // 随机动画延迟和持续时间
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (10 + Math.random() * 10) + 's';
        
        // 随机大小
        const size = 2 + Math.random() * 4;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        particlesContainer.appendChild(particle);
    }
}

// 渲染演讲者卡片
function renderSpeakers() {
    if (!speakersGrid) return;
    
    speakersGrid.innerHTML = speakersData.map(speaker => `
        <div class="speaker-card fade-in" data-speaker-id="${speaker.id}">
            <div class="speaker-image">
                <img src="${speaker.image}" alt="${speaker.name}">
                <div class="speaker-overlay">
                    <div class="speaker-social">
                        <a href="${speaker.social.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
                        <a href="${speaker.social.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            <div class="speaker-info">
                <h3 class="speaker-name">${speaker.name}</h3>
                <p class="speaker-title">${speaker.title}</p>
                <p class="speaker-company">${speaker.company}</p>
            </div>
        </div>
    `).join('');
    
    // 为演讲者卡片添加点击事件
    const speakerCards = speakersGrid.querySelectorAll('.speaker-card');
    speakerCards.forEach(card => {
        card.addEventListener('click', () => {
            const speakerId = parseInt(card.dataset.speakerId);
            openSpeakerModal(speakerId);
        });
    });
}

// 打开演讲者详情模态框
function openSpeakerModal(speakerId) {
    const speaker = speakersData.find(s => s.id === speakerId);
    if (!speaker || !speakerModal || !modalBody) return;
    
    modalBody.innerHTML = `
        <div class="modal-image">
            <img src="${speaker.image}" alt="${speaker.name}">
        </div>
        <div class="modal-details">
            <h2 class="modal-name">${speaker.name}</h2>
            <p class="modal-title">${speaker.title}</p>
            <p class="modal-company">${speaker.company}</p>
            <p class="modal-bio">${speaker.bio}</p>
            <div class="modal-topics">
                <h4>演讲主题</h4>
                <div class="topic-tags">
                    ${speaker.topics.map(topic => `<span class="topic-tag">${topic}</span>`).join('')}
                </div>
            </div>
            <div class="speaker-social">
                <a href="${speaker.social.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="${speaker.social.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>
            </div>
        </div>
    `;
    
    speakerModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 关闭模态框
function closeModal() {
    if (!speakerModal) return;
    speakerModal.classList.remove('active');
    document.body.style.overflow = '';
}

// 渲染议程
function renderAgenda(day) {
    if (!agendaContent) return;
    
    const agenda = agendaData[day];
    if (!agenda) return;
    
    agendaContent.innerHTML = `
        <div class="agenda-timeline">
            ${agenda.items.map(item => `
                <div class="agenda-item ${item.type} fade-in">
                    <div class="agenda-time">${item.time}</div>
                    <h3 class="agenda-title">${item.title}</h3>
                    ${item.speaker ? `
                        <div class="agenda-speaker">
                            <div class="agenda-speaker-avatar">
                                ${item.speaker.name.charAt(0)}
                            </div>
                            <div class="agenda-speaker-info">
                                <span class="agenda-speaker-name">${item.speaker.name}</span>
                                <span class="agenda-speaker-title">${item.speaker.title} · ${item.speaker.company}</span>
                            </div>
                        </div>
                    ` : ''}
                    ${item.speakers ? `
                        <div class="agenda-speaker">
                            <div class="agenda-speaker-avatar">
                                ${item.speakers.length}
                            </div>
                            <div class="agenda-speaker-info">
                                <span class="agenda-speaker-name">
                                    ${item.speakers.map(s => s.name).join('、')}
                                </span>
                            </div>
                        </div>
                    ` : ''}
                    <p class="agenda-description">${item.description}</p>
                    <div class="agenda-tags">
                        <span class="agenda-tag ${item.type}">${getTypeLabel(item.type)}</span>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// 获取议程类型标签
function getTypeLabel(type) {
    const labels = {
        'keynote': '主题演讲',
        'workshop': '工作坊',
        'general': '活动'
    };
    return labels[type] || '活动';
}

// 设置事件监听器
function setupEventListeners() {
    // 导航栏切换
    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', () => {
            navbarMenu.classList.toggle('active');
        });
    }
    
    // 导航链接点击
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            
            // 关闭移动菜单
            if (navbarMenu) {
                navbarMenu.classList.remove('active');
            }
            
            // 更新活动状态
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // 滚动事件
    window.addEventListener('scroll', handleScroll);
    
    // 返回顶部按钮
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // 模态框关闭
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    // 点击模态框外部关闭
    if (speakerModal) {
        speakerModal.addEventListener('click', (e) => {
            if (e.target === speakerModal) {
                closeModal();
            }
        });
    }
    
    // ESC 键关闭模态框
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // 议程标签切换
    if (agendaTabs) {
        const tabs = agendaTabs.querySelectorAll('.agenda-tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                const day = tab.dataset.day;
                currentDay = day;
                renderAgenda(day);
                
                // 触发淡入动画
                setTimeout(() => {
                    const items = agendaContent.querySelectorAll('.agenda-item');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, index * 100);
                    });
                }, 50);
            });
        });
    }
    
    // 票种卡片点击选中
    ticketCards.forEach(card => {
        card.addEventListener('click', () => {
            const ticketType = card.dataset.ticket;
            
            // 移除所有卡片的active类
            ticketCards.forEach(c => c.classList.remove('active'));
            
            // 为当前点击的卡片添加active类
            card.classList.add('active');
            
            // 更新表单中的票种选择
            if (ticketTypeSelect) {
                ticketTypeSelect.value = ticketType;
            }
        });
    });
    
    // 表单提交
    if (registerForm) {
        registerForm.addEventListener('submit', handleFormSubmit);
    }
}

// 处理滚动事件
function handleScroll() {
    const scrollY = window.scrollY;
    
    // 导航栏效果
    if (navbar) {
        if (scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // 返回顶部按钮显示
    if (backToTop) {
        if (scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
    
    // 更新导航链接活动状态
    updateActiveNavLink();
}

// 更新活动导航链接
function updateActiveNavLink() {
    const sections = ['home', 'about', 'speakers', 'agenda', 'venue', 'register'];
    
    for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sections[i]}`) {
                        link.classList.add('active');
                    }
                });
                break;
            }
        }
    }
}

// 设置滚动动画
function setupScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1
    });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
    
    // 初始触发
    setTimeout(() => {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                element.classList.add('visible');
            }
        });
    }, 100);
}

// 数字动画
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateNumber(entry.target, 0, target, 2000);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

// 数字动画函数
function animateNumber(element, start, end, duration) {
    const range = end - start;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // 缓动函数
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + range * easeOutQuart);
        
        element.textContent = current.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = end.toLocaleString();
        }
    }
    
    requestAnimationFrame(update);
}

// 处理表单提交
function handleFormSubmit(e) {
    e.preventDefault();
    
    // 简单的表单验证
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const ticketType = document.getElementById('ticketType');
    const agreement = document.getElementById('agreement');
    
    let isValid = true;
    
    // 重置错误状态
    [fullName, email, phone, ticketType].forEach(input => {
        input.classList.remove('error');
    });
    
    // 验证姓名
    if (!fullName.value.trim()) {
        fullName.classList.add('error');
        isValid = false;
    }
    
    // 验证邮箱
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        email.classList.add('error');
        isValid = false;
    }
    
    // 验证手机号
    const phoneRegex = /^1[3-9]\d{9}$/;
    if (!phoneRegex.test(phone.value.replace(/\s/g, ''))) {
        phone.classList.add('error');
        isValid = false;
    }
    
    // 验证票种
    if (!ticketType.value) {
        ticketType.classList.add('error');
        isValid = false;
    }
    
    // 验证同意条款
    if (!agreement.checked) {
        isValid = false;
        alert('请阅读并同意参会条款和隐私政策');
    }
    
    if (!isValid) {
        return;
    }
    
    // 模拟提交成功
    showSuccessToast();
    
    // 重置表单
    registerForm.reset();
}

// 显示成功提示
function showSuccessToast() {
    // 创建提示元素
    const toast = document.createElement('div');
    toast.className = 'success-toast';
    toast.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>注册成功！我们将尽快与您联系。</span>
    `;
    
    document.body.appendChild(toast);
    
    // 显示提示
    setTimeout(() => {
        toast.classList.add('visible');
    }, 10);
    
    // 3秒后隐藏
    setTimeout(() => {
        toast.classList.remove('visible');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);

// 确保所有资源加载完成后执行
window.addEventListener('load', () => {
    // 触发议程项的淡入动画
    const agendaItems = document.querySelectorAll('.agenda-item');
    agendaItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('visible');
        }, index * 100);
    });
});
