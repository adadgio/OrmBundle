import { App, Console }                     from '@lyrics/core';
import { BaseController }                   from '@lyrics/controller';
import { Route, Controller, Inject }        from '@lyrics/routing';
import { Request, Response, JsonResponse }  from '@lyrics/http';

@Controller('/bite')
export class BiteController extends BaseController
{
    constructor(app: App) {
        super(app);
    }
    
    @Route('/poilue', { type: 'GET' })
    indexAction(request: Request)
    {
        return new Response('Bite couille poilue');
    }
}
