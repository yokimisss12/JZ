// ============================================================
// ========== 卡片数据（在这里增删改卡片） ==========
// ============================================================
const cardData = [{
    title: '影响无意注意的因素',
    tip: '客观 + 主观',
    imgSrc: './pic/影响无意注意的因素.png'
}, {
    title: '影响有意注意的因素',
    tip: '动动拇指取接屎',
    imgSrc: './pic/影响有意注意的因素.png'
}, {
    title: '中学生的认知发展特点',
    tip: '有抽象能力',
    imgSrc: './pic/中学生的认知发展特点.png'
}, {
    title: '知觉的基本特征',
    tip: '尝姐体香',
    imgSrc: './pic/知觉的基本特征.png'
},
{
    title: '注意规律在教学中的应用',
    tip: '无意+有意+无意有意结合',
    imgSrc: './pic/注意规律在教学中的应用.png'
},
{
    title: '注意的品质',
    tip: '--',
    imgSrc: './pic/注意的品质.png'
},
{
    title: '影响遗忘的因素',
    tip: '往情人房间尿尿',
    imgSrc: './pic/影响遗忘的因素.png'
},
{
    title: '影响问题解决的主要因素',
    tip: '公鸡发情怎么解决？阉了！',
    imgSrc: './pic/影响问题解决的主要因素.png'
},
{
    title: '遗忘的原因',
    tip: '--',
    imgSrc: './pic/遗忘的原因.png'
},
{
    title: '学习的概念',
    tip: '--',
    imgSrc: './pic/学习的概念.png'
},
{
    title: '学习的分类-主体',
    tip: '--',
    imgSrc: './pic/学习的分类-主体.png'
},
{
    title: '学习的分类-性质',
    tip: '--',
    imgSrc: './pic/学习的分类-性质.png'
},
{
    title: '学习的分类-结果',
    tip: '加动态知颜值',
    imgSrc: './pic/学习的分类-结果.png'
},
{
    title: '学生注意力的培养方法',
    tip: '抬去吸点粪',
    imgSrc: './pic/学生注意力的培养方法.png'
},
{
    title: '心智技能的培养途径',
    tip: '记住别说话，不然就完犊子',
    imgSrc: './pic/心智技能的培养途径.png'
},
{
    title: '问题解决的一般过程',
    tip: '--',
    imgSrc: './pic/问题解决的一般过程.png'
},
{
    title: '思维的概念和特征',
    tip: '--',
    imgSrc: './pic/思维的概念和特征.png'
},
{
    title: '思维的分类',
    tip: '--',
    imgSrc: './pic/思维的分类.png'
},
{
    title: '培养学生想象力的方法',
    tip: '幻想斯文教官',
    imgSrc: './pic/培养学生想象力的方法.png'
},
{
    title: '培养学生问题解决能力的方法',
    tip: '背萝莉洗发',
    imgSrc: './pic/培养学生问题解决能力的方法.png'
},
{
    title: '经典条件作用的主要规律',
    tip: '--',
    imgSrc: './pic/经典条件作用的主要规律.png'
},
{
    title: '加里培林的心智技能形成阶段',
    tip: '--',
    imgSrc: './pic/加里培林的心智技能形成阶段.png'
},
{
    title: '记忆内容保持时间',
    tip: '--',
    imgSrc: './pic/记忆内容保持时间.png'
},
{
    title: '记忆规律在教学中的应用-有效组织复习防止遗忘的方法',
    tip: '遗精遗太多，过分分',
    imgSrc: './pic/记忆规律在教学中的应用-有效组织复习防止遗忘的方法.png'
},
{
    title: '记忆规律在教学中的应用-提高记忆能力的方法',
    tip: '公主驸马异地',
    imgSrc: './pic/记忆规律在教学中的应用-提高记忆能力的方法.png'
},
{
    title: '记忆的过程',
    tip: '--',
    imgSrc: './pic/记忆的过程.png'
},
{
    title: '根据记忆内容分类',
    tip: '--',
    imgSrc: './pic/根据记忆内容分类.png'
},
{
    title: '感受性与感觉阈限',
    tip: '性能，限量',
    imgSrc: './pic/感受性与感觉阈限.png'
},
{
    title: '短时记忆的特点',
    tip: '昨晚两具干尸复活',
    imgSrc: './pic/短时记忆的特点.png'
},
{
    title: '创造性思维-发散性思维的特征',
    tip: '疮遍毒瘤',
    imgSrc: './pic/创造性思维-发散性思维的特征.png'
},
{
    title: '创造性的培养途径-开设培养创造性的课程，教授创造性思维策略',
    tip: '脑子散架',
    imgSrc: './pic/创造性的培养途径3.png'
},
{
    title: '创造性的培养途径-注重创造性个性的塑造',
    tip: '废气剧毒',
    imgSrc: './pic/创造性的培养途径2.png'
},
{
    title: '创造性的培养途径1',
    tip: '送烤鱼',
    imgSrc: './pic/创造性的培养途径1.png'
},
{
    title: '创造性的培养途径',
    tip: '进个城（进个城，送烤鱼，废气剧毒，脑子散架！）',
    imgSrc: './pic/创造性的培养途径.png'
}, {
    title: '操作技能的形成阶段与培养途径',
    tip: '失恋后烦到昏厥',
    imgSrc: './pic/操作技能的形成阶段与培养途径.png'
},
{
    title: '奥苏知识学习分类-新旧知识',
    tip: '--',
    imgSrc: './pic/奥苏知识学习分类-新旧知识.png'
},
{
    title: '奥苏知识学习分类-复杂程度',
    tip: '--',
    imgSrc: './pic/奥苏知识学习分类-复杂程度.png'
},
{
    title: '奥苏贝尔学习分类示意图',
    tip: '--',
    imgSrc: './pic/奥苏贝尔学习分类示意图.png'
},
{
    title: '自我效能理论-班杜拉',
    tip: '--',
    imgSrc: './pic/自我效能理论-班杜拉.png'
},
{
    title: '资源管理策略',
    tip: '使唤奴隶',
    imgSrc: './pic/资源管理策略.png'
},
{
    title: '元认知策略',
    tip: '圆滑的空姐',
    imgSrc: './pic/元认知策略.png'
},
{
    title: '有意义学习的条件',
    tip: '新知识有意义 + 有旧知识 + 新知识旧知识联系的心向',
    imgSrc: './pic/有意义学习的条件.png'
},
{
    title: '影响自我效能感的因素',
    tip: '我直接替鬼说情',
    imgSrc: './pic/影响自我效能感的因素.png'
},
{
    title: '影响迁移的因素',
    tip: '二者相似 + 原油认知结构 + 心向',
    imgSrc: './pic/影响迁移的因素.png'
},
{
    title: '学习迁移理论',
    tip: '--',
    imgSrc: './pic/学习迁移理论.png'
},
{
    title: '学习迁移的分类',
    tip: '--',
    imgSrc: './pic/学习迁移的分类.png'
},
{
    title: '学习过程的八个阶段',
    tip: '动了的宝，一概做饭',
    imgSrc: './pic/学习过程的八个阶段.png'
},
{
    title: '学习动机与学习效率的关系',
    tip: '--',
    imgSrc: './pic/学习动机与学习效率的关系.png'
},
{
    title: '学习动机分类',
    tip: '--',
    imgSrc: './pic/学习动机分类.png'
},
{
    title: '学习动机-定义-功能',
    tip: '调制鸡尾酒',
    imgSrc: './pic/学习动机-定义-功能.png'
},
{
    title: '学习策略的分类',
    tip: '资源管理策略',
    imgSrc: './pic/学习策略的分类.png'
},
{
    title: '行为主义学习-桑代克',
    tip: '--',
    imgSrc: './pic/行为主义学习-桑代克.png'
},
{
    title: '斯金纳的操作性条件作用理论-白鼠',
    tip: '--',
    imgSrc: './pic/斯金纳的操作性条件作用理论-白鼠.png'
},
{
    title: '如何培养学生的学习动机',
    tip: '要立校规',
    imgSrc: './pic/如何培养学生的学习动机.png'
},
{
    title: '如何激发学生的学习动机',
    tip: '乞丐冻僵在街上',
    imgSrc: './pic/如何激发学生的学习动机.png'
},
{
    title: '如何促进良好的心理氛围形成:如何营造良好课堂氛围:增进师生声沟通的心理学原则:学生中心的条件',
    tip: '真关心',
    imgSrc: './pic/如何促进良好的心理氛围形成:如何营造良好课堂氛围:增进师生声沟通的心理学原则:学生中心的条件.png'
},
{
    title: '认知策略',
    tip: '人复工会卒',
    imgSrc: './pic/认知策略.png'
},
{
    title: '强化的类型',
    tip: '--',
    imgSrc: './pic/强化的类型.png'
},
{
    title: '马斯洛需要层次理论',
    tip: '你劝闺蜜，重金求子，美滋滋',
    imgSrc: './pic/马斯洛需要层次理论.png'
},
{
    title: '罗杰斯的学习理论',
    tip: '只有学生',
    imgSrc: './pic/罗杰斯的学习理论.png'
},
{
    title: '苛勒的完形-顿悟说',
    tip: '--',
    imgSrc: './pic/苛勒的完形-顿悟说.png'
},
{
    title: '接受学习',
    tip: '--',
    imgSrc: './pic/接受学习.png'
},
{
    title: '建构主义-知识观',
    tip: '动情猪',
    imgSrc: './pic/建构主义-知识观.png'
},
{
    title: '建构主义-学习观',
    tip: '主动学习社情',
    imgSrc: './pic/建构主义-学习观.png'
},
{
    title: '建构主义-学生观',
    tip: '主动附议',
    imgSrc: './pic/建构主义-学生观.png'
},
{
    title: '负强化的条件作用类型分为条比条件作用和回避条件作用',
    tip: '出逃',
    imgSrc: './pic/负强化的条件作用类型分为条比条件作用和回避条件作用.png'
},
{
    title: '促进学习迁移的措施:迁移理论的教学启示',
    tip: '潜入厕内接了一脸屎',
    imgSrc: './pic/促进学习迁移的措施:迁移理论的教学启示.png'
},
{
    title: '程序教学含义程序教学的原则',
    tip: '小鸡自强',
    imgSrc: './pic/程序教学含义程序教学的原则.png'
},
{
    title: '成败归因轮',
    tip: '只有努力可控， 只有能力、任务难度可控',
    imgSrc: './pic/成败归因轮.png'
},
{
    title: '操作性条件作用的规律',
    tip: '--',
    imgSrc: './pic/操作性条件作用的规律.png'
},
{
    title: '布鲁纳的认知-发现学习理论-学习观教学观-结构教学原则',
    tip: '抢劫冻成狗',
    imgSrc: './pic/布鲁纳的认知-发现学习理论-学习观教学观-结构教学原则.png'
},
{
    title: '奥苏贝尔与罗杰斯的有意义学习区别',
    tip: '--',
    imgSrc: './pic/奥苏贝尔与罗杰斯的有意义学习区别.png'
},
{
    title: '奥苏贝尔的有意义接受学习理论-分类-有意义学习的实质',
    tip: '--',
    imgSrc: './pic/奥苏贝尔的有意义接受学习理论-分类-有意义学习的实质.png'
},
{
    title: '',
    tip: '',
    imgSrc: './pic/.png'
},
{
    title: '',
    tip: '',
    imgSrc: './pic/.png'
},
{
    title: '',
    tip: '',
    imgSrc: './pic/.png'
},
{
    title: '',
    tip: '',
    imgSrc: './pic/.png'
},
{
    title: '',
    tip: '',
    imgSrc: './pic/.png'
},
{
    title: '',
    tip: '',
    imgSrc: './pic/.png'
},
{
    title: '',
    tip: '',
    imgSrc: './pic/.png'
},
{
    title: '',
    tip: '',
    imgSrc: './pic/.png'
},
{
    title: '',
    tip: '',
    imgSrc: './pic/.png'
},
{
    title: '',
    tip: '',
    imgSrc: './pic/.png'
},
{
    title: '',
    tip: '',
    imgSrc: './pic/.png'
},
{
    title: '',
    tip: '',
    imgSrc: './pic/.png'
},
];

