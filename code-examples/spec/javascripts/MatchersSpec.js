describe("Matchers", function() {
  describe("primitive matching", function(){
    it("should treat the same primitive as equal", function(){
      expect(true).toBe(true);
    });

    it("should treat different primitives as not equal", function(){
      expect(true).not.toBe(false);
    });
  });

  describe("object matching", function(){
    it("should treat an object as equal to itself", function(){
      var o = {};
      expect(o).toBe(o);
    });

    it("should treat two different objects as not equal", function(){
      var o1 = {};
      var o2 = {};
      expect(o1).not.toBe(o2);
    });
  });

  describe("regular expressions", function(){
    it("should match", function(){
      expect("foobar").toMatch(/foo/);
    });

    it("should not match", function(){
      expect("foobar").not.toMatch(/baz/);
    });
  });

  describe("defined", function(){
    it("should be defined", function(){
      var o = {};
      expect(o).toBeDefined();
    });
  });

  describe("null", function(){
    it("should be null", function(){
      var o = null;
      expect(o).toBeNull();
    });
  });

  describe("boolean matching", function(){
    it("should be truthy", function(){
      expect(true).toBeTruthy();
    });

    it("should be falsy", function(){
      expect(false).toBeFalsy();
    });

    it("should be falsy", function(){
      expect("").toBeFalsy();
    });
  });

  describe("contains", function(){
    it("should contain 1", function(){
      var a = [1, 2, 3, 4];
      expect(a).toContain(1);
    });

    it("should contain 'bob'", function(){
      var s = "Yo bobby!";
      expect(s).toContain("bob");
    });

    it("should not contain 5", function(){
      var a = [1, 2, 3, 4];
      expect(a).not.toContain(5);
    });
  });

  describe("comparison", function(){
    it("should be greater than", function(){
      expect(10).toBeGreaterThan(0);
    });

    it("should be less than", function(){
      expect(0).toBeLessThan(10);
    });
  });

  describe("exceptions", function(){
    it("should throw an exception", function(){
      var f = function() {
        throw "Hello";
      };

      expect(function(){
        f();
      }).toThrow("Hello");
    });
  });

  describe("custom matchers", function(){
    it("should be coloured blue", function(){
      var o = {};
      o.colour = "blue";
      expect(o).toBeColoured("blue");
    });

    it("should not be coloured blue", function(){
      var o = {};
      o.colour = "green";
      expect(o).not.toBeColoured("blue");
    });
  });
});
