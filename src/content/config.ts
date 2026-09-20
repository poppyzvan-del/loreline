import { defineCollection, z } from 'astro:content';

// Pack 资产集合 —— 每个 .md 文件即一个可售卖/订阅的 Asset Pack
const packs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    // 售价（美元）。0 表示免费
    price: z.number().default(0),
    // 划线原价（折扣展示用）
    originalPrice: z.number().optional(),
    // 资产类别
    category: z.enum(['dialogue', 'glossary', 'style-guide', 'reference', 'bundle']),
    tags: z.array(z.string()).default([]),
    // 免费样例文件路径（相对 public/）
    samplePath: z.string().optional(),
    // 免费样例条目数（用于详情页展示"免费预览 N 条"）
    sampleCount: z.number().optional(),
    // Lemon Squeezy checkout URL —— 在 LS 后台建 Product 后，从 "Buy" 按钮复制完整 checkout 链接粘贴至此
    lsCheckoutUrl: z.string().url().optional(),
    // 适用品类（如 ARPG / 女性向 / SLG / 通用）
    applicableGenres: z.array(z.string()).default([]),
    // 商用授权说明
    license: z.string().default('商用授权，可用于项目，禁止转售资产包本身'),
    // 资产规模描述（如 "100 条中英对照台词"）
    entryCount: z.string().optional(),
    // 语言
    languages: z.array(z.string()).default(['zh', 'en']),
    // 是否首页推荐
    featured: z.boolean().default(false),
    // 是否草稿（草稿不展示在列表页）
    draft: z.boolean().default(false),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
  }),
});

// Blog 引流文章集合
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    // 关联的 Pack slug，用于文末 CTA
    relatedPackSlug: z.string().optional(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    featureImage: z.string().optional(),
  }),
});

export const collections = { packs, blog };