// ============================================================
// ========== 以下为渲染逻辑，无需修改 ==========
// ============================================================

(function () {
    const container = document.getElementById('cardContainer');
    const sidebarNav = document.getElementById('sidebarNav');
    container.innerHTML = '';
    sidebarNav.innerHTML = '';

    // 模态框元素
    const overlay = document.getElementById('modalOverlay');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.getElementById('modalCloseBtn');

    // ---------- 打开模态框 ----------
    function openModal(imgSrc) {
        modalImg.src = imgSrc;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // ---------- 关闭模态框 ----------
    function closeModal() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // 关闭事件
    closeBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        closeModal();
    });

    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeModal();
        }
    });

    // ---------- 渲染卡片 & 目录 ----------
    const itemElements = [];

    cardData.forEach((item, index) => {
        const id = index + 1;
        const itemDiv = document.createElement('div');
        itemDiv.className = `item item_${id}`;
        itemDiv.dataset.index = id;

        // 标题
        const qsDiv = document.createElement('div');
        qsDiv.className = 'qs';
        qsDiv.textContent = item.title;

        // 口诀
        const tipDiv = document.createElement('div');
        tipDiv.className = 'tip';
        tipDiv.textContent = item.tip;

        // 图片容器
        const ansDiv = document.createElement('div');
        ansDiv.className = 'ans';

        // 缩略图 - 默认隐藏
        const img = document.createElement('img');
        img.src = item.imgSrc;
        img.alt = `${item.title} 示意图`;

        // 占位文本
        const placeholder = document.createElement('div');
        placeholder.className = 'placeholder-text';
        placeholder.innerHTML = `<span style="font-size:2rem;opacity:0.4;">🖼️</span><br> 点击卡片查看大图`;

        // 图片加载错误处理
        img.onerror = function () {
            img.remove();
            placeholder.className = 'placeholder-text error';
            placeholder.innerHTML = `<span style="font-size:2rem;">⚠️</span><br> 图片加载失败<br><small style="opacity:0.5;font-size:0.8rem;">${item.imgSrc}</small>`;
        };

        // 点击缩略图 -> 打开模态框
        img.addEventListener('click', function (e) {
            e.stopPropagation();
            if (this.src && !this.src.includes('error')) {
                openModal(this.src);
            }
        });

        // 点击卡片任意区域打开模态框
        itemDiv.addEventListener('click', function (e) {
            const imgEl = this.querySelector('.ans img');
            if (imgEl && imgEl.src && !imgEl.src.includes('error')) {
                openModal(imgEl.src);
            }
        });

        // 组装卡片
        ansDiv.appendChild(img);
        ansDiv.appendChild(placeholder);
        itemDiv.appendChild(qsDiv);
        itemDiv.appendChild(tipDiv);
        itemDiv.appendChild(ansDiv);
        container.appendChild(itemDiv);
        itemElements.push(itemDiv);

        // ---------- 生成目录项 ----------
        const li = document.createElement('li');
        li.dataset.target = id;
        li.innerHTML = `
            <span class="nav-index">${id}</span>
            <span class="nav-title">${item.title}</span>
        `;
        li.addEventListener('click', function (e) {
            e.stopPropagation();
            const targetId = parseInt(this.dataset.target);
            const targetItem = itemElements.find(el => parseInt(el.dataset.index) === targetId);
            if (targetItem) {
                // 移除所有高亮
                document.querySelectorAll('.item').forEach(el => el.classList.remove('highlight-card'));
                document.querySelectorAll('.sidebar-nav li').forEach(el => el.classList.remove('active'));

                // 高亮当前卡片和目录项
                targetItem.classList.add('highlight-card');
                this.classList.add('active');

                // 滚动到卡片
                targetItem.scrollIntoView({ behavior: 'smooth', block: 'center' });

                // 3秒后移除卡片高亮（但保留目录高亮）
                setTimeout(() => {
                    targetItem.classList.remove('highlight-card');
                }, 3000);
            }
        });

        sidebarNav.appendChild(li);
    });

    // 默认高亮第一个
    const firstItem = itemElements[0];
    const firstNav = sidebarNav.querySelector('li');
    if (firstItem && firstNav) {
        firstItem.classList.add('highlight-card');
        firstNav.classList.add('active');
        // 3秒后移除高亮
        setTimeout(() => {
            firstItem.classList.remove('highlight-card');
        }, 3000);
    }

    console.log('✅ 卡片已渲染。左侧目录可点击跳转。');
})();