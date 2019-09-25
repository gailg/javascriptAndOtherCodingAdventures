function MemberFactory() {
  this.createMember = function(name, membershipType) {
    let member;
    if(membershipType === "simple") {
      member = new SimpleMembership(name);
    } else if (membershipType === "standard") {
      member = new StandardMembership(name);
    } else if (membershipType === "super") {
      member = new SuperMembership(name);
    }
    member.membershipType = membershipType;
    member.define = function() {
      console.log(`${this.name} (${this.membershipType}): ${this.cost}`)
    }
    return member;
  }
}

const SimpleMembership = function(name) {
  this.name = name;
  this.cost = "$5";
}

const StandardMembership = function(name) {
  this.name = name;
  this.cost = "$15";
}

const SuperMembership = function(name) {
  this.name = name;
  this.cost = "$25";
}

const members = [];
const factory = new MemberFactory();
members.push(factory.createMember("Larry Otter", "super"));
members.push(factory.createMember("Charles Ray", "standard"));
members.push(factory.createMember("Sangea Star", "simple"));
console.log(`-----------------------------------------------------members`)
console.log(members);
console.log(`------------------members.forEach( member => member.define())`)
members.forEach( member => member.define());