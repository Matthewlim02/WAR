const expect = chai.expect;

describe('Week6_Functions', () => {
    describe('#getPlayerScore', () => {
        it('Player score should be a number', () => {
            const testPlayer = new Player("Cat", 0);
            expect(testPlayer.getScore()).to.be.a('number');
        });
        it('Player score should increase', () => {
            const testPlayer = new Player("Cat", 0);
            testPlayer.incrementScore();
            expect(testPlayer.getScore()).to.equal(1);
        });
        
    })
})
