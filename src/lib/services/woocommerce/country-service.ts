import { getWoocommerceApi } from '$lib/utils/server'
import { serializeNonPOJOs } from '$lib/utils/validations'
import { error } from '@sveltejs/kit'

export const fetchCountries = async ({ origin, storeId, server = false, sid = null }: any) => {
	try {
		let res: any = {}

		res = await getWoocommerceApi(`customers/me`, {}, sid)

		return res?.data || []
	} catch (e) {
		error(e.status, e.data?.message || e.message)
	}
}

export const fetchStates = async ({
	origin,
	storeId,
	countryCode,
	server = false,
	sid = null
}: any) => {
	try {
		let res: any = {}

		res = await getWoocommerceApi(`customers/me`, {}, sid)

		return res?.data || []
	} catch (e) {
		error(e.status, e.data?.message || e.message)
	}
}
