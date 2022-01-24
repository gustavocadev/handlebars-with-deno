import { handle } from '../server.ts';
import { RouterContext } from 'https://deno.land/x/oak/mod.ts'

const getIndex = async (ctx: RouterContext<'/'>) => {
	ctx.response.body = await handle.renderView('index',
		{ name: 'Gustvo' }
	);
};


export { getIndex }
