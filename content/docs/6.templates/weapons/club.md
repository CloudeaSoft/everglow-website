---
title: '棍'
description: '棍类武器模板'
date: '2025-08-12 19:00:00'
navigation:
  icon: 'lucide:wand-sparkles'
---

棍类武器模板是一类近战武器的模板，主要由3个部分`ClubItem`, `ClubProj`, `ClubProjSmash`组成.

## ClubItem

### 范例

```csharp
public class ExampleClubItem : ClubItem
{
	public override void SetCustomDefaults()
	{
		ProjType = {ClubProj}.type;
		ProjSmashType = {ClubProjSmash}.type;
        // ...
	}
}
```

### 属性

| 名称          | 描述                              |
| ------------- | --------------------------------- |
| ProjType      | 主Projectile, 设置Item.projectile |
| ProjSmashType | 视觉效果Projectile                |

## ClubProj

### 范例

### 属性

| 名称                   | 可写 | 描述                   |
| ---------------------- | ---- | ---------------------- |
| Omega                  | ⛔   | 角速度                 |
| Beta                   | ✅   | 角加速度               |
| MaxOmega               | ✅   | 最大角速度             |
| HitLength              | ✅   | 伤害半径               |
| WarpValue              | ✅   | 扭曲度                 |
| StrikeOmegaDecrease    | ✅   | 击中时角速度减速量     |
| MinStrikeOmegaDecrease | ✅   | 最小击中时角速度减速量 |
| DamageStartValue       | ✅   | 初始伤害               |
| TrailLength            | ✅   | 尾迹长度               |
| TrailVecs              | ⛔   | 尾迹坐标队列           |

### 方法

| 名称        | 描述          |
| ----------- | ------------- |
| PostPreDraw | PreDraw()结尾 |
| DrawTrail   | 绘制尾迹      |
| DrawWarp    | 绘制扭曲      |
| TrailAlpha  | 尾迹透明度    |

## 用例 - 铜棍

```csharp [CopperClub.cs]
public class CopperClub_Item : ClubItem
{
	public override void SetCustomDefaults()
	{
		Item.damage = 6;
		Item.value = 65;
		ProjType = ModContent.ProjectileType<CopperClub>();
		ProjSmashType = ModContent.ProjectileType<CopperClubSmash>();
	}
}

public class CopperClub : ClubProj_Metal
{
}

public class CopperClubSmash : ClubProjSmash_Metal
{
	public override string Texture => ModAsset.CopperClub_Mod;
}
```
