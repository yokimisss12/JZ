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
    title: '注意的稳定性与分配',
    tip: '稳中求胜，合理分配',
    imgSrc: './注意稳定性与分配.png'
}, {
    title: '注意的广度与转移',
    tip: '眼观六路，灵活切换',
    imgSrc: './注意广度与转移.png'
}];

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