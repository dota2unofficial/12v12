patreon_perk_str_for_kill_t1 = class({})
--------------------------------------------------------------------------------

function patreon_perk_str_for_kill_t1:IsHidden()
	return false
end

--------------------------------------------------------------------------------
function patreon_perk_str_for_kill_t1:GetTexture()
	return "perkIcons/patreon_perk_str_for_kill_t0"
end

--------------------------------------------------------------------------------

function patreon_perk_str_for_kill_t1:IsPurgable()
	return false
end
--------------------------------------------------------------------------------
function patreon_perk_str_for_kill_t1:RemoveOnDeath()
	return false
end
--------------------------------------------------------------------------------

function patreon_perk_str_for_kill_t1:DeclareFunctions()
	local funcs = {
		MODIFIER_PROPERTY_STATS_STRENGTH_BONUS,
	}
	return funcs
end
--------------------------------------------------------------------------------

function patreon_perk_str_for_kill_t1:GetModifierBonusStats_Strength()
	return GetPerkValue(2, self, 1, 0)*self:GetParent():GetKills()
end


--------------------------------------------------------------------------------
function GetPerkValue(const, modifier, levelCounter, bonusPerLevel)
	local heroLvl = modifier:GetParent():GetLevel()
	return math.floor(heroLvl/levelCounter)*bonusPerLevel+const
end
--------------------------------------------------------------------------------
