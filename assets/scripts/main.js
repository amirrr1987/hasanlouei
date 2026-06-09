const { createApp } = Vue;

createApp({
  data() {
    return {
      scrolled: false,
      mobileOpen: false,
      activeCategory: 'all',
      statsAnimated: false,
      stats: [
        { value: 20,  display: '۰', suffix: '+', label: 'سال تجربه',     icon: 'mdi:calendar-star' },
        { value: 500, display: '۰', suffix: '+', label: 'مشتری فعال',    icon: 'mdi:account-group' },
        { value: 40,  display: '۰', suffix: '+', label: 'نوع محصول',     icon: 'mdi:package-variant' },
      ],
      categories: [
        { key: 'all',    label: 'همه' },
        { key: 'nuts',   label: 'آجیل' },
        { key: 'dried',  label: 'خشکبار' },
        { key: 'seeds',  label: 'دانه‌ها' },
      ],
      products: [
        {
          image: './assets/images/products/pistachio.jpg', name: 'پسته',          desc: 'پسته کله‌قوچی و احمدآقایی',    cat: 'nuts',  badge: 'پرفروش' },
        { image: './assets/images/products/walnut.jpg', name: 'گردو',          desc: 'گردو کاغذی کرمانشاه',          cat: 'nuts',  badge: '' },
        { image: './assets/images/products/almond.jpg', name: 'بادام درختی',   desc: 'بادام ایرانی تازه و خشک',      cat: 'nuts',  badge: '' },
        { image: './assets/images/products/hazelnut.jpg', name: 'فندق',          desc: 'فندق خام و بوداده گیلان',      cat: 'nuts',  badge: 'تازه' },
        { image: './assets/images/products/raisins.jpg', name: 'کشمش',          desc: 'کشمش سبز، قرمز و انگوری',     cat: 'dried', badge: '' },
        { image: './assets/images/products/dried-dates.jpg', name: 'خرما',          desc: 'خرما مضافتی و پیارم',          cat: 'dried', badge: 'پرفروش' },
        { image: './assets/images/products/dried-figs.jpg', name: 'انجیر خشک',    desc: 'انجیر خشک استهبان',            cat: 'dried', badge: '' },
        { image: './assets/images/products/dried-barberry.jpg', name: 'زرشک',          desc: 'زرشک بیرجند درجه یک',         cat: 'dried', badge: '' },
        { image: './assets/images/products/peanut.jpg', name: 'بادام زمینی',  desc: 'بادام زمینی ایرانی و وارداتی', cat: 'seeds', badge: '' },
        { image: './assets/images/products/sunflower-seeds.jpg', name: 'تخمه آفتابگردان', desc: 'تخمه آفتابگردان', cat: 'seeds', badge: '' },
      ],
      whyItems: [
        { icon: 'mdi:certificate-outline',    title: 'کیفیت تضمین‌شده',         desc: 'تمام محصولات از مبدأ تأمین می‌شن و قبل از ارسال بازرسی کیفی دقیق دارن.' },
        { icon: 'mdi:truck-delivery-outline', title: 'ارسال سریع سراسری',       desc: 'با ناوگان حمل‌ونقل اختصاصی، تحویل به موقع به تمام استان‌های ایران.' },
        { icon: 'mdi:tag-outline',            title: 'قیمت رقابتی عمده',        desc: 'بدون واسطه مستقیم از تولیدکننده، با بهترین قیمت بازار.' },
        { icon: 'mdi:package-variant-closed', title: 'بسته‌بندی اختصاصی',      desc: 'بسته‌بندی با لوگو و برند مشتری برای سفارش‌های بالای ۱۰۰ کیلوگرم.' },
        { icon: 'mdi:headset',                title: 'پشتیبانی ۶ روز هفته',    desc: 'تیم پشتیبانی ما ۶ روز هفته آماده پاسخ‌گویی به سوالات شماست.' },
        { icon: 'mdi:handshake-outline',      title: 'شرایط پرداخت انعطاف‌پذیر', desc: 'برای مشتریان دائمی امکان پرداخت اقساطی و در محل فراهم است.' },
      ],
      steps: [
        { num: '۱', icon: 'mdi:phone-outline',       title: 'تماس بگیرید',      desc: 'با تیم ما تماس بگیرید و محصولات و مقدار مورد نیاز را اعلام کنید.' },
        { num: '۲', icon: 'mdi:file-document-outline', title: 'دریافت فاکتور',   desc: 'در کمتر از ۲ ساعت فاکتور رسمی با قیمت عمده دریافت می‌کنید.' },
        { num: '۳', icon: 'mdi:truck-check-outline',  title: 'تحویل درب‌منزل',  desc: 'بسته‌بندی شده و سالم، به آدرس شما تحویل داده می‌شود.' },
      ],
      contacts: [
        { label: 'تلفن تماس', value: '09126096909',   icon: 'mdi:phone',      href: 'tel:+989126096909',                       color: '#25A244' },
        // { label: 'واتساپ',    value: '۰۹۱۲ ۱۲۳ ۴۵ ۶۷',   icon: 'mdi:whatsapp',   href: 'https://wa.me/989121234567',              color: '#25D366' },
        // { label: 'اینستاگرام', value: '@hasanlouei_nuts',  icon: 'mdi:instagram',  href: 'https://instagram.com/hasanlouei_nuts',    color: '#E1306C' },
        // { label: 'آدرس',      value: 'تهران، بازار بزرگ آجیل', icon: 'mdi:map-marker', href: '#',                                  color: '#C8972A' },
      ],
    };
  },

  computed: {
    filteredProducts() {
      if (this.activeCategory === 'all') return this.products;
      return this.products.filter(p => p.cat === this.activeCategory);
    }
  },

  mounted() {
    window.addEventListener('scroll', () => {
      this.scrolled = window.scrollY > 40;
    });
    this.$nextTick(() => {
      this.initAnimations();
      this.createFloatingNuts();
      this.initStatCounter();
    });
  },

  methods: {
    initAnimations() {
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo('.hero-eyebrow', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: 'power3.out' });
      gsap.fromTo('#hero-title',   { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1,   delay: 0.55, ease: 'power3.out' });
      gsap.fromTo('#hero-sub',     { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.8,  ease: 'power3.out' });
      gsap.fromTo('#hero-btns',    { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 1.0,  ease: 'power3.out' });
      gsap.fromTo('#hero-stats',   { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 1.2,  ease: 'power3.out' });

      gsap.utils.toArray('.reveal').forEach(el => {
        gsap.fromTo(el,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.75, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true }
          }
        );
      });
    },

    initStatCounter() {
      ScrollTrigger.create({
        trigger: '#hero-stats',
        start: 'top 90%',
        once: true,
        onEnter: () => {
          if (this.statsAnimated) return;
          this.statsAnimated = true;
          this.stats.forEach((stat, i) => {
            gsap.to({ val: 0 }, {
              val: stat.value,
              duration: 1.8,
              delay: i * 0.2,
              ease: 'power2.out',
              onUpdate: function () {
                const persianDigits = n => String(Math.round(n)).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
                stat.display = persianDigits(this.targets()[0].val);
              }
            });
          });
        }
      });
    },

    createFloatingNuts() {
      const container = document.getElementById('nuts-bg');
      if (!container) return;
      const nuts = ['🌰', '🥜', '🫘', '🍇', '✨', '🌿', '🎋'];
      for (let i = 0; i < 22; i++) {
        const span = document.createElement('span');
        span.textContent = nuts[i % nuts.length];
        const size = 16 + Math.random() * 22;
        span.style.cssText = `position:absolute;font-size:${size}px;left:${Math.random()*100}%;top:${Math.random()*100}%;opacity:0;user-select:none;pointer-events:none;`;
        container.appendChild(span);
        gsap.to(span, {
          opacity: 0.05 + Math.random() * 0.09,
          y: -35 - Math.random() * 45,
          x: (Math.random() - 0.5) * 35,
          rotation: (Math.random() - 0.5) * 50,
          duration: 4 + Math.random() * 4,
          delay: Math.random() * 2.5,
          repeat: -1, yoyo: true, ease: 'sine.inOut'
        });
      }
    }
  }
}).mount('#app');
