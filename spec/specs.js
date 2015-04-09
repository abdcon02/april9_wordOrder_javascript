describe('wordOrder', function() {
  it('takes an "a" for input and returns ["a"]', function() {
    expect(wordOrder('a')).to.eql(['a']);
  });

  it('takes an "a," for input and returns ["a"]', function() {
    expect(wordOrder('a')).to.eql(['a']);
  });

  it('takes an "you\'re" for input and returns ["you\'re"]', function() {
    expect(wordOrder('you\'re')).to.eql(['you\'re']);
  });

  it('takes an "you you are here" for input and returns ["you", "are", "here"]', function() {
    expect(wordOrder('you you are here')).to.eql(["you", "are", "here"]);
  });

  it('takes an "I love my dog love" for input and returns ["love", "I", "my", "dog"]', function() {
    expect(wordOrder('I love my dog love')).to.eql(["love", "I", "my", "dog"]);
  });

  it('takes an "I love my dog love" for input and returns ["love", "I", "my", "dog"]', function() {
    expect(wordOrder('I love my dog love')).to.eql(["love", "I", "my", "dog"]);
  });

  it('takes an "programming is fun fun programming" for input and returns ["programming", "fun", "is", "block"]', function() {
    expect(wordOrder('programming is fun fun programming block')).to.eql(["programming", "fun", "is", "block"]);
  });

});
