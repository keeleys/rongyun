package cc.sitec.rongyun.controller;

import cc.sitec.rongyun.bean.Result;
import cc.sitec.rongyun.service.RongyunService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @Author keeley
 * @Date 18/10/8 14:01 
 */
@RestController
@RequestMapping("/rongyun")
public class RongyunController {
	@Autowired
	private RongyunService rongyunService;

	@GetMapping("/token")
	public Result token(@RequestParam("memberId") String memberId,
			@RequestParam("memberName") String memberName) throws Exception {
		String token = rongyunService.getToken(memberId,memberName);
		return Result.success(token);
	}
}
