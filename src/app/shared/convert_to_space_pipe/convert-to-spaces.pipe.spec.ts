import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';

describe('ConvertToSpacesPipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertToSpacesPipe();
    expect(pipe).toBeTruthy();
  });

  it("should replace '-' with space", () => {
    //arrange
    let pipe = new ConvertToSpacesPipe();
    //act
    let result = pipe.transform('Tauseef-Akram', '-');
    //assert
    expect(result).toEqual('Tauseef Akram');
  });
});
