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