import { MessageService } from "./message-service";


describe('', () => {
    //
    let service: MessageService;
    //
    beforeEach(() => {
        service = new MessageService();
    });
    //
    it('should have no message to start', () => {
        expect(service.messages.length).toBe(0);
    });
    //
    it('should add a message when add is called', () => {
        service.add('message1');
        expect(service.messages.length).toBe(1);
    });
    //
     it('should remove all messagea when clear is called', () => {
        service.add('message1');
        service.add('message2');
        service.clear();
        expect(service.messages.length).toBe(0);
    });
    //
});    