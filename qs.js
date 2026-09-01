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
    title: '尊重与严格要求相结合原则',
    tip: '尊重 + 严格 +宽严适度',
    imgSrc: './pic/尊重与严格要求相结合原则.png'
},
{
    title: '最近发展区',
    tip: '--',
    imgSrc: './pic/最近发展区.png'
},
{
    title: '中学生-自我意识发展特点',
    tip: '评分尊嘟一坨屎',
    imgSrc: './pic/中学生-自我意识发展特点.png'
},
{
    title: '中学生-条件情绪方法',
    tip: '看开点，又[不止我早泄]',
    imgSrc: './pic/中学生-条件情绪方法.png'
},
{
    title: '中学生-情绪发展特点',
    tip: '强东内疚',
    imgSrc: './pic/中学生-情绪发展特点.png'
},
{
    title: '中国教育著作',
    tip: '--',
    imgSrc: './pic/中国教育著作.png'
},
{
    title: '中国古代教育史',
    tip: '--',
    imgSrc: './pic/中国古代教育史.png'
},
{
    title: '影响人身心发展的主要因素，影响人格性格形成的因素，影响能力发展因素',
    tip: '传经教主',
    imgSrc: './pic/影响人身心发展的主要因素.png'
},
{
    title: '影响人身心发展的主要因素-学习教育-主导作用3',
    tip: '--',
    imgSrc: './pic/影响人身心发展的主要因素-学习教育-主导作用3.png'
},
{
    title: '影响人身心发展的主要因素-环境-实现基础',
    tip: '--',
    imgSrc: './pic/影响人身心发展的主要因素-环境-实现基础.png'
},
{
    title: '影响人身心发展的主要因素-个体主观能动性-决定因素',
    tip: '',
    imgSrc: './pic/影响人身心发展的主要因素-个体主观能动性-决定因素.png'
},
{
    title: '影响品德发展的因素',
    tip: '怎样治[崴脚痛风？跳到屎内]',
    imgSrc: './pic/影响品德发展的因素.png'
},
{
    title: '因材施教原则',
    tip: '踩[了屎]有点[粘]',
    imgSrc: './pic/因材施教原则.png'
},
{
    title: '学制的类型',
    tip: '--',
    imgSrc: './pic/学制的类型.png'
},
{
    title: '学校心理辅导-目标-原则',
    tip: '[尊嘱全体学生]:[别]被[整]破[防]了',
    imgSrc: './pic/学校心理辅导-目标-原则.png'
},
{
    title: '现代社会（20世纪后）教育特征',
    tip: '民众权限多',
    imgSrc: './pic/现代社会（20世纪后）教育特征.png'
},
{
    title: '现代教育理论的发展',
    tip: '[姆0]天天[泻火,所以[木]有[掌握学习目标],在[课]上被[罚站],[哪]里[发现]一[条狗]，施[舍]了一[粒饭]，最后姆0被[班]上[优化]了',
    imgSrc: './pic/现代教育理论的发展.png'
},
{
    title: '现代教学-班级授课制-优缺点',
    tip: '因为班里人多，可以[大面积收]集【倒】卖纸吸管；由于倒卖吸管，所以【逐】渐的【见财起意】',
    imgSrc: './pic/现代教学-班级授课制-优缺点.png'
},
{
    title: '西方教育著作3',
    tip: '边塞学论语，既无民主，不做儿童',
    imgSrc: './pic/西方教育著作3.png'
},
{
    title: '西方教育著作2',
    tip: '卢梭不自爱，康德首讲授，对裴斯泰洛齐很心动，一二三四，原理中断',
    imgSrc: './pic/西方教育著作2.png'
},
{
    title: '西方教育著作1',
    tip: '培根首提出、击垮大毒贩、洛克有着漫画身板',
    imgSrc: './pic/西方教育著作1.png'
},
{
    title: '西方教育著作',
    tip: '--',
    imgSrc: './pic/西方教育著作.png'
},
{
    title: '我国目前教育方针和目的',
    tip: '--',
    imgSrc: './pic/我国目前教育方针和目的.png'
},
{
    title: '我国教育理论的发展',
    tip: '--',
    imgSrc: './pic/我国教育理论的发展.png'
},
{
    title: '我国的义务教育制度',
    tip: '基本特征：强扑免费公鸡',
    imgSrc: './pic/我国的义务教育制度.png'
},
{
    title: '我国的学制沿革',
    tip: '人颁布，鬼实行，丑男子，需长美',
    imgSrc: './pic/我国的学制沿革.png'
},
{
    title: '文化历史发展理论',
    tip: '伟哥犀利',
    imgSrc: './pic/文化历史发展理论.png'
},
{
    title: '外国古代教育史',
    tip: '--',
    imgSrc: './pic/外国古代教育史.png'
},
{
    title: '体育-基本任务',
    tip: '--',
    imgSrc: './pic/体育-基本任务.png'
},
{
    title: '探究教学的实施步骤',
    tip: '【社死就】是【流】鼻【涕】',
    imgSrc: './pic/探究教学的实施步骤.png'
},
{
    title: '素质教育的内涵',
    tip: '提速创屎体面（和面吃）的歌星',
    imgSrc: './pic/素质教育的内涵.png'
},
{
    title: '斯皮尔曼的智力二因素',
    tip: '【二】哈很【皮】',
    imgSrc: './pic/斯皮尔曼的智力二因素.png'
},
{
    title: '说服教育的贯彻要求',
    tip: '去挤兑人',
    imgSrc: './pic/说服教育的贯彻要求.png'
},
{
    title: '疏导原则',
    tip: '疏导 + 表扬',
    imgSrc: './pic/疏导原则.png'
},
{
    title: '实践锻炼法的贯彻要求',
    tip: '主动捡纸屑和烟屁股',
    imgSrc: './pic/实践锻炼法的贯彻要求.png'
},
{
    title: '师生关系的内容特点',
    tip: '相互平等的主人和禽兽',
    imgSrc: './pic/师生关系的内容特点.png'
},
{
    title: '上好一堂课的要求与标准',
    tip: '放只鸡，畜生都泪目了，就是一堂好课',
    imgSrc: './pic/上好一堂课的要求与标准.png'
},
{
    title: '人格的特征',
    tip: '和哥哥舌吻，中毒咋整',
    imgSrc: './pic/人格的特征.png'
},
{
    title: '人格的结构',
    tip: '单恋多抑郁啊',
    imgSrc: './pic/人格的结构.png'
},
{
    title: '全面发展教育的构成及作用',
    tip: '德智体美劳，灵前勿动盒',
    imgSrc: './pic/全面发展教育的构成及作用.png'
},
{
    title: '情绪的理论',
    tip: '圣母砍脑袋杀人，GOOD！散啦散啦！',
    imgSrc: './pic/情绪的理论.png'
},
{
    title: '情感陶冶法的贯彻要求',
    tip: '乞讨经血',
    imgSrc: './pic/情感陶冶法的贯彻要求.png'
},
{
    title: '品德形成的一般过程',
    tip: '品德高尚的【艺人呢】',
    imgSrc: './pic/品德形成的一般过程.png'
},
{
    title: '品德评价法的贯彻要求',
    tip: '平民传教',
    imgSrc: './pic/品德评价法的贯彻要求.png'
},
{
    title: '品德的心理结构',
    tip: '知情意行',
    imgSrc: './pic/品德的心理结构.png'
},
{
    title: '皮亚杰的认知发展理论',
    tip: '爱奇艺，新剧提前看',
    imgSrc: './pic/皮亚杰的认知发展理论.png'
},
{
    title: '皮亚杰道德发展4阶段',
    tip: '握拳可攻',
    imgSrc: './pic/皮亚杰道德发展4阶段.png'
},
{
    title: '培养良好性格的途径',
    tip: '及时以强哥为人生榜样',
    imgSrc: './pic/培养良好性格的途径.png'
},
{
    title: '培养班集体的方法',
    tip: '沐足，鬼混，做活动',
    imgSrc: './pic/培养班集体的方法.png'
},
{
    title: '美育-体育-劳动教育的意义',
    tip: '答题提示：从其他角度体现促进该育',
    imgSrc: './pic/美育-体育-劳动教育的意义.png'
},
{
    title: '美育-实施原则',
    tip: '性感易闯祸',
    imgSrc: './pic/美育-实施原则.png'
},
{
    title: '美育-内容',
    tip: '想异性',
    imgSrc: './pic/美育-内容.png'
},
{
    title: '美育-基本任务',
    tip: '答题提示：认真，过程，情感',
    imgSrc: './pic/美育-基本任务.png'
},
{
    title: '美育-概念',
    tip: '发现受捡肥皂',
    imgSrc: './pic/美育-概念.png'
},
{
    title: '马克思主义教育学的发展',
    tip: '--',
    imgSrc: './pic/马克思主义教育学的发展.png'
},
{
    title: '良好品质的培养',
    tip: '长着一张【矬脸，异性难约】啊',
    imgSrc: './pic/良好品质的培养.png'
},
{
    title: '良好品德培养方法',
    tip: '利用【绑架，体罚说服】别人',
    imgSrc: './pic/良好品德培养方法.png'
},
{
    title: '劳动教育-基本任务',
    tip: '--',
    imgSrc: './pic/劳动教育-基本任务.png'
},
{
    title: '课堂纪律类型-维持纪律策略',
    tip: '策略：女鬼尖叫',
    imgSrc: './pic/课堂纪律类型-维持纪律策略.png'
},
{
    title: '课程-作用与意义',
    tip: '--',
    imgSrc: './pic/课程-作用与意义.png'
},
{
    title: '课程-制约因素选择开发确立因素',
    tip: '答题提示：制约课程，内容，开发，目标确立均可从————人、社会、知识角度回答',
    imgSrc: './pic/课程-制约因素选择开发确立因素.png'
},
{
    title: '课程-校本课程及特点',
    tip: '肖哥有姿色',
    imgSrc: './pic/课程-校本课程及特点.png'
},
{
    title: '课程-内容的文本表现形式',
    tip: '鸡不要叫',
    imgSrc: './pic/课程-内容的文本表现形式.png'
},
{
    title: '课程-理论流派',
    tip: '--',
    imgSrc: './pic/课程-理论流派.png'
},
{
    title: '课程-类型及特点',
    tip: '柯基捡到活尸体又放了',
    imgSrc: './pic/课程-类型及特点.png'
},
{
    title: '课程-词的由来-定义',
    tip: '现代斯宾塞',
    imgSrc: './pic/课程-词的由来-定义.png'
},
{
    title: '近代社会教育特征',
    tip: '--',
    imgSrc: './pic/近代社会教育特征.png'
},
{
    title: '教育制度的特点',
    tip: '--',
    imgSrc: './pic/教育制度的特点.png'
},
{
    title: '教育制度-概念-影响因素（血脂确立依据）',
    tip: '--',
    imgSrc: './pic/教育制度-概念-影响因素（血脂确立依据）.png'
},
{
    title: '教育与文化的关系',
    tip: '教育对文化：低声叫床、 社会对文化：假装泪目',
    imgSrc: './pic/教育与文化的关系.png'
},
{
    title: '教育与生产力的关系',
    tip: '老科技VS龟速人手',
    imgSrc: './pic/教育与生产力的关系.png'
},
{
    title: '教育影响的一致性和连贯性',
    tip: '连灌【师姐三杯】酒',
    imgSrc: './pic/教育影响的一致性和连贯性.png'
},
{
    title: '教育学的爸爸',
    tip: '爸爸！【跨进耳科先保重】',
    imgSrc: './pic/教育学的爸爸.png'
},
{
    title: '教育万能论',
    tip: '洛克玩的花',
    imgSrc: './pic/教育万能论.png'
},
{
    title: '教育目的-我国-确立理论依据-马克思关于人的全面发展学说',
    tip: '--',
    imgSrc: './pic/教育目的-我国-确立理论依据-马克思关于人的全面发展学说.png'
},
{
    title: '教育目的-确立依据',
    tip: '--',
    imgSrc: './pic/教育目的-确立依据.png'
},
{
    title: '教育目的-理论',
    tip: '社会：社恐和图图寻开心、个人：课人说杰伦福禄齐',
    imgSrc: './pic/教育目的-理论.png'
},
{
    title: '教育目的-功能',
    tip: '李导控评',
    imgSrc: './pic/教育目的-功能.png'
},
{
    title: '教育目的-概念和意义',
    tip: '--',
    imgSrc: './pic/教育目的-概念和意义.png'
},
{
    title: '教育目的-层次结构',
    tip: '教培咳血',
    imgSrc: './pic/教育目的-层次结构.png'
},
{
    title: '教育过程的基本规律',
    tip: '截肢过多，失学不能穿黑丝',
    imgSrc: './pic/教育过程的基本规律.png'
},
{
    title: '教育对认可的影响（功能）-影响与制约',
    tip: '--',
    imgSrc: './pic/教育对认可的影响（功能）-影响与制约.png'
},
{
    title: '教育的社会属性',
    tip: '--',
    imgSrc: './pic/教育的社会属性.png'
},
{
    title: '教育的起源',
    tip: 'C罗专升本，美梦驱心魔，腹肌男劳动',
    imgSrc: './pic/教育的起源.png'
},
{
    title: '教育的功能',
    tip: '--',
    imgSrc: './pic/教育的功能.png'
},
{
    title: '教学原则-直观性原则',
    tip: '直女不要选择御姐',
    imgSrc: './pic/教学原则-直观性原则.png'
},
{
    title: '教学原则-循序渐进原则',
    tip: '【细男人】变粗心要循序渐进',
    imgSrc: './pic/教学原则-循序渐进原则.png'
},
{
    title: '教学原则-启发性原则',
    tip: '黄赌毒，住墓地',
    imgSrc: './pic/教学原则-启发性原则.png'
},
{
    title: '教学原则-理论联系实际',
    tip: '时运不济',
    imgSrc: './pic/教学原则-理论联系实际.png'
},
{
    title: '教学原则-科学性和思想性教育性相统一原则',
    tip: '科学 + 思想 + 自身的科学和思想',
    imgSrc: './pic/教学原则-科学性和思想性教育性相统一原则.png'
},
{
    title: '教学与教育智育上课的关系',
    tip: '--',
    imgSrc: './pic/教学与教育智育上课的关系.png'
},
{
    title: '教学评价-类型',
    tip: '--',
    imgSrc: './pic/教学评价-类型.png'
},
{
    title: '教学评价-功能',
    tip: '频繁导管，调去急诊',
    imgSrc: './pic/教学评价-功能.png'
},
{
    title: '教学过程的结构基本阶段',
    tip: '罚0，攻孕检',
    imgSrc: './pic/教学过程的结构基本阶段.png'
},
{
    title: '教学过程本质-与特殊的认识过程的具体表现',
    tip: '【引荐御姐】认识认识',
    imgSrc: './pic/教学过程本质-与特殊的认识过程的具体表现.png'
},
{
    title: '教学工作的基本环节',
    tip: '背上作业去辅导鸡',
    imgSrc: './pic/教学工作的基本环节.png'
},
{
    title: '教学方法运用-前中后通用答题模版',
    tip: '答题提示：前中后通用答题模版',
    imgSrc: './pic/教学方法运用-前中后通用答题模版.png'
},
{
    title: '教学方法选用依据',
    tip: '选的方法要【笑的老师，学生直飙屎】',
    imgSrc: './pic/教学方法选用依据.png'
},
{
    title: '教学的作用意义',
    tip: '中戏面基',
    imgSrc: './pic/.教学的作用意义png'
},
{
    title: '教学的任务',
    tip: '德智体美及格',
    imgSrc: './pic/教学的任务.png'
},
{
    title: '教师职业倦怠',
    tip: '逮个情人',
    imgSrc: './pic/教师职业倦怠.png'
},
{
    title: '教师观',
    tip: '见金眼开',
    imgSrc: './pic/教师观.png'
},
{
    title: '教材编写基本要求',
    tip: '理科仔，排挤他',
    imgSrc: './pic/教材编写基本要求.png'
},
{
    title: '讲授法的基本要求',
    tip: '面对【一具死尸】可以用讲授法',
    imgSrc: './pic/讲授法的基本要求.png'
},
{
    title: '建立良好师生关系的途径与方法',
    tip: '关起来修理学生',
    imgSrc: './pic/建立良好师生关系的途径与方法.png'
},
{
    title: '加德纳的多元智能理论',
    tip: '加多宝：人在自然里学习语数音体梅',
    imgSrc: './pic/加德纳的多元智能理论.png'
},
{
    title: '集体教育与个别教育相结合',
    tip: '集体教育 + 个体教育 + 热爱集体 / 马卡连柯-集体-平行影响',
    imgSrc: './pic/集体教育与个别教育相结合.png'
},
{
    title: '教育与的本质属性',
    tip: '--',
    imgSrc: './pic/教育与的本质属性.png'
},
{
    title: '基础教育课改目标',
    tip: '鸡狗能过学考',
    imgSrc: './pic/基础教育课改目标.png'
},
{
    title: '基础教育课改-职业理念-学生观',
    tip: '学生【特意发展】',
    imgSrc: './pic/基础教育课改-职业理念.png'
},
{
    title: '基础教育课改-评价观',
    tip: '内房总出过事',
    imgSrc: './pic/基础教育课改-评价观.png'
},
{
    title: '衡量测验题目的质量指标',
    tip: '校正新闻',
    imgSrc: './pic/衡量测验题目的质量指标.png'
},
{
    title: '好的班集体的特征-班集体形成标志',
    tip: '沐足，鬼混',
    imgSrc: './pic/好的班集体的特征-班集体形成标志.png'
},
{
    title: '古代社会教育特征',
    tip: '--',
    imgSrc: './pic/古代社会教育特征.png'
},
{
    title: '个体（人）的身心发展动因',
    tip: '内个孟获说，高德威武',
    imgSrc: './pic/个体（人）的身心发展动因.png'
},
{
    title: '个体（人）的身心发展的一般规律',
    tip: '边骑平衡车边嘘嘘，插进湖里摔断了',
    imgSrc: './pic/个体（人）的身心发展的一般规律.png'
},
{
    title: '个体（人）的身心发展的动因',
    tip: '外甥巡逻',
    imgSrc: './pic/个体（人）的身心发展的动因.png'
},
{
    title: '福乐和布朗的教师成长三阶段-教师成长与发展途径',
    tip: '教师成长：看别人，看自己，多反思，多练习',
    imgSrc: './pic/福乐和布朗的教师成长三阶段-教师成长与发展途径.png'
},
{
    title: '发挥积极因素与客服消极因素相结合',
    tip: '跳跳【二人转】，生活不消极',
    imgSrc: './pic/发挥积极因素与客服消极因素相结合.png'
},
{
    title: '德育途径',
    tip: '班主任，上课，开会，做活动',
    imgSrc: './pic/德育途径.png'
},
{
    title: '德育六方法',
    tip: '逃咯，其实不是贫道说的',
    imgSrc: './pic/德育六方法.png'
},
{
    title: '场景教学模式',
    tip: '金晨安抚劫匪',
    imgSrc: './pic/场景教学模式.png'
},
{
    title: '常用的教育研究方法',
    tip: '--',
    imgSrc: './pic/常用的教育研究方法.png'
},
{
    title: '常用的教育研究方法-实验法类型1',
    tip: '--',
    imgSrc: './pic/常用的教育研究方法-实验法类型1.png'
},
{
    title: '常用的教育研究方法-实验法类型',
    tip: '--',
    imgSrc: './pic/常用的教育研究方法-实验法类型.png'
},
{
    title: '常用的教育研究方法-观察法类型',
    tip: '--',
    imgSrc: './pic/常用的教育研究方法-观察法类型.png'
},
{
    title: '常用的教育研究方法-调查问卷类型',
    tip: '--',
    imgSrc: './pic/常用的教育研究方法-调查问卷类型.png'
},
{
    title: '布置作业的要求',
    tip: '布置完作业，学生【要奋笔疾书】',
    imgSrc: './pic/布置作业的要求.png'
},
{
    title: '备课时-备学生要求与关注学生哪些方面',
    tip: '爱情和性知识',
    imgSrc: './pic/备课时-备学生要求与关注学生哪些方面.png'
},
{
    title: '备课的要求过程',
    tip: '生财之法-炼丹师',
    imgSrc: './pic/备课的要求过程.png'
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